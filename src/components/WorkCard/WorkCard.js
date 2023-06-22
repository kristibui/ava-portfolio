import '../../read/read.css';

const WorkCard = (content) => {

    return(
        <div className='article-sub-container'>
                    
        <div className='article-img-container'>
            <img className='article-img' src={content.imagePath} alt='content image'/>
        </div>

        <h2>
            <a className='article-headline' rel='noreferrer' target='_blank' href={content.articleLinkPath}>
                {content.headline}
            </a>
        </h2>
        <span>{content.publisher}</span>

        <p>
            {content.body}
        </p>
    </div>
    );
};

export default WorkCard;