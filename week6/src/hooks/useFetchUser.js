import { useEffect, useState } from "react";

export function useFetchUser(userId) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [userId]);

  return todos;
}
