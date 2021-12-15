import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {    
    
    return <Route {...rest} render = {() => { 
        return (
            <div>
                <Component />
            </div>
            )
    }} />
}

export default PrivateRoute;