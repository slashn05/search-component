import React, { useEffect, useState } from 'react';
import ComponentB from './ComponentB';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentA = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('A - Rendered')
  });
  return (
    <div style={styles}>
      A - {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        add
      </button>
        <ComponentB />
    </div>
  );

}
export default ComponentA;
