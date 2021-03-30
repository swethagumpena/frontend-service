import React from 'react';
import PropTypes from 'prop-types';
import ContentTypeCard from '../ContentTypeCard/ContentTypeCard';
import CreateNew from '../CreateNew/CreateNew';
import styles from './ContentTypes.module.css';

const ContentTypes = ({ content, createNewContentType, handleClick }) => (
  <div className={styles.ContentTypesContainer}>
    <div className={styles.count}>{`${content.length} Types`}</div>
    <CreateNew
      text="+ New Type"
      createNewContentType={createNewContentType}
    />
    {content.map((component) => {
      const field = component.fields ? component.fields : [];
      return (
        <ContentTypeCard
          key={component.typeName}
          typeName={component.typeName}
          fieldCount={field.length}
          handleClick={handleClick}
        />
      );
    }).reverse()}
  </div>
);

const contentShape = {
  id: PropTypes.number,
  typeName: PropTypes.string,
  instances: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.string),
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
};

ContentTypes.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape(contentShape)).isRequired,
  createNewContentType: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContentTypes;
