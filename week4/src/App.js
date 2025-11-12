import { useState } from 'react';

import CountNumber from './CountNumber';


function Counter() {

 const [count, setCount] = useState(0);


 function incrementplus() {

 setCount(count+1);

 }

 function incrementminus() {

 setCount(count-1);

 }

 function incrementreset() {

 setCount(0);

 }

 function incrementplusten() {

 setCount(count+10);

 }

 function incrementminusten() {

 setCount(count-10);

 }


 return (

 <div>

 <CountNumber count={count} />

 <button onClick={incrementminusten}>-10</button>

 <button onClick={incrementminus}>-1</button>

 <button onClick={incrementreset}>reset</button>

 <button onClick={incrementplus}>+1</button>

 <button onClick={incrementplusten}>+10</button>

 </div>

 )

}


export default Counter;