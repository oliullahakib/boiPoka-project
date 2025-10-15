import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContex';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    if(loading) return <span className="loading loading-spinner loading-xl"></span>
    return (
        
      user?children:<Navigate to={"/signin"} replace></Navigate>
        
    );
};

export default PrivateRoute;