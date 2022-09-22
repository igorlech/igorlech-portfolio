import codeicon from './code-icon.png'
import designicon from './design-icon.png'
import skillsicon from './skills-icon.png'

export default function SkillsSection() {
    return (
        <div className="skills-section">
            <h2 className="skills-heading">my skills</h2>
            <div className="skills-wrapper">
                <div className="hard-skills-coding skillblock">
                    <div className="skills-img-cont">
                        <img src={codeicon} alt="Code Icon" className="skills-img" />
                    </div>
                </div>
                <div className="hard-skills-other skillblock">
                <div className="skills-img-cont">
                        <img src={designicon} alt="Code Icon" className="skills-img" />
                    </div>
                </div>
                <div className="soft-skills skillblock">
                <div className="skills-img-cont">
                        <img src={skillsicon} alt="Code Icon" className="skills-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}