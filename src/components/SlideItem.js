import parse from "html-react-parser";
export default function SlideItem({ post }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <h1>{parse(post.title.rendered)}</h1>
            <img src={image} alt={post.title.rendered} className="slider-img" />
        </article>
    );
}
