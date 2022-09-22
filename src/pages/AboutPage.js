import { useEffect, useState } from "react";
import parse from "html-react-parser";
import igorabout from "../components/igorabout.png"

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
        <section className="page">
            <h1 className="heading">ABOUT ME</h1>
            <img src={igorabout} className="igorabout" alt="Igor Lech" />
            <div className="projects-wrapper">
            {posts.slice(0).reverse().map(post => (
                <div className="about-content" key={post.id}>{parse(post.content.rendered)}</div>
            ))}
            </div>
        </section>
    )
};