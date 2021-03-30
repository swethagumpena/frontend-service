/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post('http://localhost:7000/login', userData);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error('email and password do not match');
    } else if (error.response.status === 500) {
      throw new Error('no user found with given email');
    }
    throw new Error('unable to get jwtToken');
  }
};

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return `Bearer ${token}`;
};

export const getContent = async () => {
  const accessToken = getAuthToken();
  const { data } = await axios.get('http://localhost:1337/content', {
    headers: {
      Authorization: accessToken,
    },
  });
  return data.data;
};

export const createContentType = async (typeName) => {
  const accessToken = getAuthToken();
  const { data } = await axios.post('http://localhost:1337/content', { typeName }, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data.data;
};

export const getFields = async (typeName) => {
  const accessToken = getAuthToken();
  const { data } = await axios.get(`http://localhost:1337/content/${typeName}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data.data;
};

export const addField = async (field, typeName) => {
  const accessToken = getAuthToken();
  const { data } = await axios.post(`http://localhost:1337/content/${typeName}`, { field }, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data.data;
};

export const addValues = async (typeName, newObj) => {
  const accessToken = getAuthToken();
  try {
    const data = await axios.put(`http://localhost:1337/instance/${typeName}`, { newObj }, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Error from backend service');
  }
};

export const updateField = async (typeName, oldField, newField) => {
  const accessToken = getAuthToken();
  try {
    const data = await axios.put(`http://localhost:1337/content/${typeName}`, { newField, oldField }, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Error from backend service');
  }
};
export const deleteField = async (typeName, oldField) => {
  const accessToken = getAuthToken();
  try {
    const data = await axios.put(`http://localhost:1337/content/field/${typeName}`, { oldField }, {
      headers: {
        Authorization: accessToken,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Error from backend service');
  }
};
