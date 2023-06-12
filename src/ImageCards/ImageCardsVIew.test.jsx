import React from 'react';
import renderer from 'react-test-renderer';
import config from '@plone/volto/registry';
import ImageCardsView from './ImageCardsView';

config.blocks.blocksConfig = {
  imagecards: {
    blockRenderers: {
      id1: {
        view: () => <div>id1</div>,
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

describe('ImageCardsView', () => {
  it('should render without crashing', () => {
    const component = renderer.create(
      <ImageCardsView data={{ display: 'id1' }} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const component = renderer.create(
      <ImageCardsView data={{ display: '' }} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
