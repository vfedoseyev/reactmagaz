import React, { Component } from 'react'
import Item from '../item/Item.jsx'
import './Items.css'

export class Items extends Component {
  render() {
    return (
      <div className='items'>
        {this.props.items.map(el => (
          <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </div>
    )
  }
}

export default Items