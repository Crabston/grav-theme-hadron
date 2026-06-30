![Hadron Logo](hadron.svg)

# Grav Hadron Theme
[Hadron](https://usehadron.dev/) is more than a modern and customizable [Grav](https://getgrav.org/) theme and skeleton. On the one hand, it is optimized for beginners to quickly create a simple website, but on the other hand, it is also suitable for professionals who want to use Hadron as a foundation for a complex website with self-developed functions.

This theme is part of the [Hadron Skeleton](https://github.com/Crabston/grav-skeleton-hadron/) and is based on [Quark2](https://github.com/getgrav/grav-theme-quark2). It enhances Quark2 with additional features and customization options Quark2 doesn't support. There are also new page templates and other elements that are not part of Quark2.
If you are already using Quark or Quark2, you can easily switch to Hadron by installing the Hadron theme and changing the theme in the Grav configuration.

> [!NOTE]
> With the latest Hadron 3 we now support [Grav v2](https://getgrav.org/blog/grav-2-stable-released) & [Quark2](https://github.com/getgrav/grav-theme-quark2)!

## Demo
You can see the Hadron skeleton & theme in action on the [Hadron Website](https://usehadron.dev/). There you will find a short introduction to the skeleton/ theme and its features too. There is an elements page and some template / example pages too.

If you want, you can also follow the [installation instructions](#installation), to test Hadron live on your device. It is very easy and just takes a few minutes to set up.

## Features
_Learn more about all the features of Hadron in detail on [usehadron.dev/docs/theme/page-types](https://usehadron.dev/docs/theme/page-types)._

Here are some of the main features of the Hadron theme:
- Ready-to-use language switcher for multilingual sites
- Unique support for responsive tables
- Menu with dropdown support and customizable menu items
- More theme customization options
- Built-in Support for H5P
- Built-in Support for Embed.ly

## Installation
Installing the Hadron theme can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton. The Hadron theme can be found in the [Hadron Skeleton](https://github.com/Crabston/grav-skeleton-hadron) which is a self-contained repository for a complete site which include: sample content, configuration, theme, and plugins and much more!

### GPM Installation (Preferred)
The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line). From the root of your Grav installation, type:

```bash
bin/gpm install hadron
```

This will install the Hadron theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/hadron`.

### Manual Installation
To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `hadron`. You can find these files either on [GitHub](https://github.com/Crabston/grav-theme-hadron) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under `/your/site/grav/user/themes/hadron`.

## Customization
This theme has various customization options. You can customize the theme by editing the theme configuration file. You can also customize the theme by creating a custom CSS/ SCSS file.

## Theme Options
The Hadron theme has many options that can be set in the theme configuration file. Find all of them in the docs: [usehadron.dev/docs/theme/options](https://usehadron.dev/docs/theme/options)

_Some of the important options are:_
```yaml
grid-size: grid-lg          # The max-width of the theme, options include: `grid-xl`, `grid-lg`, and `grid-md`
blog-page: /blog            # The route to the blog page
dropdown:
  enabled: true             # Enable dropdown navigation
header-fixed: true          # Cause the header to be fixed at the top of the browser
header-animated: true       # Allows the fixed header to resize to a smaller header when scrolled
header-dark: false          # Inverts the text/logo to work better on dark backgrounds
header-transparent: false   # Allows the fixed header to be transparent over the page
sticky-footer: true         # Causes the footer to be sticky at the bottom of the page
production-mode: true       # In production mode, only minified CSS is used. When disabled, nested CSS with sourcemaps are enabled
fontawesome:                # Customize the use of fontawesome icons
favicon:                    # A custom favicon rather than the theme default (see below for more information)
custom_logo:                # A custom logo (see below)
custom_logo_mobile:         # A custom logo for mobile devices (see below)
theme-mode: auto            # Color mode for the theme, options include: `auto`, `light`, and `dark`
accent-color: '#242424'     # The accent color for the theme, can be any valid CSS HEX color value
monochrome-logo: false      # If true, the logo will be monochrome and will change depending on the theme mode (light/dark).
favicon:                    # A custom favicon rather than the theme default
custom_logo:                # A custom logo for the navigation bar / header
custom_logo_mobile:         # A custom logo for the navigation bar / header on mobile devices
header-fixed: true          # Causes the header to be fixed at the top of the browser
header-animated: true       # Allows the fixed header to resize to a smaller header when scrolled
header-transparent: false   # Allows the header to be transparent over the page (only for hero elements)
sticky-footer: true         # Causes the footer to be sticky at the bottom of the page
hide_title: false           # Hides the site title in the header
dropdown.enabled: true      # Enables dropdown navigation
custommenus.enabled: true   # Enables custom menus in the header
menu:                       # Sets custom menu items for the header navigation
fontawesome.enabled: true   # Enables the use of Font Awesome icons (V7)
langswitcher:               # Settings for the language switcher in the header
blog-page: /blog            # The route to the blog page
h5pembedrootpath: ''        # The root path for H5P embed files, if not set, the public H5P CDN will be used.
```

To make modifications, you can copy the `user/themes/hadron/hadron.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> NOTE: Do not modify the `user/themes/hadron/hadron.yaml` file directly or your changes will be lost with any updates
