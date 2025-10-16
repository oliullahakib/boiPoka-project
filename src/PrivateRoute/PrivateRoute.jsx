import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=use(AuthContext)
    if(loading) return <span className="loading loading-spinner loading-xl"></span>
    return (
        
      user?children:<Navigate state={location.pathname} to={"/signin"} replace></Navigate>
        
    );
};

export default PrivateRoute;