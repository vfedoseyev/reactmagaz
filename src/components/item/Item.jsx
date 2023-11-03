import React, { Component } from 'react'
import './Item.css'
import { IoAddCircleSharp } from "react-icons/io5";

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.id}</h2>
        <h3>{this.props.item.name}</h3>
        <h3>{this.props.item.price}</h3>
        <IoAddCircleSharp className='add-bin' onClick={() => this.props.onAdd(this.props.item)}/>
      </div>
    )
  }
}

export default Item