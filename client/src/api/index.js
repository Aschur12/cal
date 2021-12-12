import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getMainPage=()=>api.get('/')
export const save_user=payload=>api.post('/reg', payload)