import './blurb.css';
import headshot from './ava_headshot.jpg';

const BlurbComponent = () => {

    return(
        <div className='blurb-container'>

            <div className='main-text-container'>
                <div className='main-desc'>
                    Ava Sasani is an audio and print journalist.
                </div>

                <div className='desc-subtext'>
                She covered national news for the <a className='about-link' target='_blank' href='https://www.nytimes.com/'>New York Times</a> as a 2022-2023 fellow, and is always looking for new reporting opportunities.
                </div>

                
                <a href='/about'>
                    <button className='learn-more-btn'>Learn More</button>
                </a>
            </div>

            <div className='bio-container'>
                <div className='bio-picture'>
                    <img className='ava-pic'
                        src={headshot}
                        alt='Ava in the snow'></img>
                </div>
            </div>



        </div>
    )
}

export default BlurbComponent;
