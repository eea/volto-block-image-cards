import React from 'react';
import { SidebarPortal } from '@plone/volto/components'; // EditBlock
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';
import config from '@plone/volto/registry';

import ImageCardsView from './ImageCardsView';

import image_schema from './schema';

const tweakSchema = (schema, data) => {
  const { blockRenderers } = config.blocks.blocksConfig.imagecards;
  const renderers = Object.keys(blockRenderers).map((k) => [
    k,
    blockRenderers[k].title,
  ]);
  schema.properties.display.choices = renderers;

  const extension = data.display
    ? blockRenderers[data.display].schemaExtender
    : null;
  return extension ? extension(schema, data) : schema;
};

const ImageCardEdit = (props) => {
  const schema = tweakSchema(image_schema(props), props.data);
  return (
    <>
      <ImageCardsView data={props.data} />

      <SidebarPortal selected={props.selected}>
        <InlineForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          formData={props.data}
          block={props.block}
        />
      </SidebarPortal>
    </>
  );
};

export default ImageCardEdit;
