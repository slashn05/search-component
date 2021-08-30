import React, { useEffect } from 'react';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentA = ({children}) => {
  useEffect(() => {
    console.log('Component A - Rendered')
  }, []);
  return <div style={styles}>Component A {children}</div>;

}
export default ComponentA;
