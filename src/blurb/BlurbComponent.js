import './blurb.css';

const BlurbComponent = () => {

    return(
        <div className='blurb-container'>

            <div className='bio-container'>
                <div className='bio-picture'>
                    <img className='ava-pic'
                        src="https://images-na.ssl-images-amazon.com/images/I/41ptrygt2HL._AC_SY879_.jpg"
                        alt='Main photo of Ava.'></img>
                </div>
            </div>

            <div className='main-text-container'>
                <div className='main-desc'>
                    Ava Sasani :~) is a Boston-based journalist. She also happens to be a hamster! And I think 
                    that's kind of beautiful. XOXO, Gossip girl.
                </div>

                <div className='desc-subtext'>
                    Being a hamster is sort of cool, like running on a wheel and making peace signs 
                    REALLY gets me going. But sometimes I would rather do write and do journalism stuff, ya know?
                </div>

                
                <a href=''>
                    <button className='learn-more-btn'>Learn More</button>
                </a>
            </div>

        </div>
    )
}

export default BlurbComponent;
