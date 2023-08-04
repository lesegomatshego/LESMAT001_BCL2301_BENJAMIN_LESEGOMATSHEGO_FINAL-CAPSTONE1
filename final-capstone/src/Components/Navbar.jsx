import React from 'react';
import microphoneIcon from '../images/microphone.png';

export default function Navbar() {
return (
    <div>
    <nav>
    <img src={microphoneIcon} alt="Microphone Icon" className="nav--icon" />
    <h1>LESPODCAST</h1>
    
    </nav>
    </div>
)
}
