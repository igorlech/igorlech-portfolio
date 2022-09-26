import ln from "../img/contact-ln.png";
import mail from "../img/contact-mail.png";
import gh from "../img/contact-gh.png";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <section>
            <div className="contactpage">
                <h1 className="contact-heading">contact</h1>
                <div className="contacts-container">
                    <a href="mailto:igor.lech@wp.pl"><div className="singlecontact">
                        <div className="contact-first">
                            <img src={mail} className="contact-img" alt="Contact Logo" />
                        </div>
                        <div className="contact-second">
                            <h2 className="contact-title">igor.lech@wp.pl</h2>
                        </div>
                    </div></a>
                    <a href="https://www.linkedin.com/in/igor-lech-347b0a21a/"><div className="singlecontact">
                        <div className="contact-first">
                            <img src={ln} className="contact-img" alt="Contact Logo" />
                        </div>
                        <div className="contact-second">
                            <h2 className="contact-title">LinkedIn</h2>
                        </div>
                    </div></a>
                    <a href="https://github.com/igorlech"><div className="singlecontact">
                        <div className="contact-first">
                            <img src={gh} className="contact-img" alt="Contact Logo" />
                        </div>
                        <div className="contact-second">
                            <h2 className="contact-title">My github profile</h2>
                        </div>
                    </div></a>
                </div>
            </div>
            <Footer />
        </section>
    )
};