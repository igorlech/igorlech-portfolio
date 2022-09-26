import linkedin from '../img/linkedin-app-icon.png';

export default function Footer() {
    return (
        <div className="footer">
            <a href='https://www.linkedin.com/in/igor-lech-347b0a21a/'><img src={linkedin} alt="LinkedIn Logo" className="footerlogo" /></a>
            <h2 className="footername">igor lech</h2>
        </div>
    )
}