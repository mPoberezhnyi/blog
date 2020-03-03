import React, { Component } from 'react';
import Modal from '../Modal';
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

class AddPost extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            title: '',
            description: ''
        };
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.addNewPost = this.addNewPost.bind(this);
        this.change = this.change.bind(this);
    }

    onClose()  {
        this.setState(state => ({
            isOpen: false,
            title: '',
            description: ''
        }));
    };

    onOpen()  {
        this.setState(state => ({
            isOpen: true
        }));
    };

    onSubmit() {
        this.addNewPost({
            name: this.state.title,
            description: this.state.description
        });
        this.onClose();
    };

    change(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      };

    addNewPost(post) {
        axios.post('http://localhost:8000/hotdogs', formurlencoded(post), {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then((responce) => {
                console.log(responce)
            })
            .catch((e) => {
                console.warn(e)
            })
    }

    render() {

        const content = <div>
            <h3 className="text-2xl text-center">Add new post</h3>
            <p>Enter title</p>
            <input type="text"
                   name="title"
                   defaultValue={this.state.title}
                   onChange={this.change}
                   className="w-full border mb-2 p-1 rounded" />
            <p>Enter title</p>
            <textarea rows="5"
                      name="description"
                      defaultValue={this.state.description}
                      onChange={this.change}
                      className="w-full border mb-3 p-1 rounded resize-none">
            </textarea>
        </div>

        let modal = <div></div>

        if (this.state.isOpen) {
            modal = <Modal isOpen={this.state.isOpen}
                           content={content}
                           onClose={this.onClose}
                           onSubmit={this.onSubmit} />
        }

        return (
            <div>
                <div className="fixed bottom-0 right-0 p-10">
                    <button className="leading-none text-5xl text-white rounded-full pt-1 pb-1 pl-4 pr-4 bg-blue-500 cursor-pointer focus:outline-none"
                            onClick={this.onOpen}>
                        +
                    </button>
                </div>

                {modal}
            </div>
        );
    }
}

export default AddPost;
