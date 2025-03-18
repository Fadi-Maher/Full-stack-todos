 import { Routes, Route } from 'react-router-dom';
 import Register from '../pages/register';
 import Layout from '../components/layout';
 import Login from '../pages/login';
 import Home from '../pages/homePage';
import ProtectedRoute from '../components/protectedrout';
const AppRoutes: React.FC = () => {
  return (
    
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={ <ProtectedRoute> <Home /> </ProtectedRoute> }/>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
