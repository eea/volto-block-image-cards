# @eeacms/volto-block-image-cards

[![Releases](https://img.shields.io/github/v/release/eea/volto-block-image-cards)](https://github.com/eea/volto-block-image-cards/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-block-image-cards%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-block-image-cards/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-block-image-cards&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-block-image-cards)

Image Cards Block [Volto](https://github.com/plone/volto) add-on

## Features

- Round Tile
- Splashy Carousel
- Discreet Carousel
- Cards grid

## Translations

This product support the following languages:

- Deutsch

- English

- Spanish

- Italian

- Romanian

[Block Image Cards](https://raw.githubusercontent.com/eea/volto-block-image-cards/master/docs/block-image-cards.png)

## Upgrade

### Upgrading to 5.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The block keeps the same blocks and displays, so upgrading from 4.x on Volto 18 needs no content changes. The release adds Volto 19 support and moves the repository to the Volto 19 layout, where the published package lives in `packages/volto-block-image-cards`.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22.0.0`), 4.x declared no engine.
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers; 4.x declared only `classnames`, `react-loadable` and `uuid`, which it still declares.
- **The package no longer ships the Jest setup.** `jest-addon.config.js` is gone and `jest.setup.js` became `vitest.setup.jsx`, so a Volto 18 project that still runs the Jest harness has to keep its own copy.

Two links rendered by the schema and by the discreet carousel now carry `rel="noopener noreferrer"` instead of `rel="noopener"`.

### Upgrading to 1.x

This version requires: `@plone/volto >= 16.0.0.alpha.15` (`volto-slate` part of Volto Core).

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-block-image-cards": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-block-image-cards'];
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

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
