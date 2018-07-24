
all: site

site:
	bundle exec jekyll serve --incremental

update:
	sc
	(cd _site && sc)
