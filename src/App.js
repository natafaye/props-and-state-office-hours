import React, { Component } from 'react'

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			channels: [
				{
					id: 0,
					name: "office-hours-fdsjkfldsfs",
					messages: [ { text: "fdesjkfldsf"}, { text: "hello" } ]
				},
				{
					id: 1,
					name: "random-chatting-fdsfds",
					messages: []
				}
			],
			//currentChannel: null, // not good code,
      		users: [
				{
					firstName: "fdjsfklds",
					messages: [ { text: "how are you"}, { text: "hello" } ]
				}
			],
		}
	}

	// setCurrentChannel(channelParameter) {
	// 	this.setState({ currentChannel: channelParameter })
	// }

	render() {
		return (
			<div>
				<Sidebar channelList={this.state.channels} />
				<Channel channel={ this.state.channels[0] }/>
			</div>
		)
	}
}

