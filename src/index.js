import iconSVG from '@plone/volto/icons/images.svg';
import { ImageCardsView, ImageCardsEdit } from './ImageCards';
import {
  Cards,
  Carousel,
  DiscreetCarousel,
  RoundTiled,
} from './ImageCards/displays';

export default function applyConfig(config) {
  config.blocks.blocksConfig.imagecards = {
    id: 'imagecards',
    title: 'Image Cards',
    icon: iconSVG,
    group: 'common',
    view: ImageCardsView,
    edit: ImageCardsEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockRenderers: {
      round_tiled: {
        title: 'Round Tile',
        schema: null,
        view: RoundTiled,
      },
      carousel: {
        title: 'Splashy Carousel',
        schema: null,
        view: Carousel,
        schemaExtender: Carousel.schemaExtender,
      },
      discreetCarousel: {
        title: 'Discreet Carousel',
        schema: null,
        view: DiscreetCarousel,
        schemaExtender: DiscreetCarousel.schemaExtender,
      },
      cards_grid: {
        title: 'Cards grid',
        view: Cards,
        schema: Cards.schema,
        schemaExtender: Cards.schemaExtender,
      },
    },
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
}
