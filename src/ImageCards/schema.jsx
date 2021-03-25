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
      widget: 'object_by_list',
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
  const display_types_obj =
    config.blocks.blocksConfig.imagecards.blockRenderers;
  const selected_renderer = props && props.data.display;
  const schema =
    (selected_renderer && display_types_obj[selected_renderer].schema) ||
    ImageCard;

  return {
    title: 'Image Cards',

    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'text', 'display', 'align', 'cards'],
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
        choices: [],
      },
      cards: {
        widget: 'object_list_inline',
        title: 'Images',
        // this is an invention, should confront with dexterity serializer
        description: 'Add a list of Images as Carousel Items',
        schema: schema(),
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
