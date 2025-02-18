import axios from './base'

export const testApi = ()=>{
    return axios.get('/test')
}