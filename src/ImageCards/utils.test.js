import { getImageScaleParams } from './utils';
import { flattenToAppURL } from '@plone/volto/helpers';

jest.mock('@plone/volto/helpers', () => ({
  flattenToAppURL: jest.fn((url) => url),
  isInternalURL: jest.fn((url) => true),
}));

describe('getImageScaleParams', () => {
  it('returns expected image scale URL obj when image_field and image_scales properties are passed', () => {
    const image = {
      '@id': 'http://localhost:3000/image',
      image_field: 'image',
      image_scales: {
        image: [
          {
            download: '@@images/image.png',
            width: 400,
            height: 400,
            scales: {
              preview: {
                download: '@@images/image-400.png',
                width: 400,
                height: 400,
              },
            },
          },
        ],
      },
    };

    const expectedUrlObj = {
      download: 'http://localhost:3000/image/@@images/image-400.png',
      width: 400,
      height: 400,
    };
    expect(getImageScaleParams(image, 'preview')).toEqual(expectedUrlObj);
  });

  it('returns expected image scale URL obj when image properties are passed', () => {
    const image = {
      '@id': 'http://localhost:3000/image',
      image: {
        download: 'http://localhost:3000/image/@@images/image.png',
        width: 400,
        height: 400,
        scales: {
          preview: {
            download: 'http://localhost:3000/image/@@images/image-400.png',
            width: 400,
            height: 400,
          },
        },
      },
    };
    const expectedUrlObj = {
      download: 'http://localhost:3000/image/@@images/image-400.png',
      width: 400,
      height: 400,
    };
    expect(getImageScaleParams(image, 'preview')).toEqual(expectedUrlObj);
  });

  it('calls flattenToAppURL when internalUrl', () => {
    const url = 'http://localhost:3000/image';
    const size = 'large';
    getImageScaleParams(url, size);
    expect(flattenToAppURL).toHaveBeenCalledWith('http://localhost:3000/image');
  });
});
