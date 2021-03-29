/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ContentTypeCard from '../ContentTypeCard/ContentTypeCard';
import CreateNew from '../CreateNew/CreateNew';

const ContentTypes = ({ content, createNewContentType }) => {
  const s = 'swe';

  return (
    <>
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
          />
        );
      })}
    </>
  );
};

export default ContentTypes;
