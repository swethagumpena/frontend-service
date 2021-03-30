import React from 'react';
import PropTypes from 'prop-types';
import FieldCard from '../FieldCard/FieldCard';
import styles from './ContentFields.module.css';

const ContentFields = ({
  typeName, fields, handleClickField, fieldOnSaveHandler, editable, addNew,
}) => (
  <div className={styles.container}>
    <div className={styles.compTitle}>{typeName}</div>
    <div className={styles.fieldLength}>{`${fields.length} Fields`}</div>
    <button type="button" className={styles.addButton} onClick={handleClickField}>Add another field</button>
    {addNew ? (
      <FieldCard
        field=""
        editable={editable}
        fieldOnSaveHandler={fieldOnSaveHandler}
        typeName={typeName}
      />
    ) : null}
    {fields.map((eachField) => (
      <FieldCard
        key={eachField}
        field={eachField}
        editable={editable}
        fieldOnSaveHandler={fieldOnSaveHandler}
        typeName={typeName}
      />
    ))}
  </div>
);

ContentFields.propTypes = {
  typeName: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClickField: PropTypes.func.isRequired,
  fieldOnSaveHandler: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  addNew: PropTypes.func.isRequired,
};

export default ContentFields;
