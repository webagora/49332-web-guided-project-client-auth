import React, { useEffect} from "react";
import axios from 'axios';

const Logout = ()=> {
    useEffect(()=> {
        axios.post('http://localhost:5001/api/logout', {}, {
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
    }, []);

    return(<div></div>);
}

export default Logout;