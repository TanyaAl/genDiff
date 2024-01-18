install:
	npm ci
gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
test-coverage:
	npm test -- --coverage 
make fix:
	npx eslint . --fix
test:
	npm test



