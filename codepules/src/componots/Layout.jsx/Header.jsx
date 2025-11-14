import React from 'react';
import logo from '../assets/aa..jpg';


export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="CodePulse logo" className="logo" />
                <h1>CodePulse</h1>
                <nav>
                    
                </nav>
            </div>
        </header>
    );
}