.PHONY: build compile-templates clean

# Node binaries path
NODE_BIN=./node_modules/.bin

help:
	@echo "Available commands: "
	@echo ""
	@echo "  make build               Generate the compiled CSS files of siimple-colors"
	@echo "  make clean               Clean the generated folders"
	@echo "  make compile-templates   Compile all the templates"
	@echo ""

build:
	@set -e
	# Complie the scss files and generate the output css
	${NODE_BIN}/node-sass ./scss/siimple-colors.scss ./dist/siimple-colors.css
	# Add the header
	@node ./scripts/header.js > ./dist/header.txt
	@cat ./dist/header.txt ./dist/siimple-colors.css > ./dist/siimple-colors.temp.css
	@rm ./dist/header.txt ./dist/siimple-colors.css
	@mv ./dist/siimple-colors.temp.css ./dist/siimple-colors.css
	# Autoprefix and clean generated css file
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output ./dist/siimple-colors.css ./dist/siimple-colors.css
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output ./dist/siimple-colors.min.css ./dist/siimple-colors.css

clean:
	@set -e
	# Remove the dist folder 
	rm -rf ./dist
	mkdir -p dist

compile-templates:
	@set -e
	# Compile templates placed in ./templates folder
	node ./scripts/templates.js --source scss
	node ./scripts/templates.js --source test

