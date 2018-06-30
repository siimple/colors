.PHONY: build compile-templates clean

# Node binaries path
NODE_BIN=./node_modules/.bin

# Build input and output files
OUTPUT_CSS=./dist/siimple-colors.css
OUTPUT_MIN=./dist/siimple-colors.min.css

help:
	@echo "Available commands: "
	@echo ""
	@echo "  make build               Generate the compiled CSS files of siimple-colors"
	@echo "  make clean               Clean the generated folders"
	@echo "  make compile-templates   Compile all the templates"
	@echo ""

build:
	@set -e
	@logger -s "Build started"
	${NODE_BIN}/node-sass ./scss/siimple-colors.scss ${OUTPUT_CSS}
	@logger -s "Adding the header"
	node ./scripts/header.js > ./dist/header.txt
	cat ./dist/header.txt ${OUTPUT_CSS} > ${OUTPUT_CSS}.temp
	rm ./dist/header.txt ${OUTPUT_CSS}
	mv ${OUTPUT_CSS}.temp ${OUTPUT_CSS}
	@logger -s "Autoprefix and clean generated css file"
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output ${OUTPUT_CSS} ${OUTPUT_CSS}
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output ${OUTPUT_MIN} ${OUTPUT_CSS}
	@logger -s "Build finished"

clean:
	@set -e
	rm -rf ./dist
	mkdir -p dist

compile-templates:
	@set -e
	# Compile templates placed in ./templates folder
	#node ./scripts/templates.js --source scss
	node ./scripts/templates.js --source test

