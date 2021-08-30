import React, { useEffect, useState } from 'react';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('C - Rendered');
  });
  return (
    <div style={styles}>
      C - {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        add
      </button>
    </div>
  );
};

export default ComponentC;
