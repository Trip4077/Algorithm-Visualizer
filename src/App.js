import React from 'react';
import Nav from './Nav/Nav';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import LinkedList from './LinkedList/LinkedList';

import { Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return(
    <div className="app">
      <Nav />
      <Route exact path='/' component={SortingVisualizer} />
      <Route path='/linked-lists' component={LinkedList} />
    </div>
  )
}

export default App;
