import './graphics.css';
import rm from './imgs/republican_men.png';
import ab from './imgs/abortion_nyt.png';
import wsj from './imgs/wsj.png';

import WorkCard from '../components/WorkCard/WorkCard';

const GraphicsComponent = () => {
    
    return(
        <div className='read-container'>

        <h1>Graphics</h1>

        <p>Some of my data visualization journalism below, including pieces 
            from the <a className='article-headline' target='_blank' href='https://www.nytimes.com/by/ava-sasani'>The New York Times</a> and <a className='article-headline' href='https://www.wsj.com/news/author/ava-sasani'>The Wall Street Journal</a>.
        </p>
        <div className='articles-container'>


        <WorkCard 
            imagePath={rm}
            articleLinkPath='https://www.theguardian.com/us-news/ng-interactive/2023/jun/22/abortion-ban-politicians-who-voted-for-restrictions-who-are-they-men-women'
            headline='These 1,572 US politicians have helped ban abortion since Roe fell. They’re mostly men'
            publisher='The Guardian'
            body='These are the faces of lawmakers and governors whose votes helped pass bans on abortion.' 
        />

        <WorkCard 
            imagePath={ab}
            articleLinkPath='https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html'
            headline='Tracking the States Where Abortion Is Now Banned'
            publisher='The New York Times'
            body='The New York Times is tracking abortion laws in each state after the Supreme Court’s decision in Dobbs v. Jackson Women’s Health Organization, which ended the constitutional right to an abortion.' 
        />

        <WorkCard 
            imagePath={wsj}
            articleLinkPath='https://www.wsj.com/articles/hidden-interest-judges-financial-conflicts-graphic-11632834079'
            headline='Hidden Interests: Federal Judges with Financial Conflicts '
            publisher='The Wall Street Journal'
            body='The Wall Street Journal analyzed nearly a decade’s worth of legal and financial records and discovered 131 federal judges who unlawfully heard cases where they had a financial interest.' 
        />
        </div>
    </div>
    )
}

export default GraphicsComponent;
