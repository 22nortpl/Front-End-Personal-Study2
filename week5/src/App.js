import { useState, useEffect } from 'react';
import EmptyData from './EmptyData';
import Todo from './Todo';
import State from './State';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/photos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  if (todos.length === 0) {
    return <State />;     // ← 데이터를 받기 전 상태 보여주는 컴포넌트
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} />
      ))}
    </div>
  );
}

export default App;
