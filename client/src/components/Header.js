import react from 'react';

export default function Header() {
    return (
            <header className="navigation-container">
            
                <div className="logo-container">
                    <h1 className="my-name">David Schwartz</h1>
                    <h3 className="role-title">Full Stack Software Engineer</h3>
                </div>

                <ul className="main-navigation mobile">
                    <li><a href="/portfolios">Portfolio</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/hire-me">Hire Me</a></li>
                    <li><a href="/mailing-list">Mailing List</a></li>
                    <li><a href="/dark-mode">Dark Mode</a></li>
                </ul>
                
            </header>
    )
}