import React from 'react';
import { hot } from 'react-hot-loader';
import MainScreen from './MainScreen';

function App() {
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default hot(module)(App);
