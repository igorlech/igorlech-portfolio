import HomeLanding from "../components/HomeLanding";
import SkillsSection from "../components/SkillsSection";
import Projects from "../components/Projects";
import HomeSlider from "../components/HomeSlider";
import HomeEndButtons from "../components/HomeEndButtons";

export default function HomePage() {
    return (
        <section className="page">
            <HomeLanding />
            <SkillsSection />
            <Projects />
            <HomeSlider
                options={{
                    className: "slider variable-width",
                    dots: true,
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    adaptiveHeight: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 6000
                }}
            />
            <HomeEndButtons />
        </section>
    )
};