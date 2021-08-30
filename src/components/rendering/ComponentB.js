import React, { useEffect } from 'react';

const styles = { border: '1px solid blue', padding: 10, margin: 10 };

const ComponentB = ({children}) => {
  useEffect(() => {
    console.log('Component B - Rendered')
  }, []);

return <div style={styles}> Component B {children}</div>};

export default ComponentB;
