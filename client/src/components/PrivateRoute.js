import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, ...rest }) => {    
    console.log('component: ', component);
    console.log('rest: ', rest);
    return <Route {...rest} render = {() => { 
        return (<p>This is a protected Route</p>)
    }} />
}

export default PrivateRoute;