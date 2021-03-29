/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const loginUser = async (userData) => {
  console.log('here');
  try {
    const { data } = await axios.post('http://localhost:7000/login', userData);
    return data;
    // {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…wMDR9.33mirrM-vrcYpEtElgES5BSM"}
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      throw new Error('email and password do not match');
    } else if (error.response.status === 500) {
      throw new Error('no user found with given email');
    }
    throw new Error('unable to get jwtToken');
  }
};
