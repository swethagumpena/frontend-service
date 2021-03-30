/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewInstanceForm from '../NewInstanceForm/NewInstanceForm';
import InstanceCard from '../InstanceCard/InstanceCard';
import styles from './Instance.module.css';
import Modal from '../Modal/Modal';

const Instance = ({ collectionType, content, handleSave }) => {
  const countValue = content[0].fields ? content[0].fields.length : 0;
  const [openPopup, setOpenPopup] = useState(false);
  const [instanceObj, setInstanceObj] = useState({});

  const updateInstance = (key, value) => {
    const newObj = { ...instanceObj };
    newObj[key] = value;
    setInstanceObj(newObj);
  };

  const valArray = content.filter((con) => {
    if (con.typeName === collectionType) {
      return con.instances;
    }
  });
  const newFields = content.filter((con) => {
    if (con.typeName === collectionType) {
      return con.fields;
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.headerEle}>
        <div className={styles.countValue}>{`${countValue} Entries Found`}</div>
        <div className={styles.addNew} role="presentation" onClick={() => setOpenPopup(true)}>Add a new entry</div>
      </div>
      <Modal openPopup={openPopup} setOpenPopup={setOpenPopup} title={`New${collectionType}`}>
        <NewInstanceForm
          updateInstance={updateInstance}
          fields={newFields[0].fields}
        />
        <button onClick={() => { setOpenPopup(false); }} type="button">Cancel</button>
        <button onClick={() => { setOpenPopup(false); handleSave(instanceObj); }} type="button">Save</button>
      </Modal>
      <div className={styles.fieldsNames}>
        {newFields[0].fields.map((field) => (
          <p>{field}</p>
        ))}
      </div>

      { valArray[0].instances.map((val, index) => (
        <div key={index} className="valueCard">
          <InstanceCard array={Object.values(val)} />
        </div>
      ))}
    </div>
  );
};

const contentShape = {
  id: PropTypes.number,
  typeName: PropTypes.string,
  instances: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.string),
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
};

Instance.propTypes = {
  collectionType: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape(contentShape)).isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Instance;
