import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactComponent = () => {

    return(
        <div className='contact-container'>

            <h1>Contact Me</h1>

            <div className='contact-links-container'>

                <div className='contact-link-container'>
                    <FontAwesomeIcon icon={faEnvelope} size='3x' className='fa-icon'/>
                    <FontAwesomeIcon icon={faTwitter} size='3x' className='fa-icon'/>
                </div>

                <div className='contact-link-container'>
                    
                    <span className='contact-text'>
                        <a href='mailto:ava.sasani2@gmail.com'>ava.sasani2@gmail.com</a>
                    </span>

                    <span className='contact-text'>
                        <a href='https://twitter.com/AvaSasani'>@AvaSasani</a>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default ContactComponent;
