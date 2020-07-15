import React, {Fragment} from 'react';

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import {LIST_VIEW, CHART_VIEW, IN_COUNT, OUT_COUNT, padLeft, parseToYearOrMonth} from '../utility'
import logo from '../logo.svg'

const category = {
    "1": {
        id: '1',
        name: '旅游',
        type: 'outcome',
        iconName: 'ios-plane'
      }
}
const items = [
    {
        id: '1',
        title: '去云南旅游',
        date: '2018-10-08',
        price: 200,
        cid: 1 
    },
    {
        id: '2',
        title: '去云南旅游',
        date: '2018-09-08',
        price: 2000,
        cid: 1
    }
  ]
  const newItem = {
    id: '3',
    title: '去云南旅游',
    date: '2018-08-08',
    price: 2000,
    cid: 1
}
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: parseToYearOrMonth(),
            tabView: LIST_VIEW,
            items
        }
    }
    createItem = () => {

        this.setState({
            items: [newItem, ...this.state.items]
        })
    }
    changeDate = (year, month) => {

        this.setState({
            currentDate: {
                year,
                month
            }
        })
    }
    onTabChange = (item) => {
        this.setState({
            tabView: item
        })
    }
    onModifyItem = (modifiedItem) => {
        const modifiedItems = this.state.items.map(item => {
            if(item.id === modifiedItem.id){
                return {...item, title: '修改后'}
            }else{
                return item
            }
        })
        this.setState({
            items: modifiedItems
        })
    }
    onDeleteItem = (deleteItem) => {
        const deletedItems = this.state.items.filter((item, index) => {
            if(deleteItem.id === item.id){
                return false
            }else {
                return true
            }
        })
        this.setState({
            items: deletedItems
        })
    }
    render() {
        let {tabView, items, currentDate} = this.state
        let totalIncome = 0, totalOutcome = 0;
        let newItems = items.map(item => {
            item.category = category[item.cid]
            return item;
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`) 
        })
        console.log(newItems)
        newItems.forEach(item => {
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
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice income={totalIncome} outcome={totalOutcome}/>
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab activeTab={tabView} onTabChange={this.onTabChange}/>
                    <CreateBtn onClick={this.createItem}/>
                    
                    {
                        tabView === LIST_VIEW &&
                        <PriceList
                            items={newItems}
                            onModifyItem={this.onModifyItem}
                            onDeleteItem={this.onDeleteItem}
                        />
                    }
                    {
                        tabView === CHART_VIEW &&
                        <h1>图标模式</h1>
                    }
                </div>
            </Fragment>
        )
    }
}

export default Home;