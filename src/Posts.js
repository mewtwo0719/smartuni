import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core';
import Post from './Post'
import './Posts.css'
import SendPosts from './SendPost'
import db from './firebase'

function Posts(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        ))
    }, [])

  
    return (
        <div className='posts'>
            <SendPosts/>
            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic = {post.data.profilePic}
                    message={post.data.message}
                    timestamp = {post.data.timestamp}
                    username = {post.data.username}
                    image = {post.data.image}
                />
            ))}
        </div>
    )
}

export default Posts
