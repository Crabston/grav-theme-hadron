# Hadron Theme
Hadron is a modern and fast Grav Theme and Skeleton for Grav with many other features. Use the Hadron theme on existing websites or when you want to start from scratch. It is customizable, responsive, and has many other great features ready to use.

![Hadron Logo](./images/logo/hadron-logo.svg)

## Description
Hadron is a modern [Grav](https://getgrav.org) theme based on [Quark](https://github.com/getgrav/grav-theme-quark). As a child/ inherited theme of Quark, it includes more advanced features than the original Quark theme. It also offers advanced styling options.

## usehadron.dev
If you want to see the Hadron theme in action, you can visit [usehadron.dev](https://usehadron.dev/?utm_source=github.com&utm_medium=theme-readme), the official website of Hadron. There you will find a short introduction to Hadron, its features, a list of its components and showcases of example pages and the docs for Hadron.

## Future Plans
The Hadron theme is under active development and receives regular updates with new features and improvements. What's next for Hadron? Here are some of the planned features:
1. More page templates and styling features
2. More customization options
3. Full Spectre.CSS theme with all components _(this will make it a full theme, not just a child theme)_
4. Detailed documentation for features and options

## Features
Here are some of the most important features of the Hadron theme:
- Out of the box multilanguage support
- Easy to use Snipcart shop
- Responsive tables on small screens
- Additional page templates
  - H5P (interactive content)
  - Sections
  - Cards
  - Special SbS layout for text and image
  - _and a lot more_
- Menu with dropdown support
- Newest Fontawesome Icons (v6.7.2)
- Featured posts for blog

### Inherited Quark Features
These are additional features that come from the Quark theme:
- Lightweight and minimal for optimal performance
- Spectre CSS Framework
- Fully responsive with full-page mobile navigation
- SCSS based CSS source files for easy customization
- Built-in support for on-page navigation
- Multiple page template types
- Fontawesome icon support

## Page Templates
_Learn more about page templates on [https://usehadron.dev/templates/?utm_source=github.com&utm_medium=theme-readme)_

- `embedlycard.md`
- `h5p.md`
- `sections.md`
- Modular templates:
  - `cards.md`
  - `sbs.md`
  - `sbs-list.md`

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

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton. The Hadron theme can be found in the [Hadron Skeleton](https://github.com/Crabston/grav-hadron-skeleton) which is a self-contained repository for a complete site which include: sample content, configuration, theme, and plugins.

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
grid-size: grid-lg          # The width of the theme; options: grid-xl, grid-lg, grid-md
blog-page: /blog            # The route to the blog page
hide_title: true            # If the text title in the navigation should be hidden
dropdown:
  enabled: true             # Enable dropdown navigation
custommenus:
  enabled: false            # Enable custom menu below
menu:                       # Custom menu options (see below)
langswitcher:               # Language switcher options (see below)
header-fixed: true          # Cause the header to be fixed at the top of the browser
header-animated: true       # Allows the fixed header to resize to a smaller header when scrolled
header-dark: false          # Inverts the text/logo to work better on dark backgrounds
header-transparent: false   # Allows the fixed header to be transparent over the page
sticky-footer: true         # Causes the footer to be sticky at the bottom of the page
production-mode: true       # In production mode, only minified CSS is used. When disabled, nested CSS with sourcemaps are enabled
h5pembedrootpath: 'https://h5p.org/h5p/embed/' # This is the default h5p path for embeddings
fontawesome:                # Customize the use of fontawesome icons (see below)
invert_logo: true           # Inverts the logo in the navigation
favicon:                    # A custom favicon (see below)
custom_logo:                # A custom logo (see below)
custom_logo_mobile:         # A custom logo for mobile devices (see below)
```

To make modifications, you can copy the `user/themes/hadron/hadron.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> NOTE: Do not modify the `user/themes/hadron/hadron.yaml` file directly or your changes will be lost with any updates

### Custom menu
You can add a custom menu entry to the navigation bar by setting the `menu` option in the theme configuration file. Don't forget to enable them with `custommenus.enabled` The options are:

```yaml
menu:                       
  - text:     # Text to display in the menu
    icon:     # Optional font awesome icon, e.g. 'external-link'
    url:      # URL to link to, e.g. 'https://getgrav.org/'
    target:   # Optional target for the link, e.g. '_blank' to open in a new tab
```

### Language Switcher
You can add a language switcher to the navigation bar by setting the `langswitcher` option in the theme configuration file. The options are:

```yaml
langswitcher: 
  enable: true      # Enable the language switcher
  display: inline   # Display style of the language switcher, options: inline, dropdown
  format: icon      # Format of the language display, options: long, short, icon, combined
```

### Fontawesome Icons
You can customize the use of Fontawesome icons by setting the `fontawesome` option in the theme configuration file. The options are:

```yaml
fontawesome:
  solid: false    # Enable solid icons
  regular: false  # Enable regular icons
  brand: false    # Enable brand icons
```
If you activate an icon set, the built-in Quark icons (forkawesome) get deactivated. You can enable multiple icons sets at the same time.

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
