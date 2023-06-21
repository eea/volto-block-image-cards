import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@plone/volto-slate/editor/render', () => {
  return {
    serializeNodes: jest.fn(() => 'Test card'),
  };
});

jest.mock('@eeacms/volto-block-image-cards/helpers', () => {
  return {
    getFieldURL: jest.fn(),
  };
});

describe('Carousel', () => {
  it('renders without crashing', () => {
    const data = {
      cards: [
        {
          title: 'Test card 1',
          attachedimage: 'image1.jpg',
          link: '/test-link1',
        },
        {
          title: undefined,
          attachedimage: undefined,
          link: '/test-link2',
        },
      ],
      image_scale: 'large',
    };

    render(<Carousel data={data} />);
  });

  it('displays "No image cards" when editable and no cards', () => {
    const { getByText } = render(<Carousel editable={true} data={{}} />);
    expect(getByText('No image cards')).toBeInTheDocument();
  });

  it('renders carousel when cards are present', () => {
    const data = {
      cards: [
        {
          title: 'Test card',
          attachedimage: 'image.jpg',
          link: '/test-link',
        },
      ],
      image_scale: 'large',
    };

    render(<Carousel editable={true} data={data} />);
  });

  it('navigates to next and previous slide when arrows are clicked', () => {
    const data = {
      cards: [
        {
          title: 'Test card 1',
          attachedimage: 'image1.jpg',
          link: '/test-link1',
        },
        {
          title: 'Test card 2',
          attachedimage: undefined,
          link: '/test-link2',
        },
      ],
      image_scale: undefined,
    };

    const { container } = render(<Carousel editable={false} data={data} />);
    const leftArrow = container.querySelector('.left-arrow');
    const rightArrow = container.querySelector('.right-arrow');

    fireEvent.click(rightArrow);
    fireEvent.click(leftArrow);
  });
});
