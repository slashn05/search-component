import React, { useEffect } from 'react';
import ComponentC from './ComponentC';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentB = () => {
  useEffect(() => {
    console.log('Component B - Rendered')
  });

return <div style={styles}> Component B <ComponentC /></div>};

export default ComponentB;
