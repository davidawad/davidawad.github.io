
all: site

install:
	# install ruby
	# install bundler
	# bundle install
	brew install ruby
	brew install rbenv
	brew install cmake
	gem install bundler
	bundle install

run: clean
	bundle exec jekyll serve --incremental

# I have a custom alias for this on my personal machine
deploy:
	sitedeploy

clean:
	rm -rf _site
