import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => 
    <footer className="footer">
        <small>
    The <a href="https://facebook.github.io/react/">ReactJS library</a>
    by <a href="https://www.facebook.com/">Facebook</a>
        </small>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                 <li><Link to="#">Nav X</Link></li>
                <li><Link to="#">Nav Y</Link></li>
                <li><a href="http://newsroom.fb.com/">News</a></li>
            </ul>
        </nav>
    </footer>

export default Footer; 