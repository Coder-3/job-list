import axios from 'axios'
const baseUrl = '/api/tasks'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getTask = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const update = (id, objectPart) => {
  const request = axios.put(`${baseUrl}/${id}`, objectPart)
  return request.then(response => response.data)
}

export default { getAll, getTask, create, remove, update }