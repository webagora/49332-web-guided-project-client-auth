import axios from 'axios';

const axiosWithAuth = ()=> {

    return axios.create({
        headers: {
            
        }
    });
}

export default axiosWithAuth;