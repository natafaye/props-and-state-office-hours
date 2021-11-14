import React, { Component } from 'react'

export default class Channel extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.channel.name }</h3>
                <MessageList messageListOfThings={this.props.channel.messages}/>
            </div>
        )
    }
}
