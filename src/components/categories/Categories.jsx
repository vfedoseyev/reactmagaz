import React, { Component } from 'react'
import './Categories.css'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Vsye'
                },
                {
                    key: 'cairs',
                    name: 'stulya'
                },
                {
                    key: 'tables',
                    name: 'stoli'
                },
                {
                    key: 'sofa',
                    name: 'divani'
                },
                {
                    key: 'light',
                    name: 'svyet'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>

        )
    }
}

export default Categories 