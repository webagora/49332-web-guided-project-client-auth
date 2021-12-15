import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";
import { checkPropTypes } from "prop-types";

const Logout = (props)=> {
    
    // const { push } = props.history;
    const { push } = useHistory();
   
    useEffect (() =>{
        axiosWithAuth()
            .post ('/logout')
            .then (resp => {
                localStorage.removeItem('token');
                push("/login");            
            })
            .catch (err => {
                console.log(err);
            })
    }) 

    return(<div></div>);
}

export default Logout;