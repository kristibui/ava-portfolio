import './blurb.css';


const BlurbComponent = () => {

    return(
        <div className='blurb-container'>

            <div className='main-text-container'>
                <div className='main-desc'>
                    Ava Sasani is an audio and print journalist.
                </div>

                <div className='desc-subtext'>
                She covered national news for the <a className='about-link' rel='noreferrer' target='_blank' href='https://www.nytimes.com/by/ava-sasani'>New York Times</a> as a 2022-2023 fellow. Her work has also appeared in Vox, WSJ, and Teen Vogue.
                </div>

                
                <a href='/about'>
                    <button className='learn-more-btn'>Learn More</button>
                </a>
            </div>

        </div>
    )
}

export default BlurbComponent;
