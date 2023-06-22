import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const NavigationComponent = () => {

    return(
        <div className='navbar'>
            <div>
                <a className='nav-headline' href='/'>Ava Sasani</a>
            </div>

            <div className='right-links'>
                <div className='portfolio-sub-links'>
                <span className='hoverable-link nav-link portfolio-nav'>Portfolio</span>
                    <ul>
						<li><a className='hoverable-link' href="/read">Read</a></li>
						<li><a className='hoverable-link' href="/listen">Listen</a></li>
                        <li><a className='hoverable-link' href="/graphics">Graphics</a></li>
					</ul>
                </div>

                <a className='nav-link hoverable-link' href="/about">About</a>
                <a className='nav-link hoverable-link' href="/contact">Contact</a>
                <a className='twitter-icon hoverable-link' href="https://twitter.com/AvaSasani" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size='2x'/>
                </a>
            </div>
        </div>
    )
}

export default NavigationComponent;
