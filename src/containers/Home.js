import React, {Fragment} from 'react';

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import {LIST_VIEW, CHART_VIEW, IN_COUNT, OUT_COUNT} from '../utility'
import logo from '../logo.svg'


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
    },
    {
        id: '1',
        title: '去云南旅游',
        data: '2018-08-08',
        price: 2000,
        category: {
          id: '1',
          name: '旅游',
          type: 'income',
          iconName: 'ios-plane'
        }
    }
  ]

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            logo: ""
        })
    }
    render() {
        let totalIncome = 0, totalOutcome = 0;
        items.forEach(item => {
            if(item.category.type === IN_COUNT){
                totalIncome += item.price
            }else{
                totalOutcome += item.price
            }
        })
        return (
            <Fragment>
                <header className='App-header'>
                    <div className='row mb-5 justify-content-center'>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <MonthPicker 
                                year={2020}
                                month={7}
                                onChange={() => {}}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice income={totalIncome} outcome={totalOutcome}/>
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab activeTab={LIST_VIEW} onTabChange={() => {}}/>
                    <CreateBtn onClick={() => {}}/>
                    <PriceList
                        items={items}
                        onModifyItem={() => {}}
                        onDeleteItem={() => {}}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Home;