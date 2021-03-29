/* eslint-disable react/prop-types */
import React from 'react';

const ContentFields = ({ content, typeName }) => {
  const currentContent = content.filter((component) => component.typeName === typeName);
  console.log('cc', currentContent);
  const fields = currentContent[0].fields ? currentContent[0].fields : [];
  return (
    <>
      <div>{typeName}</div>
      <div>{`${fields.length} Fields`}</div>
    </>
  );
};

export default ContentFields;
