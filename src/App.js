import React, { useState } from 'react';
import { render } from 'react-dom';
import Problem from './components/Problem';
import Search from './components/Search';

const App = Problem;

render(<App />, document.getElementById('root'));