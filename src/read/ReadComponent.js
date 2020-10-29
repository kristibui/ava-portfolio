import './read.css';
import bc from './bc_img.jpg';
import mr from './mr_img.jpg';
import mw from './mw_img.jpg';

const ReadComponent = () => {

    return(
        <div className='read-container'>

            <h1>Read</h1>

            <p>Some of my written works below, including pieces from <a className='article-headline' href='https://www.wbur.org/'>WBUR</a> and <a className='article-headline' href='https://www.muckrock.com/'>Muckrock!</a></p>

            <div className='articles-container'>

                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={mw} alt='Mayor Marty Walsh'/>
                    </div>

                    
                    <h2>
                        <a className='article-headline' href='https://www.wbur.org/artery/2020/08/26/katherine-taylor-boston-copying-pandemic-photo-series'>
                        Boston Artist Accuses City Of Copying Her Pandemic Photo Series
                        </a>
                    </h2>
                    <span>WBUR</span>

                    <p>A Boston artist who photographed Mayor Marty Walsh for a series documenting Massachusetts 
                        residents wearing masks says that the city stole her idea for their own photo campaign.
                    </p>
                </div>
                
                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={bc} alt='Birth control'/>
                    </div>

                    

                     <h2>
                        <a className='article-headline' href='https://www.wbur.org/commonhealth/2019/08/22/monthly-birth-control-pill-lyndra-gates'>
                            Birth Control Pill Of The Future May Only Need To Be Taken Once A Month
                        </a>
                    </h2>
                    
                    <span>WBUR</span>

                    <p>Boston-based biotech firm is developing an experimental birth control pill that would open 
                        in the stomach like a flower, slowly releasing hormones over the course of a month.
                    </p>
                </div>

                <div className='article-sub-container'>
                    
                    <div className='article-img-container'>
                        <img className='article-img' src={mr} alt='Counterrorism program'/>
                    </div>

                    <h2>
                        <a className='article-headline' href='https://www.muckrock.com/news/archives/2019/sep/17/cve-ma-story/'>
                            Kamala Harris and Pete Buttigieg support an Obama-era counterrorism program, 
                            but the program’s effectiveness remains unproven.
                        </a>
                    </h2>
                    <span>Muckrock</span>

                    <p>Presidential contenders have pledged to expand homeland security funding, 
                        but existing evaluations leave questions about their effectiveness.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ReadComponent;
