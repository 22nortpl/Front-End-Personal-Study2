import { useState, useEffect } from 'react';
import EmptyData from './EmptyData';
import Todo from './Todo';

function App() {

 const [todos, setTodos] = useState([]);

 useEffect(() => {

 fetch('https://jsonplaceholder.typicode.com/users1/1/todos')

 .then((response) => response.json())

 .then((json) => setTodos(json));

 }, []);

 if (todos.length === 0) {

 return (

  <EmptyData />

 );

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