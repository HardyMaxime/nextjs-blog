import ProjectDetail from './project-details-item';
import { motion } from 'framer-motion';
import { isEmptyRect } from '../../store/bannerRect';
import { decodeEntities } from "@/helpers";

export default function Aside({content})
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
                <ProjectDetail title="Service">
                    <span dangerouslySetInnerHTML={{ __html: content.service }} />
                </ProjectDetail>
            </ul>
        </motion.div>
    );
}