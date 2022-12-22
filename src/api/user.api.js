
import axios from 'axios';

export const getUser = async (id) => {
    return await axios.get(`http://localhost:8000/users/${id}`);
};

export const createUser = async (data) => {
    return await axios.post(`http://localhost:8000/users`, data);
};

export const update = async (id, data) => {
    return await axios.put(`http://localhost:8000/users/${id}`, data);
};

export const deleteUser = async (id) => {
    return await axios.delete(`http://localhost:8000/users/${id}`);
};