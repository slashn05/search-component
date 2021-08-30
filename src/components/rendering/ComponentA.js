import React, { useEffect } from 'react';
import ComponentB from './ComponentB';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentA = () => {
  useEffect(() => {
    console.log('Component A - Rendered')
  });
  return <div style={styles}>Component A <ComponentB/> </div>;

}
export default ComponentA;
