import parse from "html-react-parser";
export default function SlideItem({ post }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article className="slidee">
            <div className="slider-heading">
                <img src={image} alt={parse(post.title.rendered)} className="slider-img" />
                <h1 className="slider-name">{parse(post.title.rendered)}</h1>
            </div>
            <blockquote className="slidecontent">{parse(post.content.rendered)}</blockquote>
        </article>
    );
}
