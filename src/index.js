import codeSVG from '@plone/volto/icons/code.svg';
import React from 'react';
import { ImageCardsView, ImageCardsEdit } from './ImageCards';
import {
  BlockStyleWrapperEdit,
  BlockStyleWrapperView,
} from '@eeacms/volto-block-style/BlockStyleWrapper';
import AttachedImageWidget from './ImageCards/AttachedImageWidget';
import RoundTiled from './ImageCards/RoundTiled';
import Carousel from './ImageCards/Carousel';
import DiscreetCarousel from './ImageCards/DiscreetCarousel';

export default (config) => {
  config.blocks.blocksConfig.imagecards = {
    id: 'imagecards',
    title: 'Image Cards',
    icon: codeSVG,
    group: 'common',
    view: (props) => (
      <BlockStyleWrapperView {...props}>
        <ImageCardsView {...props} />
      </BlockStyleWrapperView>
    ),
    edit: (props) => (
      <BlockStyleWrapperEdit {...props}>
        <ImageCardsEdit {...props} />
      </BlockStyleWrapperEdit>
    ),
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
      },
      discreetCarousel: {
        title: 'Discreet Carousel',
        schema: null,
        view: DiscreetCarousel,
        schemaExtender: DiscreetCarousel.schemaExtender,
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
