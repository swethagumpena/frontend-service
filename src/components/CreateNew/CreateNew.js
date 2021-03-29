/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const CreateNew = ({ text, createNewContentType }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const textInput = React.createRef();

  return (
    <>
      <div onClick={() => setOpenPopup(true)}>
        <div>{text}</div>
      </div>
      <Modal
        title="Create a new content type"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <div>Name of the content type</div>
        <input
          ref={textInput}
          id="content-type-name"
          className="type-input"
          type="text"
          name="refName"
        />
        <button onClick={() => setOpenPopup(false)} type="button">Cancel</button>
        <button onClick={() => { createNewContentType(textInput.current.value); setOpenPopup(false); }} type="button">Create</button>
      </Modal>
    </>
  );
};

export default CreateNew;
