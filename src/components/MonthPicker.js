import React from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'
class MonthPicker extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year
        }
    }
    handleSpaceSquare = (e) => {
        if(e.target.nodeName !== 'A' && e.target.nodeName !== 'BUTTON'){
            this.setState({
                isOpen: false
            })
        }
    }
    componentDidMount() {
        document.addEventListener('click', this.handleSpaceSquare, false)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleSpaceSquare, false)
    }
    render() {
        const {year, month} = this.props
        const {isOpen} = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(item => item + year)
        return (
            <div className="dropdown month-picker-component">
                <h5>选择月份</h5>
                <button 
                onClick={this.handleIsOpen.bind(this)}
                className="btn btn-lg btn-secondary dropdown-toggle">
                    {`${year}年 ${padLeft(month)}月`}
                </button>
                { isOpen && 
                    <div className="dropdown-menu" style={{display: 'block'}}>
                        <div className="row">
                            <div className="col border-right">
                                { yearRange.map((yearNumber, index) => (
                                    <a 
                                    key={index} 
                                    href="#"
                                    onClick={(e) => this.handleSelectYear(e, yearNumber)}
                                    className={this.state.selectedYear === yearNumber? 'dropdown-item active' : 'dropdown-item'}>
                                        {yearNumber} 年
                                    </a>
                                )) }
                            </div>
                            <div className="col">
                                { monthRange.map((monthNumber, index) => (
                                    <a
                                    href="#" 
                                    key={index}
                                    onClick={(e) => this.handleMonth(e, monthNumber)} 
                                    className={monthNumber === month? "dropdown-item active" : "dropdown-item"}>
                                        {padLeft(monthNumber)} 月
                                    </a>
                                )) }
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
    handleIsOpen = () => {
        this.setState((preState) => ({
            isOpen: !preState.isOpen
        }), () => {
            console.log(this.state.isOpen)
        })
    }
    handleSelectYear = (e, yearNumber) =>  {
        e.preventDefault()
        this.setState((preState) => {
            return {
                selectedYear: yearNumber
            }
        })
    }
    handleMonth = (e, monthNumber) =>  {
        e.preventDefault()
        this.setState({
            isOpen: false
        })
        this.props.onChange(this.state.selectedYear, monthNumber)
    }
}
MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default MonthPicker;