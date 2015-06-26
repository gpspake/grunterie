#Grunterie

Grunterie is a WordPress theme based on [Reverie](http://themefortress.com/reverie/), a "versatile HTML5 responsive WordPress framework based on [ZURB's Foundation](http://foundation.zurb.com/)." Reverie is set up to use the Compass gem to compile SCSS. With Grunterie you can still use Compass but you also have the ability to use lib-SASS and all of the other grunt plugins.

If you're in to [Grunt](http://gruntjs.com/), or not, and want to stay on the cutting edge, here are some things that are great about Grunterie.
 * Bleeding edge - Built with Foundation 5.5.2
 * Includes all the great features in Reverie (Really, I didn't change much)
 * Ready out-of-the-box if you don't want to bother with SASS
 * Built using the instructions in the [Foundation docs](http://foundation.zurb.com/docs/sass.html)
 * Takes full advantage of Grunt
 * Built to compile SCSS with lib-SASS by default
 * You can still use Compass! (It's easy, you'll just need follow some quick instructions below.)

## Requirements

Update: You no longer have to build this theme yourself; it should be ready to go. That being said, if you want to customize the theme with SASS using lib-sass or Compass instead of writing vanilla css, you'll still need to follow the directions below.

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone https://github.com/gpspake/grunterie.git
cd grunterie
npm install && bower install
```

While you're working on the project, run:

`grunt`

And you're set!

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here (Probably no need to mess with this.)
  * `scss/style.scss`: Theme styles go here (Copied from Reverie with Compass stuff commented out.)

#Using Compass

If you want to use Compass, Grunterie comes with the [grunt-compass-contrib](https://github.com/gruntjs/grunt-contrib-compass) plugin.

To use Compass, you'll need to make sure the compass gem is installed (```gem install compass```) and uncomment a few sections in the gruntfile.js file. There are detailed instructions about what to comment and uncomment in the file.  

After that, just run `grunt`
