import React, { Component } from 'react'
import './ShowFullItem.css'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div className='full-item-form'>
                    <h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.id}</h2>
                    <h3>{this.props.item.name}</h3>
                    <h3>{this.props.item.price}</h3>
                    <div className='add-bin' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem
