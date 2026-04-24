.PHONY: run test e2e

run:
	yarn dev

test:
	yarn test

e2e:
	yarn build && yarn test:e2e
