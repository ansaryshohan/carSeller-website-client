import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvider';
import Spinner from '../SharedComponent/Spinner/Spinner';

const PrivateRouter = ({children}) => {
  const{user,loading}=useContext(AuthContext)
  const location= useLocation()

  if(loading){
    return <Spinner/>
  }
  if(user && user?.email){
    return children;
  }
  
  return <Navigate to='/login' from={{state:location}} replace/>
};

export default PrivateRouter;