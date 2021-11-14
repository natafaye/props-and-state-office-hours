import React, { Component } from 'react'

class Message extends Component {
    render() {
        return <div> { this.props.messagePropOnMessageComponent.text } </div>
    }
}

export default class MessageList extends Component {
    render() {
        return (
            <div>
                { this.props.messageListOfThings.map(arrowFunctionParameter => <Message messagePropOnMessageComponent={ arrowFunctionParameter }/> ) }
            </div>
        )
    }
}
