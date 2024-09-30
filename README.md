# Hadron Theme
modern Grav theme based on Quark with advanced features and styles

## Description
Hadron is a modern [Grav](https://getgrav.org) theme based on [Quark](https://github.com/getgrav/grav-theme-quark). As a child/ inherited theme of Quark, it includes more advanced features than the original Quark theme. It also offers advanced styling options.

## Demo
If you want to see the Hadron theme in action, you can visit the [Hadron Demo Site](https://grav.demo.crabston.dev). There you will find a short introduction to the theme and its features too. There are a components page and some example pages too.

## Features
_Learn more about all the features on [tutorials.crabston.ch/grav/hadron](https://tutorials.crabston.ch/grav/hadron)_

- Responsive tables
- Built-in Support for Embed.ly
- Built-in Support for H5P
- Featured posts for blog
- other enhancements

### Inherited Quark Features
- Lightweight and minimal for optimal performance
- Spectre CSS Framework
- Fully responsive with full-page mobile navigation
- SCSS based CSS source files for easy customization
- Built-in support for on-page navigation
- Multiple page template types
- Fontawesome icon support

## Page Templates
_Learn more about page templates on [tutorials.crabston.ch/grav/seiten/seiten-typen](https://tutorials.crabston.ch/grav/seiten/seiten-typen)_

### Inherited Quark Page Templates
- Default template `default.md`
- Error template `error.md`
- Blog template `blog.md`
- Blog item template `item.md`
- Modular templates: `modular.md`
  - Features Modular template `features.md`
  - Hero Modular template `hero.md`
  - Text Modular template `text.md`

## Installation
Installing the Hadron theme can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton. The Hadron theme can be found in the [Hadron](https://github.com/Crabston/grav-demo) which is a self-contained repository for a complete site which include: sample content, configuration, theme, and plugins.

### GPM Installation (Preferred)
The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install hadron

This will install the Quark theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/hadron`.

### Manual Installation
To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `hadron`. You can find these files either on [GitHub](https://github.com/Crabston/grav-theme-hadron) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under `/your/site/grav/user/themes/hadron`.

## Customization
This theme has various customization options. You can customize the theme by editing the theme configuration file. You can also customize the theme by creating a custom CSS/ SCSS file.

## Theme Options
The Hadron theme has many options that can be set in the theme configuration file. Some of the important options are:

```yaml
grid-size: grid-lg              # The max-width of the theme, options include: `grid-xl`, `grid-lg`, and `grid-md`
blog-page: /blog                # The route to the blog page
dropdown:
  enabled: true                 # Enable dropdown navigation
header-fixed: true              # Cause the header to be fixed at the top of the browser
header-animated: true           # Allows the fixed header to resize to a smaller header when scrolled
header-dark: false              # Inverts the text/logo to work better on dark backgrounds
header-transparent: false       # Allows the fixed header to be transparent over the page
sticky-footer: true             # Causes the footer to be sticky at the bottom of the page
production-mode: true           # In production mode, only minified CSS is used. When disabled, nested CSS with sourcemaps are enabled
favicon:                        # A custom favicon rather than the theme default (see below for more information)
custom_logo:                    # A custom logo (see below)
custom_logo_mobile:             # A custom logo for mobile devices (see below)
```

To make modifications, you can copy the `user/themes/hadron/hadron.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> NOTE: Do not modify the `user/themes/hadron/hadron.yaml` file directly or your changes will be lost with any updates

### Custom Favicon & Logos
To add a custom favicon/ logo, you should put the favicon/ logo into the `user/themes/hadron/images/logo` folder. Standard image formats are supported (.png, .jpg, .gif, .svg, etc.). Then reference the logo via the YAML like so:

```yaml
favicon:
  path/to/your/favicon.svg:
    name: favicon.svg
    full_path: favicon.svg
    type: image/svg+xml
    size: 2048
    path: user/themes/local/images/favicon.svg
custom_logo:
  path/to/your/logo.png:
    name: logo.png
    full_path: logo.png
    type: image/png+xml
    size: 8192
    path: path/to/your/logo.png
custom_logo_mobile:
  path/to/your/mobile-logo.jpg:
    name: mobile-logo.jpg
    full_path: mobile-logo.jpg
    type: image/jpg+xml
    size: 4096
    path: path/to/your/mobile-logo.jpg
```

### Page Overrides
Quark has the ability to allow pages to override some of the default options by letting the user set `body_classes` for any page. The theme will merge the combination of the defaults with any `body_classes` set. For example:

```yaml
body_classes: "header-dark header-transparent"
```

On a particular page will ensure that page has those options enabled (assuming they are false by default).

### Hero Options
The hero template allows some options to be set in the page frontmatter. This is used by the modular `hero` as well as the blog and item templates to provide a more dynamic header.

```yaml
hero_classes: text-light title-h1h2 parallax overlay-dark-gradient hero-large
hero_image: road.jpg
hero_align: center
```

The `hero_classes` option allows a variety of hero classes to be set dynamically these include:
- `text-light` | `text-dark` - Controls if the text should be light or dark depending on the content
- `title-h1h2` - Enforced a close matched h1/h2 title pairing
- `parallax` - Enables a CSS-powered parallax effect
- `overlay-dark-gradient` - Displays a transparent gradient which further darkens the underlying image
- `overlay-light-gradient` - Displays a transparent gradient which further lightens the underlying image
- `overlay-dark` - Displays a solid transparent overlay which further darkens the underlying image
- `overlay-light` - Displays a solid transparent overlay which further darkens the underlying image
- `hero-fullscreen` | `hero-large` | `hero-medium` | `hero-small` | `hero-tiny` - Size of the hero block

The `hero_image` should point to an image file in the current page folder.

### Features Modular Options
The features modular template provides the ability to set a class on the features, as well as an array of feature items. For example:

```yaml
class: offset-box
features:
    - header: Crazy Fast
      text: "Performance is not just an afterthought, we baked it in from the start!"
      icon: fighter-jet
    - header: Easy to build
      text: "Simple text files means Grav is trivial to install, and easy to maintain"
      icon: database
    - header: Awesome Technology
      text: "Grav employs best-in-class technologies such as Twig, Markdown &amp; Yaml"
      icon: cubes
    - header: Super Flexible
      text: "From the ground up, with many plugin hooks, Grav is extremely extensible"
      icon: object-ungroup
    - header: Abundant Plugins
      text: "A vibrant developer community means over 200 themes available to download"
      icon: puzzle-piece
    - header: Free / Open Source
      text: "Grav is an open source project, so you can spend your money on other stuff"
      icon: money 
```

### Text Modular Options
The text box provides a single option to control if any image found in the page folder should be left or right aligned:

```yaml
image_align: right
```
