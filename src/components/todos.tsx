 import axios from "axios"
import { useEffect, useState } from "react"



interface Todo {
    id: number;
    title: string;
   }

function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  
    const [error, setError] = useState<string | null>(null);  


    const token  = localStorage.getItem('token')


   
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/users/me?populate=todos', {
          headers: {
            Authorization: `Bearer ${token}`,   
          },
        });
        console.log('fady', response);
        setTodos(response.data.todos);  
        setLoading(false);   
      } catch (error) {
        console.log(error)
        setError('Failed to fetch todos');   
        setLoading(false);
      }
    };

    if (token) {
      fetchTodos();   
    } else {
      setError('No token found');
      setLoading(false);
    }
  }, [token]);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }




  return (
    <div>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
           </div>
        ))
      )}
    </div>
  );
};

export default Todos;