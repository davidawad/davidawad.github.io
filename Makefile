
all: site

run:
	bundle exec jekyll serve --incremental

deploy:
	sc
	(cd _site && sc)
