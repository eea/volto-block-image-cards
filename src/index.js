import iconSVG from '@plone/volto/icons/images.svg';
import React from 'react';
import { ImageCardsView, ImageCardsEdit } from './ImageCards';
import {
  BlockStyleWrapperEdit,
  BlockStyleWrapperView,
} from '@eeacms/volto-block-style/BlockStyleWrapper';
import { AttachedImageWidget } from './ImageCards/widgets';
import {
  Cards,
  Carousel,
  DiscreetCarousel,
  RoundTiled,
} from './ImageCards/displays';

export default (config) => {
  config.blocks.blocksConfig.imagecards = {
    id: 'imagecards',
    title: 'Image Cards',
    icon: iconSVG,
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

  if (!config.widgets.widget.attachedimagewidget) {
    config.widgets.widget.attachedimagewidget = AttachedImageWidget;
  }
  return config;
};
