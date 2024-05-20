import ProjectDetail from './project-details-item';
import { motion } from 'framer-motion';
import { isEmptyRect } from '../../store/bannerRect';
import { getBaseURL } from '../../helpers';
import Link from 'next/link';

export default function Aside({content, categories})
{
    const delay = (!isEmptyRect() ? {delay:1.8} : {delay: .2})

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={delay} className="section-page-content-aside">
            <ul className="reset-list projets-details">
                <ProjectDetail title="Client">
                    <span dangerouslySetInnerHTML={{ __html: content.client }} />
                </ProjectDetail>
                <ProjectDetail title="Date">
                    <span dangerouslySetInnerHTML={{ __html: content.date }} />
                </ProjectDetail>
                {
                    categories &&
                    <ProjectDetail title="Infos. Complémentaires">
                        {
                            Object.keys(categories).map(function(key) {
                                return (<Link key={key} href={getBaseURL(location.href)+"mes-projets/categorie/"+categories[key].slug} className='projets-details-link' >
                                    <span dangerouslySetInnerHTML={{ __html: categories[key].name }} />
                                </Link>)
                            })
                        }
                    </ProjectDetail>
                }
            </ul>
        </motion.div>
    );
}