/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ContentTypeCard from '../ContentTypeCard/ContentTypeCard';
import CreateNew from '../CreateNew/CreateNew';
import styles from './ContentTypes.module.css';

const ContentTypes = ({ content, createNewContentType, handleClick }) => {
  const s = 'swe';

  return (
    <div className={styles.ContentTypesContainer}>
      <div>{`${content.length} Types`}</div>
      <CreateNew
        text="+ New Type"
        createNewContentType={createNewContentType}
      />
      {content.map((component) => {
        const field = component.fields ? component.fields : [];
        return (
          <ContentTypeCard
            typeName={component.typeName}
            fieldCount={field.length}
            handleClick={handleClick}
          />
        );
      }).reverse()}
    </div>
  );
};

export default ContentTypes;
