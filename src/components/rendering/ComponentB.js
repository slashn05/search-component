import React, { useEffect, useState } from 'react';
import ComponentC from './ComponentC';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentB = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('B - Rendered');
  });

  return (
    <div style={styles}>
      B - {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        add
      </button>
        <ComponentC styles={styles}/>
    </div>
  );
};

export default ComponentB;
