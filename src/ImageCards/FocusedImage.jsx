import React from 'react';
import { FocusedImage } from 'image-focus';

const defaultFocus = { x: 0, y: 0 };

const FocusedImageComponent = (props) => {
  const { src, focus = defaultFocus, ...rest } = props;
  const nodeRef = React.useRef(null);
  const focusRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (nodeRef.current) {
      // console.log('do', focus);
      focusRef.current = new FocusedImage(nodeRef.current, {
        debounceTime: 17,
        focus,
      });
    }
    return () => {};
  }, [focus]);

  return (
    <div className="focused-image-parent">
      <img className="focused-image" {...rest} src={src} alt="" ref={nodeRef} />
    </div>
  );
};

export default FocusedImageComponent;
