import React from 'react';
import List from './list';

const App = () => {
  const items = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
    { text: 'Item 4' },
    { text: 'Item 5' },
  ];

  return (
    <div>
      <h1>Item List</h1>
      <List items={items} />
    </div>
  );
};

export default App;
