
all: site

run: clean
	bundle exec jekyll serve --incremental

# I have a custom alias for this on my personal machine
deploy:
	sitedeploy

clean:
	rm -rf _site
