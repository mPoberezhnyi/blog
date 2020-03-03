import React, { Component } from 'react';
import PostsItem from '../PostsItem'
import axios from 'axios'

class PostsList extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }

        this.removeItem = this.removeItem.bind(this)
        this.getItems = this.getItems.bind(this)
    }

    componentDidMount() {
        this.getItems()
    }

    getItems() {
        axios.get('http://localhost:8000/hotdogs')
            .then((response) => {
                this.setState(state => ({
                    posts: response.data
                }))
            })
            .catch ((e) => {
                alert(`can't load posts`)
            })
    }

    removeItem(id) {
        axios.delete(`http://localhost:8000/hotdogs/${id}`, {
            cors: 'no-cors'
        })
            .then((response) => {
                console.log(response)
                this.getItems()
            })
            .catch ((e) => {
                alert(`can't delete post`)
            })
    }

    render() {
        const postsList = this.state.posts.map((post, key) => {
            return <PostsItem  key={key}
                               item={post}
                               removeItem={this.removeItem} />
        })

        return (
            <div className="w-full flex flex-wrap p-2">
                {postsList}
            </div>
        );
    }
}

export default PostsList;
