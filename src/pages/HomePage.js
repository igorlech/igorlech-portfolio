import HomeLanding from "../components/HomeLanding";
import SkillsSection from "../components/SkillsSection";
import Projects from "../components/Projects";

export default function HomePage() {
    return (
        <section className="page">
            <HomeLanding />
            <SkillsSection />
            <Projects />
        </section>
    )
};