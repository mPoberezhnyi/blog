import React, { Component } from 'react';
import propTypes from 'prop-types';

class Modal extends Component {

    render() {
        
        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-1" onClick={this.props.onClose}></div>
                <div className="w-2/5 bg-white rounded-lg p-8 pt-6">
                    <div className="flex justify-end">
                        <span className="text-lg col text-black cursor-pointer" onClick={this.props.onClose}>X</span>
                    </div>                    
                    <div>
                        {this.props.content}
                    </div>
                    <div className="flex justify-end">
                        <button className="text-sm text-blue-500 mr-1 p-2 rounded bg-white border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white" onClick={this.props.onClose}>close</button>
                        <button className="text-sm text-white rounded p-2 bg-blue-500 cursor-pointer" onClick={this.props.onSubmit}>send</button>
                    </div>                    
                </div>
            </div>  
        );
    }
}

Modal.propTypes = {
    isOpen: propTypes.bool,
    content: propTypes.node,
    onClose: propTypes.func,
    onSubmit: propTypes.func,
}

Modal.defaultProps = {
    isOpen: false,
    content: <div></div>,
    onClose: () => {},
    onSubmit: () => {},
}

export default Modal;
