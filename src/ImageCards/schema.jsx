import config from '@plone/volto/registry';
import { useIntl } from 'react-intl';

import messages from '@eeacms/volto-block-image-cards/messages';

const ImageCard = (intl) => {
  return {
    title: intl.formatMessage(messages.imageCardsCardTitle),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.defaultFieldset),
        fields: ['title', 'text', 'attachedimage', 'link', 'copyright'],
      },
    ],

    properties: {
      title: {
        type: 'string',
        title: intl.formatMessage(messages.title),
      },
      text: {
        widget: 'slate_richtext',
        title: intl.formatMessage(messages.text),
      },
      link: {
        widget: 'url',
        title: intl.formatMessage(messages.link),
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
  };
};

const ImageCards = (props) => {
  const intl = useIntl();
  const display_types_obj =
    config.blocks.blocksConfig.imagecards.blockRenderers;
  const display_types = Object.keys(display_types_obj).map((template) => {
    const titleId = display_types_obj[template]?.title;
    return [template, titleId ? intl.formatMessage({ id: titleId }) : template];
  });
  const selected_renderer = props && props.data.display;
  const schema =
    (selected_renderer && display_types_obj[selected_renderer]?.schema) ||
    ImageCard;

  return {
    title: intl.formatMessage(messages.imageCardsTitle),

    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'text', 'display', 'align', 'image_scale', 'cards'],
      },
    ],

    properties: {
      title: {
        type: 'string',
        title: intl.formatMessage(messages.title),
      },
      text: {
        widget: 'slate_richtext',
        title: intl.formatMessage(messages.text),
      },
      display: {
        title: intl.formatMessage(messages.display),
        choices: [...display_types],
        default: intl.formatMessage(messages.carousel),
      },
      cards: {
        widget: 'object_list',
        title: intl.formatMessage(messages.images),
        description: intl.formatMessage(messages.addImagesDescription),
        schema: schema(intl),
      },
      image_scale: {
        type: 'string',
        title: intl.formatMessage(messages.imageScale),
        default: 'large',
      },
      align: {
        title: intl.formatMessage(messages.alignment),
        widget: 'align',
        type: 'string',
      },
    },

    required: ['display', 'cards'],
  };
};

export default ImageCards;
