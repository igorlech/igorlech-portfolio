import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({ post }) {
    const navigate = useNavigate();

    let image = "https://react-api.igorlech.dk/wp-content/uploads/2022/09/igor.png";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <div className="singleproject" onClick={() => navigate(post.slug)}>
            <img src={post.acf.image ? post.acf.image.url : image} alt={post.acf.image ? post.acf.image.alt : "Default Image"} className="postimg" />
            <h2 className="project-title">{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
            <p>{post.acf.website ? <a href={post.acf.website}>See the product</a> : <p>No link available</p>}</p>
        </div>
    );
}