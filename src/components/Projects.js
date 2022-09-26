import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { Fade } from 'react-awesome-reveal';

export default function Projects() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.igorlech.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <div className="projects-section">
            <Fade triggerOnce="true" direction="up">
                <h2 className="projects-heading">projects<br></br>I worked on</h2>
            </Fade>
            <div className="projects-wrapper">
            {posts.slice(0).reverse().map(post => (
                        <ProjectItem key={post.id} post={post} />
                    ))}
            </div>
        </div>
    )
}