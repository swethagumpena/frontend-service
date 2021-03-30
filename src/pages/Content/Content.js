/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CollectionTypes from '../../components/CollectionTypes/CollectionTypes';
import ContentTypes from '../../components/ContentTypes/ContentTypes';
import ContentFields from '../../components/ContentFields/ContentFields';
import {
  getContent, createContentType, getFields, addField, addValues,
} from '../../utils/api.utils';
import Instance from '../../components/Instance/Instance';
import styles from './Content.module.css';

const Content = () => {
  const [content, setContent] = useState([]);
  const [collection, setCollection] = useState(null);
  const [builder, setBuilder] = useState(true);
  const [isActive, setIsActive] = useState(null);
  const [createNew, setCreateNew] = useState(null);
  const [fields, setFields] = useState([]);
  const [shouldRender, setShouldRender] = useState(false);
  const [renderField, setRenderField] = useState(false);
  const [editable, setEditable] = useState(false);
  const [addNew, setAddNew] = useState(false);

  const handleClickCollection = (collectionType) => {
    if (collectionType === 'builder') {
      setBuilder(true);
    } else {
      setBuilder(false);
      setCollection(collectionType);
    }
  };
  const handleClickContent = async (contentType) => {
    setShouldRender(true);
    setIsActive(contentType);
    const fieldsList = await getFields(contentType);
    if (!fieldsList) {
      setFields([]);
    } else {
      setFields(fieldsList);
    }
  };

  const handleClickField = () => {
    setAddNew(true);
    setEditable(true);
  };

  const createNewContentType = async (typeName) => {
    const created = await createContentType(typeName);
    const updatedContent = [...content, { typeName: created.typeName }];
    setContent(updatedContent);
  };

  const handleSave = async (valuesObj) => {
    console.log(valuesObj, 'insde ');
    await addValues(collection, valuesObj);
  };

  // todo
  const fieldOnSaveHandler = async (fieldName, typeName) => {
    const data = await addField(fieldName, typeName);
    console.log('data', data);
    const contentToBeUpdated = content.filter((component) => component.typeName === typeName);
    let field = contentToBeUpdated[0].fields ? contentToBeUpdated[0].fields : [];
    field = [...field, fieldName];
    contentToBeUpdated[0].fields = field;
    console.log('ctbuxx', contentToBeUpdated);
    console.log('ccc', content);
    // const uodatedContent = content.map((component) => (component.typeName === typeName ? contentToBeUpdated : component));
    // const contentUpsdated = cot
    setEditable(false);
    setAddNew(false);
  };

  // const updateInstance = (key, value) => {
  //   const newObj = { ...instance, key: value };
  //   setInstance(newObj);
  // };

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
  const typeForField = createNew || '';

  // const getFieldsOfType = (async (reqdType) => {
  //   console.log('mytype', type);
  //   const fieldsList = await getFields(reqdType);
  //   console.log('plskk', fieldsList);
  // });

  // const currentContent = content.filter((component) => component.typeName === type);
  // if (currentContent.length) {
  //   fields = currentContent[0].fields ? currentContent[0].fields : [];
  // }

  const collectionTypeContent = content.filter((component) => component.typeName === collection);

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
          {builder ? (
            <ContentTypes
              content={content}
              createNewContentType={createNewContentType}
              handleClick={handleClickContent}
            />
          ) : <Instance collectionType={collection} content={collectionTypeContent} handleSave={handleSave} />}

        </div>
        <div>
          {shouldRender && builder ? (
            <ContentFields
              content={content}
              typeName={type}
              fields={fields}
              // renderField={renderField}
              handleClickField={handleClickField}
              fieldOnSaveHandler={fieldOnSaveHandler}
              editable={editable}
              addNew={addNew}
            />
          ) : null}

        </div>

      </div>
    </>
  );
};

export default Content;
