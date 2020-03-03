import React, { Component } from 'react';

class Notification extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
        }
    }

    onClose() {
        this.setState(state => ({
            isShow: false
        }))
    }

    onOpen() {
        this.setState(state => ({
            isShow: true
        }))
    }

    render() {

        if (this.state.isShow) return (<div></div>)

        return (
            <div className={`absolute top-0 right-0 w-56 mt-16 mr-5 rounded ${}`}>
                <div className="flex justify-end mb-2">
                    <span className="text-lg col text-black cursor-pointer" onClick={this.onClose}>X</span>
                </div>


            </div>
        );
    }
}

export default Notification;
