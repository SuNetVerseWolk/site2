import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getApi = ({ key, path }) => {
  return useQuery({
    queryKey: key,
    queryFn: data => axios.get('/api/' + path, res => res.data)
  })
}

export default getApi