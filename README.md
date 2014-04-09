#Grunterie

Grunterie is a WordPress theme based on [Reverie](http://themefortress.com/reverie/), a "versatile HTML5 responsive WordPress framework based on [ZURB's Foundation](http://foundation.zurb.com/)." Reverie is set up to use the Compass gem so, if you use [Compass](http://compass-style.org/) or you want a theme that's ready-to-go, use Reverie.
If you're in to [Grunt](http://gruntjs.com/) and want to stay on the cutting edge, here are some things that are great about Grunterie.
 * Includes all the great features in Reverie (Really, I didn't change much)
 * Built using the instructions in the [Foundation docs](http://foundation.zurb.com/docs/sass.html)
 * Takes full advantage of Grunt
 * Update Foundation any time with ```foundation update``` (Requires Foundation gem)

## Requirements

Note: This isn't an out-of-the-box theme; you'll need to build it yourself. If you want one that's ready-to-go, use [Reverie](http://themefortress.com/reverie/).

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone https://github.com/gpspake/wp-foundation.git
npm install && bower install
```

While you're working on the project, run:

`grunt`

And you're set!

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here (Probably no need to mess with this.)
  * `scss/style.scss`: Theme styles go here (Copied from Reverie with Compass stuff commented out.)

