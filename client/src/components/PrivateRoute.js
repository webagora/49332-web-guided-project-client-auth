import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest  }) => {
    console.log(component);
    console.log(rest);
    return <Route {...rest} render={()=> {
        return(<p>asdsdfa</p>);
    }}/>
}

export default PrivateRoute;