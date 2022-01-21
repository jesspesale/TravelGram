import React from 'react';
import "./style.css"
import {SignInBtn} from "../../components"

export default function Navbar() {
    return (
        <div className="navbar">
            <p>TravelGram</p>
            <SignInBtn/>
        </div>
    );
}
