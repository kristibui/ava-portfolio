import './read.css';
import bc from './bc_img.jpg';
import mr from './mr_img.jpg';
import mw from './mw_img.jpg';
import bg_deport from './bg_deport.jpeg';
import bg_aar from './bg_aar.jpeg';
import wgbh_mh from './wgbh_mh.jpeg';
import wgbh_ah from './wgbh_ah.jpeg';

const ReadComponent = () => {

    return(
        <div className='read-container'>

            <h1>Read</h1>

            <p>Some of my written works below, including pieces from the <a className='article-headline' href='https://www.bostonglobe.com/'>Boston Globe</a> and <a className='article-headline' href='https://www.wbur.org/'>WBUR</a>.</p>
            
            <div className='articles-container'>

                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={wgbh_ah} alt='asian hate rally'/>
                    </div>


                    <h2>
                        <a className='article-headline' href='https://www.wgbh.org/news/local-news/2021/04/11/boston-protesters-rally-to-stop-asian-hate-after-recent-violent-attacks'>
                        Boston-Area Protesters Rally All Weekend To Stop Asian Hate After Recent Violent Attacks
                        </a>
                    </h2>
                    <span>WGBH</span>

                    <p>Local AAPI activists organized a weekend of demonstrations to call on the 
                        Massachusetts government to incorporate Asian history and culture 
                        into public school curriculums. 
                    </p>
                </div>

                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={wgbh_mh} alt='migrant health policy'/>
                    </div>


                    <h2>
                        <a className='article-headline' href='https://www.wgbh.org/news/local-news/2021/03/27/biden-pressured-to-reverse-trump-policy-using-health-concerns-to-expel-migrants'>
                        Biden Pressured To Reverse Trump Policy Using Health Concerns To Expel Migrants
                        </a>
                    </h2>
                    <span>WGBH</span>

                    <p>The ACLU of Massachusetts filed a suit in federal district court over the expulsion 
                        of seven asylum seekers, four of whom are children. The suit comes amidst outcry 
                        over President Biden’s continuation of Trump-era policy that turns away migrants 
                        under the guise of public health concerns. 
                    </p>
                </div>

                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={bg_aar} alt='anti asian hate rally'/>
                    </div>


                    <h2>
                        <a className='article-headline' href='https://www.bostonglobe.com/2021/03/27/metro/rally-along-marathon-route-denounces-racism-against-asians/'>
                        Rally along marathon route denounces anti-Asian hate
                        </a>
                    </h2>
                    <span>Boston Globe</span>

                    <p>In the wake of the Atlanta shootings, AAPI groups across Massachusetts gathered along the 
                        Boston Marathon route to mourn the violence that their community has endured, and 
                        demand action to end anti-Asian racism.
                    </p>
                </div>

                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={bg_deport} alt='college deportation'/>
                    </div>


                    <h2>
                        <a className='article-headline' href='https://www.bostonglobe.com/2021/01/18/metro/they-were-accepted-american-colleges-followed-rules-get-student-visas-then-they-were-deported/'>
                        ‘I did everything right.’ Despite following the rules, these students got deported
                        </a>
                    </h2>
                    <span>Boston Globe</span>

                    <p>Iranian students en route to Harvard and other schools never made it out of the airport.</p>
                </div>

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
