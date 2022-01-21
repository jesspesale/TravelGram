import React from 'react';
import { SignInBtn } from '../../components';
import "./style.css"

function CreatePost() {
    return (
        <div className="createPost">
            <SignInBtn/>
            <p style={{marginLeft: "10px"}}>to make a post or comment</p>
        </div>
    );
}

export default CreatePost;