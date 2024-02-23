'use client';

import { useInView } from 'framer-motion';
import {useRef, useEffect} from 'react';

export default function RevealTitle({children, className = ""})
{
    const refReveal = useRef(null);
    const isInView = useInView(refReveal, { once: true});
    useEffect(() => {
        if(isInView && refReveal.current.classList.contains('reveal')) refReveal.current.classList.remove('reveal');
    }, [isInView]);
 
    return (
        <div ref={refReveal} className='reveal' >
            <h2 className={'heading-h2 reveal-title ' + className} >
                <span className="heading-reveal-text reveal-8">
                    {children}
                </span>
            </h2>
        </div>
    );
}