/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './CreateNew.module.css';

const CreateNew = ({ text, createNewContentType }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const textInput = React.createRef();

  return (
    <>
      <div onClick={() => setOpenPopup(true)}>
        <div className={styles.createNew}>{text}</div>
      </div>
      <Modal
        title="Create a new content type"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <div>Name of the content type</div>
        <div className={styles.parent}>
          <div>
            <input
              ref={textInput}
              id="content-type-name"
              className="type-input"
              type="text"
              name="refName"
            />
          </div>
          <div>
            <button className={styles.Cancel} onClick={() => setOpenPopup(false)} type="button">Cancel</button>
            <button className={styles.Create} onClick={() => { createNewContentType(textInput.current.value); setOpenPopup(false); }} type="button">Create</button>
          </div>
        </div>

      </Modal>
    </>
  );
};

CreateNew.propTypes = {
  text: PropTypes.string.isRequired,
  createNewContentType: PropTypes.func.isRequired,
};

export default CreateNew;
