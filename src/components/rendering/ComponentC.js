import React, { useEffect, useState } from 'react';


const ComponentC = React.memo(({styles}) => {
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
});

export default ComponentC;
