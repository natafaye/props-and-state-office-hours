import React, { Component } from 'react'

export default class AnotherComponent extends Component {
    render() {
        return (
            <p>Hello { this.props.someProp }</p>
        )
    }
}
