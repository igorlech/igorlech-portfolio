import { Link } from 'react-router-dom';
import igorcv from '../img/igorlech-cv.pdf';

export default function HomeEndButtons() {
    return (
        <div className="endbuttons-cont">
            <Link to='/contact' className="endbutton" id="letstalk">Let's talk</Link>
            <a href={igorcv} download className="endbutton" id="resume">Download resume</a>
        </div>
    )
}