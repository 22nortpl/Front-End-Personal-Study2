import { useState } from 'react';
import CountNumber from './CountNumber';
import CounterButton from './CounterButton'; // ✅ 새로 만든 버튼 컴포넌트 가져오기

function Counter() {
  const [count, setCount] = useState(0);

  function incrementplus() {
    setCount(count + 1);
  }

  function incrementminus() {
    setCount(count - 1);
  }

  function incrementreset() {
    setCount(0);
  }

  function incrementplusten() {
    setCount(count + 10);
  }

  function incrementminusten() {
    setCount(count - 10);
  }
  
  return (
    <div style={{ textAlign: 'center' }}>
    <CountNumber count={count} />

    <CounterButton label="-10" onClick={incrementminusten} />
    <CounterButton label="-1" onClick={incrementminus} />
    <CounterButton label="reset" onClick={incrementreset} />
    <CounterButton label="+1" onClick={incrementplus} />
    <CounterButton label="+10" onClick={incrementplusten} />
    </div>
  );

}

export default Counter;
