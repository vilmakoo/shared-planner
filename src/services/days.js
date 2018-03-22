import axios from 'axios'
const baseUrl = 'http://192.168.10.51:3001/days'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default { getAll }