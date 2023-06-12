import React from 'react';
import renderer from 'react-test-renderer';
import config from '@plone/volto/registry';
import ImageCardsEdit from './ImageCardsEdit';

config.blocks.blocksConfig = {
  imagecards: {
    blockRenderers: {
      id1: {
        schemaExtender: (schema, data) => ({
          ...schema,
          properties: {
            ...schema.properties,
            customProperty: { type: 'string', title: 'Custom Property' },
          },
        }),
      },
      id2: {
        view: () => <div>id2</div>,
      },
      id3: {
        view: () => <div>id3</div>,
      },
    },
  },
};

describe('ImageCardsEdit', () => {
  it('should render without crashing', () => {
    const component = renderer.create(
      <ImageCardsEdit
        data={{ display: 'id1' }}
        selected={false}
        onChangeBlock={jest.fn()}
        block={{}}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render without crashing and no display', () => {
    const component = renderer.create(
      <ImageCardsEdit
        data={{ display: undefined }}
        selected={false}
        onChangeBlock={jest.fn()}
        block={{}}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
