import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Example of checking if authenticated

  return isAuthenticated ? element : <Navigate to="/PatientPortal" />;
};

export default PrivateRoute;
