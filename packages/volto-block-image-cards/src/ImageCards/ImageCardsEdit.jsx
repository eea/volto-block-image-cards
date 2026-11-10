import React from 'react';
import { injectIntl } from 'react-intl';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';
import config from '@plone/volto/registry';

import ImageCardsView from './ImageCardsView';
import ImageCardSchema from './schema';

const tweakSchema = (schema, data, intl) => {
  const { blockRenderers } = config.blocks.blocksConfig.imagecards;
  const extension = data.display
    ? blockRenderers[data.display]?.schemaExtender
    : null;
  return extension ? extension(schema, data, intl) : schema;
};

const CardsEdit = (props) => {
  const { selected, onChangeBlock, data = {}, block, intl } = props;
  const basicSchema = ImageCardSchema(props, intl);
  const schema = tweakSchema(basicSchema, props.data, intl);

  return (
    <>
      <ImageCardsView {...props} isEditMode={true} />

      <SidebarPortal selected={selected}>
        <InlineForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

const ImageCardsEdit = (props) => {
  return <CardsEdit {...props} />;
};

export default injectIntl(ImageCardsEdit);
