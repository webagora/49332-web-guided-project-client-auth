import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
    console.log('props in PrivateRoute: ', props);
    return <Route {...props} />
}

export default PrivateRoute;