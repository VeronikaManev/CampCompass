import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>

                <ul className="footer-links">
                    <li><Link to='/privacyPolicy'>Privacy Policy</Link></li>
                </ul>

                <p>&copy; 2024 CampCompass. All Rights Reserved.</p>

                <ul className="social-media">
                    <li><a href="https://www.facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com" target='_blank'><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://x.com/tweeter" target='_blank'><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.youtube.com" target='_blank'><i className="fab fa-youtube"></i></a></li>
                </ul>

            </div>
        </footer>
    )
}