.PHONY: build templates lint docs publish docs-serve docs-build docs-publish

# Node binaries path
NODE_BIN=./node_modules/.bin

# Build input and output files
OUTPUT_CSS=./dist/siimple-colors.css
OUTPUT_MIN=./dist/siimple-colors.min.css

help:
	@echo "Available commands: "
	@echo ""
	@echo "  make build               Generate the compiled CSS files of siimple-colors"
	@echo "  make install             Install all dependencies"
	@echo "  make lint                Run sass-lint"
	@echo "  make templates           Compile all the templates"
	@echo "  make docs                Generate documentation site"
	@echo ""

build:
	@logger -s "Build started"
	${NODE_BIN}/sass ./index.scss ${OUTPUT_CSS}
	@logger -s "Adding the header"
	node ./scripts/header.js > ./dist/header.txt
	cat ./dist/header.txt ${OUTPUT_CSS} > ${OUTPUT_CSS}.temp
	rm ./dist/header.txt ${OUTPUT_CSS}
	mv ${OUTPUT_CSS}.temp ${OUTPUT_CSS}
	@logger -s "Autoprefix and clean generated css file"
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output ${OUTPUT_CSS} ${OUTPUT_CSS}
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output ${OUTPUT_MIN} ${OUTPUT_CSS}
	@logger -s "Build finished"

lint:
	${NODE_BIN}/sass-lint -v

templates:
	@logger -s "Compile templates task started"
	node ./scripts/templates.js --source scss
	node ./scripts/templates.js --source test
	@logger -s "Compile templates task finished"

install:
	@logger -s "Setup started"
	npm install 
	@# Install documentation dependencies
	bower install
	#cd ./docs && bundle install
	@# Hack to ensure that sass finds the siimple-colors source code
	ln -s ${PWD} ./bower_components/siimple-colors 
	@logger -s "Setup finished"

# Docs generation and serving
docs:
	${MAKE} docs-build
	${MAKE} docs-serve

# Build docs
docs-build: 
	@logger -s "Docs build task started"
	@logger -s "Building documentation site"
	mkdir -p ./docs/data && cp ./colors.json ./docs/data/
	./node_modules/.bin/siimplepress --config docs/config.js
	#cd ./docs && bundle exec jekyll build
	@logger -s "Copying assets files"
	#mkdir -p ./docs/_site/assets/css
	#${NODE_BIN}/sass ./docs/_sass/main.scss ./docs/_site/assets/css/main.css --load-path=./bower_components/
	#cp ./bower_components/siimple/dist/siimple.min.css ./docs/_site/assets/css/
	cp ${OUTPUT_MIN} ./docs/public/css/
	mkdir -p ./docs/public/images
	cp ./art/*.svg ./docs/public/images/
	@logger -s "Docs build task finished"

# Serve docs
docs-serve: 
	${NODE_BIN}/stattic --folder ./docs/public/ --port 5000 --cors

# Publish docs
docs-publish:
	@logger -s "Deploy started"
	make docs
	@logger -s "Deploying documentation website"
	gsutil rsync -d -r ./docs/_site gs://siimple-documentation.appspot.com/colors
	@logger -s "Deploy finished"


