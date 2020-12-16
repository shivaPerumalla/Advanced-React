import axios from 'axios';
import { BASE_URL } from './environment';

axios.interceptors.response.use(
    response => response.data
);

function network(){
    const baseUrl = BASE_URL;
    const headers  = {};
    function setCredentials(token){
         headers.Authorization = `Bearer ${token}`
    }
     function* post(action,body){
         const url = baseUrl+action;
         const config = {headers};
         return  yield axios.post(url,body,config);
     }

     function* getData(action,params){
        const url = BASE_URL+action;
        const config = {headers,params};
        return  yield axios.post(url,config);
    }

    function* putData(action,body){
        const url = BASE_URL+action;
        const config = {headers};
        return  yield axios.put(url,body,config);
    }
    function* deleteData(action,params){
        const url = BASE_URL+action;
        const config = {headers,params};
        return  yield axios.put(url,config);
    }

    return {
        setCredentials,
        post,
        getData,
        putData,
        deleteData
     }
}

 const networkService = network()
export default networkService;
