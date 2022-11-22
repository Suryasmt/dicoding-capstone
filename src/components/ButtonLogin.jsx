import React, { Component } from 'react'

export default class ButtonLogin extends Component {
    render() {
        return (
            <button className='btn-login'>{this.props.name}</button>
        )
    }
}
