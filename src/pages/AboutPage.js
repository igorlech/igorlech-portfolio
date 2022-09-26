import { useEffect, useState } from "react";
import parse from "html-react-parser";
import igorabout from "../img/igorabout.png";
import Footer from "../components/Footer";
import csslogo from "../img/css.png";
import htmllogo from "../img/html.png";
import jslogo from "../img/js.png";
import ghlogo from "../img/github.png";
import reactlogo from "../img/react.png";
import drums from "../img/drums.jpg";

export default function AboutPage({ post }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.igorlech.dk/wp-json/wp/v2/aboutpage?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <section className="aboutpage">
            <div className="about-heading-cont">
                <h1 className="about-heading">about me</h1>
            </div>
            <div className="about-content-cont">
                <div className="about-photo-cont">
                    <img src={igorabout} className="igorabout" alt="Igor Lech" />
                    <img src={drums} className="igordrums" alt="Igor Lech" />
                </div>
                <div className="about-wrapper">
                {posts.slice(0).reverse().map(post => (
                    <div className="about-content" key={post.id}>{parse(post.content.rendered)}</div>
                ))}
                </div>
            </div>
            <div className="about-technologies-cont">
                <img src={reactlogo} className="technology-logo" id="react" alt="React Logo" />
                <img src={jslogo} className="technology-logo" id="js" alt="React Logo" />
                <img src={htmllogo} className="technology-logo" id="html" alt="React Logo" />
                <img src={csslogo} className="technology-logo" id="css" alt="React Logo" />
                <img src={ghlogo} className="technology-logo" id="gh" alt="React Logo" />
            </div>
            <Footer />
        </section>
    )
};