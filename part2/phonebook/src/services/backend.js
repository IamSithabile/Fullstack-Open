import axios from "axios";

const baseUrl = "http://localhost:3001/phonebook";

const getAll = async () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const addPerson = async (newNoteObj) => {
  const request = axios.post(baseUrl, newNoteObj);
  return request.then((response) => response.data);
};

const removePerson = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

const updateNumber = (id, updatedObj) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedObj);

  return request.then((response) => response.data);
};

export { getAll, addPerson, removePerson, updateNumber };
