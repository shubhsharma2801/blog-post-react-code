import React from 'react'
import Header from './Header';
import Post from './Post';
export default function Homepage(props) {
    const posts = props.posts;
    const searchCallback = props.searchCallback;
    return (
        <div>
            <Header searchCallback={searchCallback} />
            {posts.map(post => <div><Post key={post.id} post={post}></Post></div>)}
        </div>
    )
}
