import { motion } from 'framer-motion';
import { isEmptyRect } from '../../store/bannerRect';
import { decodeEntities } from "@/helpers";

export default function Content({content})
{
    const delay = (!isEmptyRect() ? {delay:1.6} : {delay: .2})
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={delay} className="section-page-content-body">
            <hgroup className="heading" >
                <h1 className="heading-main-title" >
                    <span dangerouslySetInnerHTML={{ __html: content.title }} />
                </h1>
                <div className="heading-description" >
                    <span dangerouslySetInnerHTML={{ __html: content.description }} />
                </div>
                {content.link &&
                    <a href={content.link} target='_blank' rel='nooponer external' className="external-link margin-top" >Voir le site</a>
                }
            </hgroup>
        </motion.div>
    );
}