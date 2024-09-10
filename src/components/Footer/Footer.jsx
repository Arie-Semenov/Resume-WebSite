import { useState } from 'react';
import './footer.css';

export default function Footer(props) {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Arie Semenov. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://www.instagram.com/semenov_arie/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://github.com/Arie-Semenov" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="mailto:semenovarie2006@gmail.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}
