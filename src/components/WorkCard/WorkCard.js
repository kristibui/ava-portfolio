import '../../read/read.css';

const WorkCard = (content) => {

    return(
        <div className='article-sub-container'>
                    
        <div className='article-img-container'>
            <img className='article-img' src={content.imagePath} alt='Counterrorism program'/>
        </div>

        <h2>
            <a className='article-headline' href={content.articleLinkPath}>
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