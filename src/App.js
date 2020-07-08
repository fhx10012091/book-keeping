import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'
import {LIST_VIEW, CHART_VIEW} from './utility'
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
  const [view, setView] = useState(LIST_VIEW)
  return (
    <div className="App">
      <TotalPrice income={2000} outcome={3000}/>
      <ViewTab 
        onTabChange={(view) => {setView(view)}}
        activeTab={view}/>
      <PriceList 
        items={items} 
        onModifyItem={(item) => alert(item.id)}
        onDeleteItem={(item) => alert(item.id)}
        />
    </div>
  );
}

export default App;
