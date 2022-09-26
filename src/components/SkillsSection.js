import codeicon from '../img/code-icon.png';
import designicon from '../img/design-icon.png';
import skillsicon from '../img/skills-icon.png';


export default function SkillsSection() {
    return (
        <div className="skills-section">
            <h2 className="skills-heading" id="skills-heading">my main skills</h2>
            <div className="skills-wrapper">
                <div className="hard-skills-coding skillblock">
                    <div className="skills-img-cont">
                        <img src={codeicon} alt="Code Icon" className="skills-img" />
                        <div className="single-skill">
                            <h3 className="skillname">HTML</h3>
                            <div className="hardskill-chart" id="hard1"></div>
                        </div>
                        <div className="single-skill">
                            <h3 className="skillname">CSS</h3>
                            <div className="hardskill-chart" id="hard2"></div>
                        </div>
                        <div className="single-skill">
                            <h3 className="skillname">JavaScript</h3>
                            <div className="hardskill-chart" id="hard3"></div>
                        </div>
                        <div className="single-skill">
                            <h3 className="skillname">React</h3>
                            <div className="hardskill-chart" id="hard4"></div>
                        </div>
                        <div className="single-skill">
                            <h3 className="skillname">SQL, Java, Python</h3>
                            <div className="hardskill-chart" id="hard5"></div>
                        </div>
                    </div>
                </div>
                <div className="hard-skills-other skillblock">
                <div className="skills-img-cont">
                        <img src={designicon} alt="Code Icon" className="skills-img" />
                        <div className="singleskill">
                            <ul className="creativeskills-list">
                                <li className="skillname cs-listitem">SEO and SoMe</li>
                                <li className="skillname cs-listitem">Adobe Creative Suit: XD, Photoshop, Premiere Pro, After Effects, Lightroom</li>
                                <li className="skillname cs-listitem">Prototyping in XD and Figma</li>
                                <li className="skillname cs-listitem">Graphic Design</li>
                                <li className="skillname cs-listitem">Microsoft Office</li>
                                <li className="skillname cs-listitem">Project management</li>
                                <li className="skillname cs-listitem">Teamwork platforms</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="soft-skills skillblock">
                <div className="skills-img-cont">
                        <img src={skillsicon} alt="Code Icon" className="skills-img" />
                        <div className="singleskill">
                            <ul className="creativeskills-list second">
                                <li className="skillname cs-listitem">Teamwork skills</li>
                                <li className="skillname cs-listitem">Open-minded</li>
                                <li className="skillname cs-listitem">Proactive and eager</li>
                                <li className="skillname cs-listitem">Creative</li>
                                <li className="skillname cs-listitem">Committed</li>
                                <li className="skillname cs-listitem">Social and active</li>
                                <li className="skillname cs-listitem">Fluency in English, native Polish and intermediate level in Danish and German</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}