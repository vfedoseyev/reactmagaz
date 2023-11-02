import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div>
        <h2 onClick={() => this.props.onShowItem(this.props.item)}>{this.props.item.id}</h2>
        <h3>{this.props.item.name}</h3>
        <h3>{this.props.item.price}</h3>
        <div className='add-bin' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item