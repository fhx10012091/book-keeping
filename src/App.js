import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
const items = [
  {
    id: '1',
    title: '去云南旅游',
    data: '2018-08-08',
    price: 200,
    category: {
      id: '1',
      name: '旅游',
      type: 'outcome',
      iconName: 'ios-plane'
    }
  }
]
const App = () => {
  return (
    <div className="App">
      <PriceList 
      items={items} 
      onModifyItem={(item) => alert(item.id)}
      onDeleteItem={(item) => alert(item.id)}
      />
    </div>
  );
}

export default App;
