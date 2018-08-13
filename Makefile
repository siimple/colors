.PHONY: build templates lint docs

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
	@echo ""

build:
	@logger -s "Build started"
	${NODE_BIN}/sass ./scss/siimple-colors.scss ${OUTPUT_CSS}
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
	cd ./docs && bundle install
	@# Hack to ensure that sass finds the siimple source code
	ln -s ${PWD} ./bower_components/siimple-colors 
	@logger -s "Setup finished"

docs: 
	@logger -s "Docs build task started"
	@logger -s "Building documentation site with Jekyll"
	cd ./docs && jekyll build
	@logger -s "Copying assets files"
	cp ./colors.json ./docs/_site/assets/
	mkdir -p ./docs/_site/assets/css
	cp ./bower_components/siimple/dist/siimple.min.css ./docs/_site/assets/css/
	cp ${OUTPUT_MIN} ./docs/_site/assets/css/
	mkdir -p ./docs/_site/assets/images
	cp ./media/logo.png ./docs/_site/assets/images/
	mkdir -p ./docs/_site/assets/js/
	cp ./node_modules/react/umd/react.production.min.js ./docs/_site/assets/js/
	cp ./node_modules/react-dom/umd/react-dom.production.min.js ./docs/_site/assets/js/
	@logger -s "Docs build task finished"

# Serve docs
docs-serve: 
	${NODE_BIN}/stattic --folder ./docs/_site/ --port 5000 --cors

