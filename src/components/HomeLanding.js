import igorphoto from './main.png'

export default function HomeLanding() {
    return (
        <div className="hl-landing">
            <div className="hl-mobile">
                <div className="mobile-igor-cont">
                    <img src={igorphoto} alt="Igor Lech" className='igorphoto' />
                </div>
                <div className="mobile-landing-texts">
                    <h1 className='landing-heading'>igor lech</h1>
                    <h2 className='landing-subheading'>Multimedia Design Student,<br></br>aspiring Front-end Developer</h2>
                    <a href='https://igorlech.dk' className='landing-button'>About me</a>
                </div>
            </div>
            <div className="hl-desktop">
                <div className='desktop-landing'>
                    <img src={igorphoto} alt="Igor Lech" className='igorphoto' />
                    <h1 className='landing-heading'>igor lech</h1>
                    <h2 className='landing-subheading'>Multimedia Design Student,<br></br>aspiring Front-end Developer</h2>
                    <a href='https://igorlech.dk' className='landing-button'>About me</a>
                </div>
            </div>
        </div>
    )
}