import React from 'react';
import { hot } from 'react-hot-loader';

import TopAppBar from './TopAppBar';

const testTopBar = {
  walletName: 'Main Wallet', balance: 1000.56, currency: '$', date: new Date(2020, 3),
};
function App() {
  return (
    <div className="App">
      <TopAppBar {...testTopBar} />
    </div>
  );
}

export default hot(module)(App);
