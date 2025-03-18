import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation(); // Used to get the current location
  const isAuthenticated = localStorage.getItem('token'); // Check for a JWT token or any other auth mechanism

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If authenticated, render the children (the protected page content)
  return <>{children}</>;
};

export default ProtectedRoute;
