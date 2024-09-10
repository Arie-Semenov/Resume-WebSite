import { useState } from 'react';
import './footer.css';

export default function Footer(props) {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Arie Semenov. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/Arie-Semenov" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="mailto:your.email@example.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}
