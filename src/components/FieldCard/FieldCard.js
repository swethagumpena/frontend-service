import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldCard.module.css';

const FieldCard = ({
  field, editable, fieldOnSaveHandler, typeName,
}) => {
  const textInput = React.createRef();

  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldParent}>
        <div className={styles.right}>
          <p className={styles.box}>ab</p>
          <input className={styles.inputField} type="text" placeholder={field} ref={textInput} name="refName" />
        </div>
        <div className={styles.text}>text</div>
        <div className={styles.left}>
          <button className={styles.buttonEle} type="button">edit</button>
          <button className={styles.buttonEle} type="button">delete</button>
          <button type="button" className={editable ? styles.saveBtn : styles.noSaveBtn} onClick={() => fieldOnSaveHandler(textInput.current.value, typeName)}>save</button>
        </div>
      </div>
    </div>
  );
};

FieldCard.propTypes = {
  field: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  typeName: PropTypes.string.isRequired,
  fieldOnSaveHandler: PropTypes.func.isRequired,
};

export default FieldCard;
