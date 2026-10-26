# Run the development server
run:
    yarn dev

# Run unit tests
test:
    yarn test

# Build and run E2E tests
e2e:
    yarn build && yarn test:e2e

# Build and publish to GitHub Pages (gh-pages branch); run after merging to master
deploy:
    bin/deploy
