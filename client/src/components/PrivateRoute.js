import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest  }) => {
    return <Route {...rest} render={()=> {
        return(<div>
            <Component/>
            <p>aefasfd</p>
        </div>);
    }}/>
}

export default PrivateRoute;