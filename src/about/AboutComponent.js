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
                Listen, I know what you’re wondering. How could such an experienced, 
                trendy, impossibly attractive reporter be looking for work?
                </p>
                <p>
                <b>First of all, you ask a lot of questions.</b>
                </p>
                <p>
                Second, I am completing my final year at the <a className='about-link' 
                href='https://camd.northeastern.edu/journalism-at-northeastern/'>Northeastern University School of Journalism</a> in Boston. 
                I have a passion for investigative and audio journalism, and I’m currently helping produce a WNYC and NPR 
                show called <a className='about-link' href='https://www.wnycstudios.org/podcasts/otm'>On the Media.</a> I have 
                experience using Mailchimp to create email newsletters and I have a crippling fear of sports mascots.
                </p>

                <div className='learn-more'>

                    Interested in working with me? Want to chat? <a href='contact'>Contact me!</a>
  
                </div>

            </div>

        </div>
    )
}

export default AboutComponent;
