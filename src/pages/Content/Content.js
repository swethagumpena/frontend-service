/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CollectionTypes from '../../components/CollectionTypes/CollectionTypes';
import { getContent } from '../../utils/api.utils';

const Content = () => {
  const [content, setContent] = useState([]);
  const [collection, setCollection] = useState(null);
  const [builder, setBuilder] = useState(true);

  const handleClick = (collectionType) => {
    console.log(collectionType);
    if (collectionType === 'builder') {
      setBuilder(true);
    } else {
      setBuilder(false);
      setCollection(collectionType);
    }
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

  return (
    <>
      <NavBar
        header={header}
      />
      <CollectionTypes
        handleClick={handleClick}
        content={content}
      />
    </>
  );
};

export default Content;
