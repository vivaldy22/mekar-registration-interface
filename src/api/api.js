import axios from "axios";

const baseURL = "";

export const loginGetToken = async (credentials) => {
  const res = await axios.post(`${baseURL}/auth`, credentials);
  return await res.data;
};

export const getUsers = async (token) => {
  const res = await axios.get(`${baseURL}/users`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

export const getUserByID = async (token, id) => {
  const res = await axios.get(`${baseURL}/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

export const createUser = async (token, user) => {
  const res = await axios.post(`${baseURL}/users`, user, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

export const updateUser = async (token, id, user) => {
  const res = await axios.put(`${baseURL}/users/${id}`, user, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

export const deleteUser = async (token, id) => {
  const res = await axios.delete(`${baseURL}/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

export const getJobs = async (token) => {
  const res = await axios.get(`${baseURL}/jobs`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

export const getEdus = async (token) => {
  const res = await axios.get(`${baseURL}/edus`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.data;
};

