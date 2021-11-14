import React, { Component } from 'react'
import AnotherComponent from './AnotherComponent'

export default class SomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        let stuff = <AnotherComponent someProp={"fdjskflds"} />
        
        // if(this.props.listOfMessages.length > 0) {
        //     return (
        //         <div>
        //             <AnotherComponent/>
        //         </div>
        //     )
        // }
        // else {
        //     return <div>
        //         You have no messages
        //     </div>
        // }

        return (
            <div>
                { (this.props.listOfMessages.length > 0) ? <AnotherComponent/> : "You have no messages" }
            </div>
        )
    }
}