import React, { useEffect } from 'react';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentC = () => {
  useEffect(() => {
    console.log('Component C - Rendered');
  });
  return <div style={styles}>Component C</div>;
};

export default ComponentC;
