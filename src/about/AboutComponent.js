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
                I graduated from the <a className='about-link' 
                href='https://camd.northeastern.edu/journalism-at-northeastern/'>Northeastern University School of Journalism</a> in 
                Boston. I have a passion for investigative and audio journalism, and I 
                previously helped produce a WNYC and NPR show 
                called <a className='about-link' href='https://www.wnycstudios.org/podcasts/otm'>On the Media</a>. As an intern 
                at the <a className='about-link' href='https://www.wsj.com/'>Wall Street Journal</a>, I contributed to an investigative 
                series exposing corruption in the federal court system, and I later 
                helped cover the Taliban’s 2021 capture of Kabul.
                </p>

                <div className='learn-more'>
                    Interested in working with me? Want to chat? <a href='contact'>Contact me!</a>
                </div>

            </div>

        </div>
    )
}

export default AboutComponent;
