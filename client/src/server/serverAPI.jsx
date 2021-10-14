const axios = require ('axios');
const URL = 'http://localhost:5000';


export const insertUser = async user => {
  try {
    const url = `${URL}/insertUser`;
    return axios.post (url, {user}).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};


export const getUser = async (user) => {
  try {
    const url = `${URL}/getUser`;
    return axios.post (url, {user},{withCredentials:true} 
     ).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};




