import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/tasks'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = (id, objectPart) => {
  const request = axios.patch(`${baseUrl}/${id}`, objectPart)
  return request.then(response => response.data)
}

export default { getAll, create, update }