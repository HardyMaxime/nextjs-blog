'use client';

import { useInView } from 'framer-motion';
import {useRef, useEffect} from 'react';

export default function RevealWrapper({children, className = ""})
{
    const refReveal = useRef(null);
    const isInView = useInView(refReveal, { once: true});
    useEffect(() => {
        if(isInView && refReveal.current.classList.contains('reveal')) refReveal.current.classList.remove('reveal');
    }, [isInView]);
 
    return (
        <div ref={refReveal} className={'reveal ' + className} >
            {children}
        </div>
    );
}