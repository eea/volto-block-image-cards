import React from 'react';
import config from '@plone/volto/registry';

const ImageCardView = (props) => {
  const byDisplayType = {};
  const blockConfig = config.blocks.blocksConfig.imagecards;
  const { blockRenderers, defaultRendererName } = blockConfig;

  const block_renderers_ids = Object.keys(blockRenderers);
  block_renderers_ids.forEach(function (value) {
    byDisplayType[value] = blockRenderers[value].view;
  });

  const Impl = byDisplayType[props.data.display || defaultRendererName];

  return <Impl {...props} />;
};

export default ImageCardView;
