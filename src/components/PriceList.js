import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex 
                    justify-content-between align-items-center"
                    key={item.id}>
                        <span className="col-1">
                            <Ionicon 
                            className="rounded-circle"
                            fontSize="30px"
                            color="#fff"
                            icon={item.category.iconName}
                            style={{backgroundColor: "#007bff", padding: '5px'}}/>    
                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">
                            {(item.category.type==='outcome')? '-': '+'}
                            { item.price}元
                        </span>
                        <span className="col-2">{item.date}</span>
                        <a className="col-1" onClick={() => onModifyItem(item)}>
                            <Ionicon 
                                className="rounded-circle"
                                fontSize="30px"
                                color="#fff"
                                icon='ios-create-outline'
                                style={{backgroundColor: "#28a745", padding: '5px'}}/> 
                        </a>
                        <a className="col-1" onClick={() => onDeleteItem(item)}>
                            <Ionicon 
                                className="rounded-circle"
                                fontSize="30px"
                                color="#fff"
                                icon='ios-close'
                                style={{backgroundColor: "#dc3545", padding: '5px'}}/> 
                        </a>
                        
                    </li>
                ))
            }
        </ul>
    )
}
PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}
PriceList.defaultProps = {
    onDeleteItem: () => {},
}
export default PriceList