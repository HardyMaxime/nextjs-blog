import { motion } from 'framer-motion';
import { useBannerRect, isEmptyRect } from '../../store/bannerRect';
import {useRef, useEffect} from 'react';
import { sleep } from '../../helpers';

const transition = {duration: 1.4, ease: [.6, 0.01, -0.05, 0.9]};

export default function Banner({thumb})
{
    const { rect } = useBannerRect();
    const refBanner = useRef(null);

    useEffect(() => {
        const banner = refBanner.current;
        if(!isEmptyRect())
        {
            sleep(function() {
                document.body.classList.remove('overlaps-index');
                banner.classList.remove('active');
            }, 1500);
        }
    }, []);

    let figureConfig = {
        initial:{width:rect.width, height:rect.height, y: rect.y, x:rect.x},
        animate:{
            left:'0%',
            y:90,
            x:0,
            width:'100%', 
            height:450,
            transition:{delay:.3, ...transition}
        }
    }

    let imageConfig =
    {
        initial:{scale:1.1},
        animate:{
            scale: 1,
            transition: {delay:.4, ease: [0.6, 0.01, -0.05, 0.9]}
        }
    }

    return (
        <div className={"page-banner-wrapper" + (!isEmptyRect() ? " play" : " pause")}>
            <motion.div
                ref={refBanner}
                {...(!isEmptyRect() ? figureConfig : "")}
                className={"page-banner" + (!isEmptyRect() ? " active" : "")}>
                <motion.img
                    {...(!isEmptyRect() ? imageConfig : "")}
                    className='page-banner-image '
                    src={thumb.url}
                    width={thumb.width} height={thumb.height} alt={thumb.alt} loading="lazy" />
            </motion.div>
        </div>
    );
}