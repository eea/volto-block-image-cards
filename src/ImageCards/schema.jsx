import config from '@plone/volto/registry';

const ImageCard = () => ({
  title: 'Image Card',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'text', 'attachedimage', 'link', 'copyright'],
    },
  ],

  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    text: {
      widget: 'slate_richtext',
      title: 'Text',
    },
    link: {
      widget: 'url',
      title: 'Link',
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

const ImageCards = (props) => {
  const blockConfig = config.blocks.blocksConfig.imagecards;
  const { blockRenderers, defaultRendererName } = blockConfig;
  const display_types = Object.keys(blockRenderers).map((template) => [
    template,
    blockRenderers[template].title || template,
  ]);
  const selected_renderer = props && props.data.display;
  const schema =
    (selected_renderer && blockRenderers[selected_renderer]?.schema) ||
    ImageCard;

  return {
    title: 'Image Cards',

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
        title: 'Title',
      },
      text: {
        widget: 'slate_richtext',
        title: 'Text',
      },
      display: {
        title: 'Display',
        choices: [...display_types],
        default: defaultRendererName,
      },
      cards: {
        widget: 'object_list',
        title: 'Images',
        description: 'Add a list of Images as Carousel Items',
        schema: schema(),
      },

      image_scale: {
        type: 'string',
        title: 'Image scale',
        default: 'large',
      },
      align: {
        title: 'Alignment',
        widget: 'align',
        type: 'string',
      },
    },

    required: ['display', 'cards'],
  };
};

export default ImageCards;
