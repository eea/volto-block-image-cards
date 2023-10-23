# volto-block-image-cards

[![Releases](https://img.shields.io/github/v/release/eea/volto-block-image-cards)](https://github.com/eea/volto-block-image-cards/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-image-cards%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-image-cards/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-image-cards%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-image-cards/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards-develop)

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

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-block-image-cards
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

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
