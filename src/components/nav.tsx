 import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

   const handleLogout = () => {
     localStorage.removeItem('token');

     navigate('/login');
  };

   const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <a href="/" className="hover:text-gray-400 font-bold">
          Home
        </a>
        <div className="flex gap-5">
          {!isLoggedIn ? (
            <>
              <a href="/login" className="hover:text-gray-400 font-bold">
                Login
              </a>
              <a href="/register" className="hover:text-gray-400 font-bold">
                Register
              </a>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 font-bold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
