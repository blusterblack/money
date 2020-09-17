import React from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Item from './Item';

const testItem = { category: 'food', amount: 1000, detail: 'abcxyz' };
export default function MainScreen() {
  return (
    <div id="MainScreen">
      <TopBar />
      <div id="Main">
        <Item {...testItem} />
      </div>
      <NavBar />
    </div>

  );
}
