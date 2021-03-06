import React from 'react';
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="container pt-5">
       <h1 className='text-center'>React App</h1>
        <div className="row">
            <div className="col">
                <PostForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Синхронные посты</h2>
                <Posts  />
            </div>
            <div className="col">
                <h2>Асинхронные посты</h2>
                <FetchedPosts />
            </div>
        </div>
    </div>
  );
}

export default App;
