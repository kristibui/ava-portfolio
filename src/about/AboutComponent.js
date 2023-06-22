import './about.css';
import ava_about_photo from './ava_about.jpg';

const AboutComponent = () => {

    return(
        <div className='about-container'>

            <div className='about-bio-image-container'>
                <div className='about-bio-image'>
                    <img src={ava_about_photo} alt='Ava in Barcelona'/>
                </div>
            </div>

            <div className='about-text-container'>

                <h1>Hi, I’m Ava.</h1>

                <p>
                I covered abortion for <a className='about-link' target='_blank' href='https://www.nytimes.com/'>The New York Times</a> as a 2022-2023 
                reporting fellow, and published 
                two front-page stories about life in post-Roe America. As an intern at 
                the <a className='about-link' target='_blank' href='https://www.wsj.com/'>Wall Street Journal</a>, I contributed to an investigative series exposing corruption in the federal court system, and I later helped cover the Taliban’s 2021 capture of Kabul.
                </p>

                <div className='learn-more'>
                    Interested in working with me? Want to chat? <a href='contact'>Contact me!</a>
                </div>

            </div>

        </div>
    )
}

export default AboutComponent;
