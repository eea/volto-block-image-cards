import React from 'react';
import { render, screen } from '@testing-library/react';
import config from '@plone/volto/registry';
import ImageCardsView from './ImageCardsView';
import '@testing-library/jest-dom/extend-expect';

describe('ImageCardsView', () => {
  beforeEach(() => {
    config.blocks.blocksConfig = {
      imagecards: {
        blockRenderers: {
          id1: {
            view: () => <div>id1 view</div>,
          },
          id2: {
            view: () => <div>id2 view</div>,
          },
          id3: {
            view: () => <div>id3 view</div>,
          },
          carousel: {
            view: () => <div>carousel view</div>,
          },
        },
      },
    };
  });

  it('should render the correct view based on the display prop', () => {
    render(<ImageCardsView data={{ display: 'id1' }} />);
    expect(screen.getByText('id1 view')).toBeInTheDocument();

    render(<ImageCardsView data={{ display: 'id2' }} />);
    expect(screen.getByText('id2 view')).toBeInTheDocument();

    render(<ImageCardsView data={{ display: 'id3' }} />);
    expect(screen.getByText('id3 view')).toBeInTheDocument();
  });

  it('should render the "carousel" view as the default', () => {
    render(<ImageCardsView data={{}} />);
    expect(screen.getByText('carousel view')).toBeInTheDocument();
  });

  it('should not render anything if the display prop is not found', () => {
    render(<ImageCardsView data={{ display: 'unknown' }} />);
    expect(screen.queryByText('unknown view')).not.toBeInTheDocument();
  });
});
