import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={""} />
                <h2>{this.props.item.id}</h2>
                <h3>{this.props.item.name}</h3>
                <FaTrash className='delete-icon' onClick={()=>this.props.onDelete(this.props.item.id) } />
            </div>
        )
    }
}

export default Order