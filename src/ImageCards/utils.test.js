import { getScaleUrl } from './utils';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';

config.settings = {
  apiPath: '/api',
};

jest.mock('@plone/volto/helpers', () => ({
  flattenToAppURL: jest.fn((url) => url),
}));

describe('getScaleUrl', () => {
  it('returns expected image scale URL when API path is present', () => {
    const url = '/api/path/to/image';
    const size = 'large';
    const expectedUrl = '/path/to/image/@@images/image/large';
    expect(getScaleUrl(url, size)).toEqual(expectedUrl);
  });

  it('returns expected image scale URL when API path is not present', () => {
    const url = '/path/to/image';
    const size = 'large';
    const expectedUrl = '/path/to/image/@@images/image/large';
    expect(getScaleUrl(url, size)).toEqual(expectedUrl);
  });

  it('calls flattenToAppURL when API path is present', () => {
    const url = '/api/path/to/image';
    const size = 'large';
    getScaleUrl(url, size);
    expect(flattenToAppURL).toHaveBeenCalledWith('/path/to/image');
  });
});
