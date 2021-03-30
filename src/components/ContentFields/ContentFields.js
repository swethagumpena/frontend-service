/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FieldCard from '../FieldCard/FieldCard';
import AddNewFieldCard from '../AddNewFieldCard/AddNewFieldCard';
import { addField } from '../../utils/api.utils';

const ContentFields = ({
  content, typeName, fields, handleClickField, fieldOnSaveHandler, editable, addNew,
}) => (
  <>
    <div>{typeName}</div>
    <div>{`${fields.length} Fields`}</div>
    <button type="button" onClick={handleClickField}>add new</button>
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
  </>
);

// return (
//   <>
//   </>
// );
// };

export default ContentFields;
