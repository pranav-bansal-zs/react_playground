import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (count === 3 ) {
      inputRef.current.focus(); 
    }
    inputRef.current.value=count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <input
        value=""
        ref={inputRef}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
