import './Footer.css';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>

                <ul className="footer-links">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>

                <p>&copy; 2024 CampCompass. All Rights Reserved.</p>

                <ul className="social-media">
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.tweeter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
                </ul>

            </div>
        </footer>
    )
}