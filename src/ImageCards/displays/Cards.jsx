import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import React from 'react';
import cx from 'classnames';
import { Card, Icon, Message } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { serializeNodes } from '@plone/volto-slate/editor/render';
import { getFieldURL } from '@eeacms/volto-block-image-cards/helpers';
import { getScaleUrl } from '@eeacms/volto-block-image-cards/ImageCards/utils';

import '@eeacms/volto-block-image-cards/ImageCards/css/cards.less';

import messages from '@eeacms/volto-block-image-cards/messages';

const alignmentTypes = {
  left: 'left',
  right: 'right',
  center: 'centered',
  full: 'left',
};

const Cards = (props) => {
  const { data, editable, intl } = props;
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
    return <Message>{intl.formatMessage(messages.imageCardsNull)}</Message>;
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

Cards.schema = (intl) => ({
  title: intl.formatMessage(messages.imageCardsCardTitle),
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
      title: intl.formatMessage(messages.title),
    },
    meta: {
      widget: 'slate_richtext',
      title: intl.formatMessage(messages.metadata),
    },
    text: {
      widget: 'slate_richtext',
      title: intl.formatMessage(messages.text),
    },
    link: {
      widget: 'url',
      title: intl.formatMessage(messages.link),
    },
    linkTitle: {
      type: 'string',
      title: intl.formatMessage(messages.linkTitle),
    },
    attachedimage: {
      widget: 'attachedimage',
      title: intl.formatMessage(messages.image),
    },
    copyright: {
      widget: 'slate_richtext',
      title: intl.formatMessage(messages.copyright),
    },
  },

  required: ['attachedimage'],
});

Cards.schemaExtender = (schema, data, intl) => {
  return {
    ...schema,
    fieldsets: [
      ...schema.fieldsets,
      {
        id: 'cards_grid',
        title: intl.formatMessage(messages.cardGrid),
        fields: ['gridSize', 'theme'],
      },
    ],
    properties: {
      ...schema.properties,
      gridSize: {
        title: intl.formatMessage(messages.gridSizeTitle),
        choices: [
          ['one', intl.formatMessage(messages.oneOption)],
          ['two', intl.formatMessage(messages.twoOption)],
          ['three', intl.formatMessage(messages.threeOption)],
          ['four', intl.formatMessage(messages.fourOption)],
        ],
        factory: 'Choice',
        type: 'string',
      },
      theme: {
        title: intl.formatMessage(messages.themeTitle),
        choices: [
          ['default', intl.formatMessage(messages.defaultTheme)],
          ['primary', intl.formatMessage(messages.primaryTheme)],
          ['secondary', intl.formatMessage(messages.secondaryTheme)],
          ['tertiary', intl.formatMessage(messages.tertiaryTheme)],
        ],
      },
    },
  };
};

export default Cards;
