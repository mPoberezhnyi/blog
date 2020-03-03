import React, { Component } from 'react';
import Header from './Components/Header';
import PostsList from './Components/PostsList';
import AddPost from "./Components/AddPost";

class App extends Component {

    render() {

        return (
            <div className="App">
                <Header />
                <PostsList />
                <AddPost />
            </div>
        );
    }
}

export default App;
