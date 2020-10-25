import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const NavigationComponent = () => {

    return(
        <div className='navbar'>

            <div>
                <a className='nav-headline' href='/'>Ava Sasani :~)</a>
            </div>

            <div className='right-links'>
                <a className='nav-link' href="/portfolio">Portfolio</a>
                <a className='nav-link' href="/about">About</a>
                <a className='nav-link' href="/contact">Contact</a>

                <a className='twitter-icon' href="https://twitter.com/AvaSasani">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </div>
        </div>
    )
}

export default NavigationComponent;
