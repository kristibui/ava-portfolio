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

                <span className='nav-link portfolio-nav'>Portfolio</span>
                    <ul>
						<li><a href="/read">Read</a></li>
						<li><a href="/listen">Listen</a></li>
					</ul>
                </div>




                <a className='nav-link' href="/about">About</a>
                <a className='nav-link' href="/contact">Contact</a>

                <a className='twitter-icon' href="https://twitter.com/AvaSasani">
                    <FontAwesomeIcon icon={faTwitter} size='2x'/>
                </a>
            </div>
        </div>
    )
}

export default NavigationComponent;
