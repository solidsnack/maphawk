.PHONY: all
all: lint dist

.PHONY: clean
clean:
	rm -rf dist/*

.PHONY: dist
dist:
	npm run webpack

.PHONY: tsc
tsc:
	npm run tsc

.PHONY: lint
lint:
	npm run lint

.PHONY: fix
fix:
	npm run fix
