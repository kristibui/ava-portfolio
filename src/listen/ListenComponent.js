import './listen.css';
import otm_m from './otm_m.jpg';
import otm_cr from './otm_cr.jpg';
import nhpr_hs from './nhpr_hs.jpg';
import nhpr_b from './nhpr_b.jpg';
import nhpr_cvd from './nhpr_cvd.jpg';

const ListenComponent = () => {

    return(
        <div className='listen-container'>

            <h1>Listen</h1>

            <p>Some of my audio works below, including pieces from <a className='audio-headline' href='https://www.wnycstudios.org/podcasts/otm'>On The Media</a> and <a className='audio-headline' href='https://www.nhpr.org/'>New Hampshire Public Radio (NHPR)!</a></p>

            <div className='audio-container'>
                <div className='audio-sub-container'>

                    <div className='audio-img-container'>
                        <img className='audio-img' src={otm_m} />
                    </div>

                    <h2>
                        <a className='audio-headline' href='https://www.wnycstudios.org/podcasts/otm/segments/militia-terrorism-on-the-media?fbclid=IwAR0M5pe2p2WVoxa_BjdWX-omnFCqI1GHHORu9xoA3AAfeKGQcPUU3WtJbqI'>
                        When Does "Militia" Become "Domestic Terrorism"?
                        </a>
                    </h2>
                    <span>On The Media</span>

                    <p>The would-be kidnappers of Michigan Gov. Gretchen Whitmer were members of an armed extremist 
                        group called the "Wolverine Watchmen," which some in the press have called a "militia." 
                        According to Sam Jackson, a professor at the University of Albany who studies anti-government 
                        extremism, the modern version of "militia" has a new, useful meaning. In this segment, 
                        On the Media host Bob Garfield and Jackson debate the choice between "militia" and "terrorist."
                    </p>
                </div>


                <div className='audio-sub-container'>
                    <div className='audio-img-container'>
                        <img className='audio-img' src={otm_cr} />
                    </div>

                    <h2>
                        <a className='audio-headline' href='https://www.wnycstudios.org/podcasts/otm/episodes/trump-admins-war-critical-race-theory?fbclid=IwAR1fP_QnEFi4hVjp6nd0N6Dh8vITyQ38Sdf3Ypc_aegg-Bfbxzl1ol1-K5A'>
                        Trump's War on Critical Race Theory
                        </a>
                    </h2>
                    <span>On The Media</span>

                    <p>The Trump administration issued executive orders last month that ban federal workers from 
                        participating in anti-racism trainings.  In this podcast extra, Bob talks with Georgetown 
                        law professor Paul Butler about how the president is using executive authority to curate 
                        a culture of white ignorance. 
                    </p>
                </div>

                <div className='audio-sub-container'>
                    <div className='audio-img-container'>
                        <img className='audio-img' src={nhpr_hs} />
                    </div>

                    <h2>
                        <a className='audio-headline' href='https://www.nhpr.org/post/facing-remote-senior-year-nhs-high-school-students-face-tough-choices#stream/0'>
                        Facing A Remote Senior Year, N.H.'s High School Students Face Tough Choices
                        </a>
                    </h2>
                    <span>New Hampshire Public Radio (NHPR)</span>

                    <p>Many high school seniors faced a difficult choice this year Go back to school and risk bringing coronavirus into your home, or take online classes and potentially miss out on major parts of senior year.
                        <br/>I caught up with three students to find out how they’re approaching school this fall. 
                    </p>
                </div>

                <div className='audio-sub-container'>
                    <div className='audio-img-container'>
                        <img className='audio-img' src={nhpr_b} />
                    </div>

                    <h2>
                        <a className='audio-headline' href='https://www.nhpr.org/post/new-hampshire-students-share-what-its-be-black-and-brown-their-schools#stream/0'>
                        New Hampshire Students Share What It's Like to Be Black and Brown At Their Schools
                        </a>
                    </h2>
                    <span>New Hampshire Public Radio (NHPR)</span>

                    <p>
                    Since the death of George Floyd, Breonna Taylor and others, Black and Brown students across New England 
                    and the country have launched social media pages describing what it's like to be a person of color 
                    at a mostly white school. On the <a className='audio-headline' href='https://www.instagram.com/blackatnewhampton/?hl=en'>Black at New Hampton</a> Instagram account, 
                    students and alumni of color from the New Hampton School share their stories anonymously.
                    </p>
                </div>

                <div className='audio-sub-container'>
                    <div className='audio-img-container'>
                        <img className='audio-img' src={nhpr_cvd} />
                    </div>

                    <h2>
                        <a className='audio-headline' href='https://www.nhpr.org/post/dartmouth-study-rural-nh-prepared-strong-response-covid-19#stream/0'>
                        Dartmouth Study: Rural N.H. Prepared Strong Response to COVID-19
                        </a>
                    </h2>
                    <span>New Hampshire Public Radio (NHPR)</span>

                    <p>
                    When the coronavirus pandemic first hit New Hampshire, many public health leaders worried about the 
                    state’s rural communities. Some doctors warned that even a small number of cases could 
                    overwhelm the region’s hospitals. But a new report finds that rural areas of Vermont 
                    and New Hampshire handled the coronavirus outbreak better than expected. The authors of 
                    the report, Dartmouth College Professors Elizabeth Carpenter-Song and Anne Sosin, 
                    joined NHPR’s All Things Considered host Peter Biello to discuss some of the 
                    highlights of their study. 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ListenComponent;
