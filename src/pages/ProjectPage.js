import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function ProjectPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://react-api.igorlech.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    let image = "https://react-api.igorlech.dk/wp-content/uploads/2022/09/igor.png";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <div className="projpage">
            <div className="project-row">
                <article className="projpage-texts">
                    <h3 className="projpage-title">{post.title && parse(post.title.rendered)}</h3>
                    <p className="projpage-content">{post.content && parse(post.content.rendered)}</p>
                    <p className="projpage-link-desktop">{post.acf?.website ? <a href={post.acf?.website}>See the product</a> : <p>No link available</p>}</p>
                </article>
                <div className="projpage-other">
                    <figure className="projpage-img-cont">
                        <img src={image} alt={post.title?.rendered} className="projpage-img" />
                    </figure>
                    <div className="projpage-link-cont">
                        <p className="projpage-link">{post.acf?.website ? <a href={post.acf?.website}>See the product</a> : <p>No link available</p>}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}