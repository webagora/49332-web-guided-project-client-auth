import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = (props)=> {
    // const { push } = props.history;
    const { push } = useHistory();

    useEffect(()=> {
        axios.post('http://localhost:5001/api/logout', {}, {
            headers:{
                authorization: localStorage.getItem('token')
            }
        }).then(resp => {
            localStorage.removeItem('token');
            push('/login');
        })
    }, []);

    return(<div></div>);
}

export default Logout;