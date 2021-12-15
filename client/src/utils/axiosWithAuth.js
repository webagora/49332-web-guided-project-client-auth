import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create ( {
        headers: {
            authorization: localStorage.getItem("token")
        }
    });

}

export default axiosWithAuth;