import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import "./App.css"

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
      <Home/>
      {/* <TotalPrice income={2000} outcome={3000}/>
      <ViewTab 
        onTabChange={(view) => {setView(view)}}
        activeTab={view}/>
      <PriceList 
        items={items} 
        onModifyItem={(item) => alert(item.id)}
        onDeleteItem={(item) => alert(item.id)}
        />
      <MonthPicker year={year} month={month} onChange={(year, month) => handleYearAndMonth(year, month)}/> */}
    </div>
  );
}

export default App;
