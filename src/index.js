import codeSVG from '@plone/volto/icons/code.svg';
import { ImageCardsView, ImageCardsEdit } from './ImageCards';
import AttachedImageWidget from './ImageCards/AttachedImageWidget';

import RoundTiled from './ImageCards/RoundTiled';
import Carousel from './ImageCards/Carousel';

export default (config) => {
  config.blocks.blocksConfig.imagecards = {
    id: 'imagecards',
    title: 'Image Cards',
    icon: codeSVG,
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
        title: 'Carousel',
        schema: null,
        view: Carousel,
      },
    },
    security: {
      addPermission: [],
      view: [],
    },
  };

  if (!config.widgets.widget.attachedimage) {
    config.widgets.widget.attachedimage = AttachedImageWidget;
  }
  return config;
};
