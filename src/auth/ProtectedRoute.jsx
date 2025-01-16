import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userId'); 
  // console.log("isAuthenticated",isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
