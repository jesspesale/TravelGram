import React from 'react';
import "./style.css"
import { CreatePost, Navbar } from '../../containers';

function index() {
    return (
        <div className="home">
            <Navbar/>

            <CreatePost/>
        </div>
    );
}

export default index;
