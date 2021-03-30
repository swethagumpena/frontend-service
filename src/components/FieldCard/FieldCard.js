import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldCard.module.css';

const FieldCard = ({
  field, editable, fieldOnSaveHandler, onDeleteHandler, onEditHandler, typeName,
}) => {
  const textInput = React.createRef();
  const oldFieldValue = field;
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldParent}>
        <div className={styles.right}>
          <p className={styles.box}>ab</p>
          <input className={styles.inputField} type="text" placeholder={field} ref={textInput} name="refName" />
        </div>
        <div className={styles.text}>text</div>
        <div className={styles.left}>
          <button className={styles.buttonEle} onClick={() => onEditHandler(oldFieldValue, textInput.current.value)} type="button">edit</button>
          <button className={styles.buttonEle} onClick={() => onDeleteHandler(oldFieldValue)} type="button">delete</button>
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
  onDeleteHandler: PropTypes.func.isRequired,
  onEditHandler: PropTypes.func.isRequired,
};

export default FieldCard;
