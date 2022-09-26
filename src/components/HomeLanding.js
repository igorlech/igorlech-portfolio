import igorphoto from '../img/main.png';
import { useEffect } from 'react';

export default function HomeLanding() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className="hl-landing">
            <div className="hl-mobile">
                <div className="mobile-igor-cont">
                    <img src={igorphoto} alt="Igor Lech" className='igorphoto' />
                </div>
                <div className="mobile-landing-texts">
                    <h1 className='landing-heading'>igor lech</h1>
                    <h2 className='landing-subheading'>Multimedia Design Student,<br></br>aspiring Front-end Developer</h2>
                    <button onClick={() => {
                        window.scrollTo({top: 820, left: 0, behavior: 'smooth'});
                    }} className='landing-button'>About me</button>
                </div>
            </div>
            <div className="hl-desktop">
                <div className='desktop-landing'>
                    <img src={igorphoto} alt="Igor Lech" className='igorphoto' />
                    <h1 className='landing-heading'>igor lech</h1>
                    <h2 className='landing-subheading'>Multimedia Design Student,<br></br>aspiring Front-end Developer</h2>
                    <button onClick={() => {
                        window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
                    }} className='landing-button'>About me</button>
                </div>
            </div>
        </div>
    )
}