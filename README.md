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

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton. The Hadron theme can be found in the [Hadron Skeleton](https://github.com/Crabston/grav-demo) which is a self-contained repository for a complete site which include: sample content, configuration, theme, and plugins.

### GPM Installation (Preferred)
The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line). From the root of your Grav installation, type:

    bin/gpm install hadron

This will install the Hadron theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/hadron`.

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
_see page overrides on the [Quark theme (Page Overrides)](https://github.com/getgrav/grav-theme-quark#page-overrides)_

### Modular/ Hero Options
_see hero options on the [Quark theme (Hero Options)](https://github.com/getgrav/grav-theme-quark#hero-options)_

### Modular/ Features Options
_see features modular options on the [Quark theme (Features Modular Options)](https://github.com/getgrav/grav-theme-quark#features-modular-options)_

### Modular/ Text Options
_see text modular options on the [Quark theme  (Text Modular Options)](https://github.com/getgrav/grav-theme-quark#text-modular-options)_
