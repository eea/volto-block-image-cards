import React from 'react';
import { SidebarPortal } from '@plone/volto/components'; // EditBlock
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';
import config from '@plone/volto/registry';

import ImageCardsView from './ImageCardsView';

import ImageCardSchema from './schema';

const tweakSchema = (schema, data) => {
  const { blockRenderers } = config.blocks.blocksConfig.imagecards;
  const extension = data.display
    ? blockRenderers[data.display].schemaExtender
    : null;
  return extension ? extension(schema, data) : schema;
};

const ImageCardsEdit = (props) => {
  const basicSchema = ImageCardSchema(props);
  const schema = tweakSchema(basicSchema, props.data);
  const display = props.data.display || 'carousel';
  const CardsView =
    config.blocks.blocksConfig.imagecards.blockRenderers?.[display]?.edit ||
    ImageCardsView;

  return (
    <>
      <CardsView data={props.data} />

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
          formData={{
            ...props.data,
            display: props.data?.display || 'carousel',
          }}
          block={props.block}
        />
      </SidebarPortal>
    </>
  );
};

export default ImageCardsEdit;
