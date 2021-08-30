import React, { useState } from 'react';
import { render } from 'react-dom';
import Problem from './components/Problem';
import Search from './components/Search';
import ComponentA from './components/rendering/ComponentA';
import ComponentB from './components/rendering/ComponentB';
import ComponentC from './components/rendering/ComponentC';

const App = Problem;

const Rendering = () => (
  <ComponentA>
    <ComponentB>
      <ComponentC />
    </ComponentB>
  </ComponentA>
);

// render(<App />, document.getElementById('root'));
render(<Rendering />, document.getElementById('root'));