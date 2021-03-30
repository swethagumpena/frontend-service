import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewInstanceForm.module.css';

const NewInstanceForm = ({ fields, updateInstance }) => (
  <>
    {fields.map((eachField) => (
      <div className={styles.formData}>
        <label className={styles.name} htmlFor={eachField}>{eachField}</label>
        <input className={styles.inputField} type="text" name={eachField} onChange={(e) => { updateInstance(e.target.name, e.target.value); }} />
      </div>
    ))}

  </>
);

NewInstanceForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateInstance: PropTypes.func.isRequired,
};

export default NewInstanceForm;
