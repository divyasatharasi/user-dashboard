import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BlogsPost(props) {
    let { blogId } = useParams();
    let history = useHistory();
    const blog = props.location.blog
    return (
        <>
        <div style={{display: 'flex', justifyContent: "space-between" }}>
            <div>Now showing post {blogId}</div>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
        <div>
            <table border="1">
                <tr><th>User ID</th><th>Title</th><th>Body</th></tr>
    <tr><td>{blog.userId}</td><td>{blog.title}</td><td>{blog.body}</td></tr>
            </table>
        </div>
        </>
    );
}

export {BlogsPost}