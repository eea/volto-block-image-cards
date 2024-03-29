import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import React from 'react';
import cx from 'classnames';
import { Card, Icon, Message } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { serializeNodes } from '@plone/volto-slate/editor/render';
import { getFieldURL } from '@eeacms/volto-block-image-cards/helpers';
import { getScaleUrl } from '@eeacms/volto-block-image-cards/ImageCards/utils';

import '@eeacms/volto-block-image-cards/ImageCards/css/cards.less';

const alignmentTypes = {
  left: 'left',
  right: 'right',
  center: 'centered',
  full: 'left',
};

const Cards = (props) => {
  const { data, editable } = props;
  const {
    align,
    cards,
    image_scale,
    gridSize = 'one',
    theme = 'default',
  } = data;

  const makeImage = (item) => {
    const { attachedimage } = item;
    return (
      <img
        src={
          getScaleUrl(getFieldURL(attachedimage), image_scale || 'preview') ||
          DefaultImageSVG
        }
        alt={item.title}
      />
    );
  };

  const makeTextBody = (item) => {
    const link = getFieldURL(item.link);

    return (
      <>
        <Card.Content>
          <Card.Header>{item.title ? item.title : item.id}</Card.Header>
          {item.meta && <Card.Meta>{serializeNodes(item.meta)}</Card.Meta>}
          {item.text && (
            <Card.Description>{serializeNodes(item.text)}</Card.Description>
          )}
        </Card.Content>
        {item.link && (
          <Card.Content extra>
            <UniversalLink href={link}>
              <Icon name="linkify" />
              {item.linkTitle || link}
            </UniversalLink>
          </Card.Content>
        )}
      </>
    );
  };

  if (!cards?.length && editable) {
    return <Message>No image cards</Message>;
  }

  return cards?.length ? (
    <div className={cx('ui fluid cards', gridSize)}>
      {cards.map((item) => (
        <Card
          key={item['@id']}
          className={cx(alignmentTypes[align] || 'left', theme)}
        >
          {makeImage(item)}
          {makeTextBody(item)}
        </Card>
      ))}
    </div>
  ) : (
    ''
  );
};

Cards.schema = () => ({
  title: 'Image Card',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'title',
        'meta',
        'text',
        'attachedimage',
        'link',
        'linkTitle',
        'copyright',
      ],
    },
  ],

  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    meta: {
      widget: 'slate_richtext',
      title: 'Meta data',
    },
    text: {
      widget: 'slate_richtext',
      title: 'Text',
    },
    link: {
      widget: 'url',
      title: 'Link',
    },
    linkTitle: {
      type: 'string',
      title: 'Link title',
    },
    attachedimage: {
      widget: 'attachedimage',
      title: 'Image',
    },
    copyright: {
      widget: 'slate_richtext',
      title: 'Copyright',
    },
  },

  required: ['attachedimage'],
});

Cards.schemaExtender = (schema) => {
  return {
    ...schema,
    fieldsets: [
      ...schema.fieldsets,
      {
        id: 'cards_grid',
        title: 'Cards grid',
        fields: ['gridSize', 'theme'],
      },
    ],
    properties: {
      ...schema.properties,
      gridSize: {
        title: 'Grid Size',
        choices: [
          ['one', 'One'],
          ['two', 'Two'],
          ['three', 'Three'],
          ['four', 'Four'],
        ],
        factory: 'Choice',
        type: 'string',
      },
      theme: {
        title: 'Theme',
        choices: [
          ['default', 'Default'],
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
        ],
      },
    },
  };
};

export default Cards;
