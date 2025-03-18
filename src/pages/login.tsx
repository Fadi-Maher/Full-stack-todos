 import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ILoginInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginInput>();
  const navigate = useNavigate(); 

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: data.email,  
        password: data.password,
      });

      if (response.data.jwt) {
        localStorage.setItem('token', response.data.jwt);
      }

       
       alert('Login successful!');
      navigate('/');  
    } catch (error) {
      // Handle errors
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
        alert('Invalid email or password');
      } else {
        console.error('Error:', error);
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div className="input-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
            })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
