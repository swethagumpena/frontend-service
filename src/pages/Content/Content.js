/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CollectionTypes from '../../components/CollectionTypes/CollectionTypes';
import ContentTypes from '../../components/ContentTypes/ContentTypes';
import ContentFields from '../../components/ContentFields/ContentFields';
import { getContent, createContentType } from '../../utils/api.utils';
import styles from './Content.module.css';

const Content = () => {
  const [content, setContent] = useState([]);
  const [collection, setCollection] = useState(null);
  const [builder, setBuilder] = useState(true);
  const [isActive, setIsActive] = useState(null);

  const handleClickCollection = (collectionType) => {
    if (collectionType === 'builder') {
      setBuilder(true);
    } else {
      setBuilder(false);
      setCollection(collectionType);
    }
  };
  // let type = 'kkkk';
  const handleClickContent = (contentType) => {
    console.log('ctpp', contentType);
    setIsActive(contentType);
    // return contentType;
    // type = isActive ? contentType : null;
    // console.log('ttt', type);
  };

  const createNewContentType = async (typeName) => {
    const created = await createContentType(typeName);
    const updatedContent = [...content, { typeName: created.typeName }];
    setContent(updatedContent);
  };

  useEffect(async () => {
    const componentList = await getContent();
    const newComponents = componentList.map((component) => {
      const newObj = {};
      newObj.createdAt = component.createdAt;
      newObj.updatedAt = component.updatedAt;
      newObj.fields = component.fields;
      newObj.instances = component.instances;
      newObj.typeName = component.typeName;
      newObj.id = component.id;
      return newObj;
    });
    // const compLength = newComponents.length + 1;
    // setSeqNumberNo(compLength);
    setContent(newComponents);
  }, []);

  const header = builder ? 'Content Types' : collection;
  const type = isActive || '';

  return (
    <>
      <NavBar
        header={header}
      />
      <div className={styles.ContainerBody}>
        <div>
          <CollectionTypes
            handleClick={handleClickCollection}
            content={content}
          />
        </div>
        <div>
          <ContentTypes
            content={content}
            createNewContentType={createNewContentType}
            handleClick={handleClickContent}
          />
        </div>
        <div>
          <ContentFields
            content={content}
            typeName={type}
          />
        </div>

      </div>
    </>
  );
};

export default Content;
