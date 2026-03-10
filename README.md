# volto-block-image-cards

[![Releases](https://img.shields.io/github/v/release/eea/volto-block-image-cards)](https://github.com/eea/volto-block-image-cards/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-image-cards%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-image-cards/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-image-cards%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-image-cards/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards&branch=develop)

Image Cards Block [Volto](https://github.com/plone/volto) add-on

## Features

- Round Tile
- Splashy Carousel
- Discreet Carousel
- Cards grid

[Block Image Cards](https://raw.githubusercontent.com/eea/volto-block-image-cards/master/docs/block-image-cards.png)

## Upgrade

### Upgrading to 1.x

This version requires: `@plone/volto >= 16.0.0.alpha.15` (`volto-slate` part of Volto Core).

## Getting started

### Try volto-block-image-cards with Docker

      git clone https://github.com/eea/volto-block-image-cards.git
      cd volto-block-image-cards
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-block-image-cards to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-block-image-cards"
   ],

   "dependencies": {
       "@eeacms/volto-block-image-cards": "*"
   }
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-block-image-cards/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-block-image-cards/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-block-image-cards/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
