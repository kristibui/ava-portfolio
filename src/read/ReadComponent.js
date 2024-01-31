import './read.css';
import bc from './bc_img.jpg';
import mr from './mr_img.jpg';
import mw from './mw_img.jpg';
import bg_deport from './bg_deport.jpeg';
import bg_aar from './bg_aar.jpeg';
import wgbh_mh from './wgbh_mh.jpeg';
import wgbh_ah from './wgbh_ah.jpeg';
import wsj_dw from './diversity_winners.jpeg';
import wsj_bb from './wsj_bb.jpeg';
import wsj_fj from './wsj_fj.jpeg';
import nyt_tenn from './nyt_tenn.jpeg';
import nyt_men from './nyt_men.jpeg';
import nyt_jum from './nyt_jum.jpeg';
import nyt_roe from './nyt_roe.jpeg';
import nyt_mus from './nyt_muslim.jpeg';
import nyt_ab from './nyt_ab.jpeg';
import tv_tt from './tt.png';
import nyt_st from './nyt_st.jpeg';
import nyt_aw from './nyt_aw.jpeg';
import nyt_doc from './nyt_doc.jpeg';
import visa_g from './visa_students.jpeg'
import ohio_g from './ohio_ab.jpeg'
import biden_g from './biden_g.jpeg'
import ron_g from './ron_g.jpeg'
import abortion_g from './abortion_g.jpeg'

import la_vox from './la_vox.jpeg'
import trans_gd from './trans_gd.jpeg'

import WorkCard from '../components/WorkCard/WorkCard';

const ReadComponent = () => {

    return(
        <div className='read-container'>

            <h1>Read</h1>

            <p>Some of my print clips below, including pieces 
                from <a className='article-headline' href='https://www.nytimes.com/by/ava-sasani'>The New York Times</a> and <a className='article-headline' href='https://www.wsj.com/news/author/ava-sasani'>The Wall Street Journal</a>.
            </p>
            <div className='articles-container'>

            <WorkCard 
                imagePath={la_vox}
                articleLinkPath='https://www.vox.com/climate/2023/11/1/23940322/lahaina-wild-fire-schools-toxic-waste-cleanup'
                headline="Lahaina schools are open again. Parents worry they’re ridden with toxic waste."
                publisher='Vox'
                body='Hawai‘i education officials want to return to normal. But some parents want more time to heal.' 
            />

            <WorkCard 
                imagePath={trans_gd}
                articleLinkPath='https://www.theguardian.com/us-news/2024/jan/30/ohio-ban-children-transgender-gender-affirming-care?CMP=share_btn_tw'
                headline="‘I’m so scared for my friends’: trans kids on Ohio’s ban on gender-affirming care"
                publisher='The Guardian'
                body='Families who fought for children’s healthcare rights say they are considering leaving the state' 
            />

            <WorkCard 
                imagePath={visa_g}
                articleLinkPath='https://www.theguardian.com/us-news/2023/aug/19/denying-visa-afghanistan-university-student'
                headline="‘My goals in life vanished’: Afghan students rocked by US visa denials"
                publisher='The Guardian'
                body='Students trying to attend university in the US tell of their frustration after being rejected over the ‘immigrant intent’ test' 
            />

            <WorkCard 
                imagePath={ohio_g}
                articleLinkPath='https://www.theguardian.com/us-news/2023/aug/09/ohio-issue-1-abortion-rights-win'
                headline="‘Ohio saw through the con’: abortion rights advocates celebrate Issue 1 result"
                publisher='The Guardian'
                body='While anti-abortion activists vow to ‘continue the fight’, supporters of abortion retain hope for November election' 
            />

            <WorkCard 
                imagePath={biden_g}
                articleLinkPath='https://www.theguardian.com/us-news/2023/aug/07/biden-administration-lawsuit-cbp-one-app'
                headline="Biden administration sued over asylum appointment app that ‘does not work’"
                publisher='The Guardian'
                body='CBP One requirement creates unlawful hurdle for migrants on app riddled with glitches and indecipherable error messages, suit says' 
            />

            <WorkCard 
                imagePath={ron_g}
                articleLinkPath='https://www.theguardian.com/us-news/2023/jul/28/ron-desantis-sued-voting-rights-group'
                headline="Ron DeSantis sued over bid to restrict voting rights for people with past convictions"
                publisher='The Guardian'
                body='Florida Rights Restoration Coalition says governor has caused confusion and fear despite amendment that lifted lifetime ban' 
            />

            <WorkCard 
                imagePath={abortion_g}
                articleLinkPath='https://www.theguardian.com/us-news/2023/jul/13/anti-abortion-language-restrictions-bans-roe-v-wade'
                headline="Confuse and mislead: US anti-abortion groups’ strategy to soften extreme bans"
                publisher='The Guardian'
                body='Critics decry ‘vague language and misinformation’ as Susan B Anthony claims US does not have true ‘bans’ since exceptions exist' 
            />

            <WorkCard 
                imagePath={nyt_aw}
                articleLinkPath='https://www.nytimes.com/2023/05/29/us/afghan-war-refugees.html?unlocked_article_code=FxW9xTwHLKT2PefBYol3bwvTfzmPHCBbTB_AJBJDFD3zKoo_0j7zUdqPgSj8WUAonDFrglo5vXgYF9p543x6ekQdXqKlQ4B5cEzca89n0oEk5_rQKMx8CCNkRZER1OBU3gMqV_MH3-no4qGIRlpD3xCZ_VaqnpCsQdUDr4IogMLDgsZyynBi3I5jsHSaBqjgawg4-S4EAtAk98RHziA4ohVxACKq-jYgTvBv2XM0w7biY_KAx9x1Q5-rBuhmeebF-u2Rl4HOdf6WnckrhUlt0qnvHUpxAop9nB1Ygh4CDbs-FS63GkWLXI8w8JcwNMZH4jk8KaNYZhN_&smid=url-share'
                headline='Afghan Women Who Aided U.S. Military Wait for Asylum in America'
                publisher='The New York Times'
                body='Members of the Afghan Army’s all-female platoon are some of the roughly 70,000 Afghans living in the United States whose temporary status has left them with an uncertain future.' 
            />

            <WorkCard 
                imagePath={nyt_doc}
                articleLinkPath='https://www.nytimes.com/2023/05/26/us/indiana-doctor-abortion-reprimand.html?unlocked_article_code=fOt6JJD8ta1kP4b98AxZBb06ZJZgeo0276EU1UyOglk53bNYRl1rFYxkdrf6z9fZChGGMIoWUHYiWxqoDPtXBASw3PkhWxrR0RZVAc2IQx3jEZH0kHdM7cE4dCKMUWuCKn9W4bcQbQ1ao6D5qwtcZSInEGnQjlPdrCRrFiE2z8fXXfwuKA5_Aw8-ydJSJgZntWsgR_bdpTUCcnan3J4EXjRMyTUkVDO2mVsYn6JIILfbXTHmMMI2i0J6umk_TVbi6LzL4k-4-aRju312T1nCBzoy1K3x3PaXXB4OasLhTRB04sMtH001Pr1TqBO-z4B6kvMnSH8j2WzAGVHxJ5hBwz77Y0Q7Q54&smid=url-share'
                headline='Indiana Reprimands Doctor Who Provided Abortion to 10-Year-Old Rape Victim'
                publisher='The New York Times'
                body='Dr. Caitlin Bernard violated the privacy of her young patient by discussing the girl’s case with a reporter, the state’s medical board ruled' 
            />

            <WorkCard 
                imagePath={nyt_st}
                articleLinkPath='https://www.nytimes.com/2023/05/16/business/strippers-union-labor.html?unlocked_article_code=oTU9MspW3NpiP_v2al71D7G_eSJAxEcyjCiGazcxgL7RFPdKTU1SV3Hzl-rpzpbdljuP1sO3XKyGx6zC6AfofXDdBmV1B--WO1eG1AANDpMUDTCrDowUKFSHyDHiPbiCkLM4U5uhF179CY1-S0BqfXFW3gRSjU9_AKG2c2sM-xB6FMneFKXkIrk7_mq4AwyU_XNE7i6JgT4eZNWE3T8U6obyc_pEg6v5UblAOYprFsfH-aUS1hXhd7x-6SFDqXa2sczHMrAHh7DrK50AlZz-sSVRHZQBtDUjdT7YbwO70nPX0OttwKL9gq6wMQHGG04mOro7--6FL044Iou6xKZRLts&smid=url-share'
                headline='Strippers Unionize at California Club After Long Fight'
                publisher='The New York Times'
                body='The club agreed not to block the dancers from affiliating with Actors’ Equity in what appears to be the industry’s first unionization since the 1990s.' 
            />

            <WorkCard 
                imagePath={tv_tt}
                articleLinkPath='https://www.teenvogue.com/story/adoption-tiktok-community'
                headline='Adoption TikTok: Building Community and Critiquing the U.S. Adoption System'
                publisher='Teen Vogue'
                body='Adoptees are told to just be grateful that we were chosen. And yet so many of us are struggling.' 
            />

            <WorkCard 
                imagePath={nyt_tenn}
                articleLinkPath='https://www.nytimes.com/2023/03/24/us/tennessee-hiv-funding.html'
                headline='Tennessee’s Rejection of $8.8 Million in Federal Funding Alarms H.I.V. Prevention Groups'
                publisher='The New York Times'
                body='The state plans to use state funds, which a spokeswoman for Gov. Bill Lee said would be more efficient than receiving federal dollars. Some organizations are concerned they will be cut off if they don’t align with his conservative politics.' 
            />

            <WorkCard 
                imagePath={nyt_men}
                articleLinkPath='https://www.nytimes.com/2023/03/02/us/tyre-memphis-photos.html?unlocked_article_code=1.Rk0.JDc7.RctMYt-FGxmq&bgrp=c&smid=url-share'
                headline='Memphis, Through the Lens of Tyre Nichols'
                publisher='The New York Times'
                body='His photos, which he wrote were meant to “bring my viewers deep into what I am seeing,” reveal parts of the city some residents say they had forgotten.'
                />

            <WorkCard 
                imagePath={nyt_jum}
                articleLinkPath='https://www.nytimes.com/2022/11/30/us/abortion-clinic-illinois.html'
                headline='When the Abortion Clinic Came to Town'
                publisher='The New York Times'
                body='After Roe fell, a sleepy college town in Southern Illinois found itself to be a crucial destination for abortion access. Not all of its residents are happy about it.'
                />

            <WorkCard 
                imagePath={nyt_roe}
                articleLinkPath='https://www.nytimes.com/2022/08/19/us/politics/louisiana-abortion-law.html'
                headline='I’m Carrying This Baby Just to Bury It’: The Struggle to Decode Abortion Laws'
                publisher='The New York Times'
                body='At a Louisiana hospital, concerns about complying with new abortion bans in post-Roe America left a pregnant woman with a devastating diagnosis, but not an abortion.'
                />            

            <WorkCard 
                imagePath={nyt_mus}
                articleLinkPath='https://www.nytimes.com/2022/08/15/us/albuquerque-muslim-killings.html'
                headline='Muslim Killings in Albuquerque Stir Sectarian Ghosts'
                publisher='The New York Times'
                body='An Afghan family struggled for a foothold in a new home in the U.S. Now one of them is charged with killing fellow Muslims.'
                />  

            <WorkCard 
                imagePath={nyt_ab}
                articleLinkPath='https://www.nytimes.com/2022/07/16/us/abortion-bans-children.html'
                headline='What New Abortion Bans Mean for the Youngest Patients'
                publisher='The New York Times'
                body='One 10-year-old became the focus of debate, but more than 1,000 girls under 15 seek abortions each year. “How are we going to help the pregnant kids?”'
                />  

            <div className='article-sub-container'>

                <div className='article-img-container'>
                    <img className='article-img' src={wsj_fj} alt='federal judges unlawful'/>
                </div>

                <h2>
                    <a className='article-headline' href='https://www.wsj.com/articles/hidden-interest-judges-financial-conflicts-graphic-11632834079'>
                    Hidden Interests: The Financial Conflicts, Mapped
                    </a>
                </h2>
                <span>The Wall Street Journal</span>

                <p>The Wall Street Journal analyzed nearly a decade’s worth of legal and financial records and discovered 131 federal judges who unlawfully heard cases where they had a financial interest. See the Journal’s findings, including which federal judges violated the law, how many times they improperly heard cases, and what they have to say about it.
                </p>
                </div>

            <div className='article-sub-container'>

                <div className='article-img-container'>
                    <img className='article-img' src={wsj_bb} alt='afghanistans falling man'/>
                </div>

                <h2>
                    <a className='article-headline' href='https://www.wsj.com/articles/afghanistans-falling-man-the-17-year-old-soccer-star-who-plunged-from-a-u-s-military-jet-11629834591'>
                    Afghanistan’s Falling Man: The 17-Year-Old Soccer Star Who Plunged From a U.S. Military Jet
                    </a>
                </h2>
                <span>The Wall Street Journal</span>

                <p>Zaki Anwari, part of a generation who never endured Taliban rule, saw no future in Afghanistan. Viral images of his death horrified the world. This is his story, reconstructed from interviews with friends, family and bystanders.
                </p>
                </div>

                <div className='article-sub-container'>

                    <div className='article-img-container'>
                        <img className='article-img' src={wsj_dw} alt='diversity visa winners'/>
                    </div>

                    <h2>
                        <a className='article-headline' href='https://www.wsj.com/articles/diversity-visa-winners-risk-losing-chance-to-come-to-u-s-11628946002'>
                        Diversity Visa Winners Risk Losing Chance to Come to U.S.
                        </a>
                    </h2>
                    <span>The Wall Street Journal</span>

                    <p>Tens of thousands of families around the world are at risk of losing a rare opportunity to immigrate to the United States because of a pandemic-fueled backlog.
                    </p>
                </div>



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
