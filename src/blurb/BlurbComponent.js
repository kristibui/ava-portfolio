import './blurb.css';
import headshot from './ava_headshot.jpg';

const BlurbComponent = () => {

    return(
        <div className='blurb-container'>

            <div className='main-text-container'>
                <div className='main-desc'>
                    Ava Sasani is a journalist specializing in audio storytelling.
                </div>

                <div className='desc-subtext'>
                    She is passionate about investigative and audio journalism, and is always looking to tell the real 
                    stories of marginalized and underrepresented communities.
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
