import { useState } from 'react'
import './navbar.css'

export default function NavBar(props){
    return(
        <nav className="navbar">
            <h1 className="navbar-logo">Arie Semenov</h1>
            <ul className="navbar-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>

    );
}