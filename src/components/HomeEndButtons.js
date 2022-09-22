import { Link } from 'react-router-dom';

export default function HomeEndButtons() {
    return (
        <div className="endbuttons-cont">
            <Link to='/contact'>Let's talk</Link>
            <button type="submit">Download resume</button>
        </div>
    )
}