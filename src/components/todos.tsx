import axios from "axios";
import { useEffect, useState } from "react";
 

interface Todo {
  id: number;
  title: string;
}

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/users/me?populate=todos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
           }
        );

        
        console.log("Fady full response:", JSON.stringify(response.data.todos, null, 2));
        setTodos(response.data.todos);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch todos");
        setLoading(false);
      }
    };

    if (token) {
      fetchTodos();
    } else {
      setError("No token found");
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
    <div className="container bg-gray-800 p-5 rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-white mt-4 pt-5">
        Todo List
      </h1>

      <button className="font-bold text-white  flex m-auto mt-4 mb-5 cursor-pointer shadow-2xl bg-blue-500 p-2 rounded-md">Add</button>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="flex  items-center justify-between">
            <h3 className="text-white font-bold m-5">{todo.title}</h3>
            <div className="me-5">
              <button className="text-white bg-green-700 p-2 ps-4 pe-4 me-3 rounded-md">Edit</button>
              <button className="text-white bg-red-500     p-2 me-3 rounded-md">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Todos;
