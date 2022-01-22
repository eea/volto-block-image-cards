import React from 'react';
import { Modal, Button, Header } from 'semantic-ui-react';
import { FocusPicker } from 'image-focus';

import FocusedImage from './FocusedImage';

const defaultFocus = { x: 0, y: 0 };

const FocusPointEditor = (props) => {
  const { onClose, focus = defaultFocus } = props;
  const focusPickerImageNodeRef = React.useRef();
  const [focusValue, setFocusValue] = React.useState(focus);
  const focusValueRef = React.useRef(focus);
  const focusPickerRef = React.useRef();

  React.useLayoutEffect(() => {
    const imgEl = focusPickerImageNodeRef.current;
    if (imgEl) {
      focusPickerRef.current = new FocusPicker(imgEl, {
        focus: focusValueRef.current,
        onChange: (newFocus) => {
          // console.log('new', newFocus);
          const x = newFocus.x.toFixed(2);
          const y = newFocus.y.toFixed(2);
          focusValueRef.current = { x, y };
          setFocusValue({ x, y });
        },
      });
    }
  }, []);

  return (
    <Modal open={true} className="focuspoint-editor">
      <Modal.Header>
        <Header>Drag to select focus</Header>
      </Modal.Header>
      <Modal.Content image>
        <div>
          <img
            ref={focusPickerImageNodeRef}
            id="focus-picker-img"
            src="https://picsum.photos/2400/1400?image=1001"
            alt=""
            data-focus-x="0"
            data-focus-y="0"
          />
        </div>
        <Modal.Description>
          <div className="fe-grid">
            <div className="focused-image-container top-left">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container top-center">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container top-right">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container center-left">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container center-center">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container center-right">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container bottom-left">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container bottom-center">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
            <div className="focused-image-container bottom-right">
              <FocusedImage
                className="focused-image"
                src="https://picsum.photos/2400/1400?image=1001"
                alt=""
                focus={focusValue}
              />
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button
          content="Save"
          labelPosition="right"
          icon="checkmark"
          onClick={() => onClose()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default FocusPointEditor;
