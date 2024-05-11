import axios from "axios";
const uri = "http://localhost:8222";
const authheader = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${authheader}`,
  "Content-Type": "application/json",
};

export const Login = async (formData) => {
  try {
    const response = await axios.post(`${uri}/api/auth/authenticate`, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (data) =>
  axios.post(`${uri}/api/auth/register`, data);

/////users

export const getUser = () => axios.get(`${uri}/api/users/get`, headers);

export const getUserById = (id) =>
  axios.get(`${uri}/api/users/get/${id}`, headers);

export const deleteUserById = (id) =>
  axios.delete(`${uri}/api/users/delete/${id}`, headers);

export const updateUserById = (id, editFormData) =>
  axios.put(`${uri}/api/users/put/${id}`, editFormData, { headers });

////flavour

export const createFlavour = async (formData) => {
  const response = await axios.post(`${uri}/api/flavour/post`, formData, {
    headers,
  });
  console.log(response);
};

export const getFlavour = () => axios.get(`${uri}/api/flavour/get`, headers);

export const deleteFlavourById = (id) =>
  axios.delete(`${uri}/api/flavour/delete/${id}`, { headers });

export const updateFlavourById = (id, editFormData) => {
  axios.put(`${uri}/api/flavour/put/${id}`, editFormData, { headers });
};

export const getFlavourById = (id) =>
  axios.get(`${uri}/api/flavour/get/${id}`, headers);

export const getOrders = () => axios.get(`${uri}/api/orders/get`, headers);

export const createOrders = async (formData) => {
  const response = await axios.post(`${uri}/api/orders/post`, formData, {
    headers,
  });
  console.log(response);
};
