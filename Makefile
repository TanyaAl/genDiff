install:
	npm ci
gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
make lint:
	npx eslint
test-coverage:
	npm test -- --coverage 
fix:
	npx eslint . --fix


