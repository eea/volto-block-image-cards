import React from 'react';
import { render, act, waitFor, fireEvent } from '@testing-library/react';
import ResponsiveContainer from './ResponsiveContainer';
import '@testing-library/jest-dom/extend-expect';

global.ResizeObserver = require('resize-observer-polyfill');

describe('ResponsiveContainer', () => {
  it('renders children correctly', () => {
    const props = {
      aspect: 1,
      width: '100%',
      height: '100%',
    };
    const { getByText } = render(
      <ResponsiveContainer {...props}>
        {() => <div>Test Child</div>}
      </ResponsiveContainer>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const props = {
      aspect: 1,
      debounce: 2,
      width: 100,
      height: 100,
    };

    const { getByText } = render(
      <ResponsiveContainer {...props}>
        {() => <div>Test Child</div>}
      </ResponsiveContainer>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('updates dimensions correctly on resize', async () => {
    const props = {
      aspect: 1,
      width: 100,
      height: 100,
      minWidth: 50,
    };
    const ChildComponent = jest.fn(({ parentWidth }) => (
      <div>{parentWidth}</div>
    ));

    render(
      <ResponsiveContainer {...props}>{ChildComponent}</ResponsiveContainer>,
    );

    expect(ChildComponent).toHaveBeenCalledWith({ parentWidth: 100 });

    act(() => {
      fireEvent(window, new Event('resize'));
    });

    await waitFor(() => {
      expect(ChildComponent).toHaveBeenCalledWith({ parentWidth: 100 });
    });
  });

  it('updates dimensions immediately if mounted and new size is different', () => {
    const getContainerSizeMock = jest.fn(() => ({
      containerWidth: 500,
      containerHeight: 500,
    }));

    const setStateMock = jest.fn();

    const instance = new ResponsiveContainer({});
    instance.mounted = true;
    instance.getContainerSize = getContainerSizeMock;
    instance.setState = setStateMock;

    instance.updateDimensionsImmediate();

    expect(getContainerSizeMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).toHaveBeenCalledWith({
      containerWidth: 500,
      containerHeight: 500,
    });
  });

  it('does not update dimensions if not mounted', () => {
    const getContainerSizeMock = jest.fn();
    const setStateMock = jest.fn();

    const instance = new ResponsiveContainer({});
    instance.mounted = false;
    instance.getContainerSize = getContainerSizeMock;
    instance.setState = setStateMock;

    instance.updateDimensionsImmediate();

    expect(getContainerSizeMock).not.toHaveBeenCalled();
    expect(setStateMock).not.toHaveBeenCalled();
  });

  it('does not update dimensions if new size is the same as old size', () => {
    const getContainerSizeMock = jest.fn(() => ({
      containerWidth: 500,
      containerHeight: 500,
    }));

    const setStateMock = jest.fn();

    const instance = new ResponsiveContainer({});
    instance.mounted = true;
    instance.state = {
      containerWidth: 500,
      containerHeight: 500,
    };
    instance.getContainerSize = getContainerSizeMock;
    instance.setState = setStateMock;

    instance.updateDimensionsImmediate();

    expect(getContainerSizeMock).toHaveBeenCalledTimes(1);
    expect(setStateMock).not.toHaveBeenCalled();
  });
});
