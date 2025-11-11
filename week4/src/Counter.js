import { useState } from 'react';


function Counter() {

 const [count, setCount] = useState(0);


 function increment() {

 setCount(count+1);

 }


 return (

 <div>

 <h2>{count}</h2>

 <button onClick={increment}>+1</button>

 </div>

 )

}


export default Counter;