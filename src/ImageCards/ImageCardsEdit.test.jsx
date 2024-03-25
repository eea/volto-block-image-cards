import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-intl-redux';
import config from '@plone/volto/registry';
import ImageCardsEdit from './ImageCardsEdit';
import '@testing-library/jest-dom/extend-expect';

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
    render(
      <Provider store={global.store}>
        <ImageCardsEdit
          data={{ display: 'id1' }}
          onChangeBlock={jest.fn()}
          block="1234"
        />
      </Provider>,
    );
    expect(screen.getByText(/Title/)).toBeInTheDocument();
    expect(screen.getByText(/Text/)).toBeInTheDocument();
    expect(screen.getByText(/Display/)).toBeInTheDocument();
    expect(screen.getByText(/Alignment/)).toBeInTheDocument();
    expect(screen.getByText(/Image scale/)).toBeInTheDocument();
    expect(screen.getByText(/Images/)).toBeInTheDocument();
  });
});
