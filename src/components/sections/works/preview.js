'use client'

import Link from 'next/link';
import RevealWrapper from '../../animation/reveal-wrapper';
import {useRef, useEffect} from 'react';
import { useBannerRect } from '../../../store/bannerRect';
import { sleep, getBaseURL } from '../../../helpers';


function previewActive (e) {
    e.target.classList.add('active');
    document.body.classList.add('hover-preview', 'overlaps-index');
}

function previewRemoveActive (e) {
    // Vérifie si aucun élément .work-item n'a la classe 'active' avant de la retirer de document.body
    const preview = e.target;
    document.body.classList.remove('hover-preview');
    sleep(() => {
        document.body.classList.remove('overlaps-index');
        preview.classList.remove('active');
    }, 400);
}

export default function Preview({src, alt, url})
{
    const { setRect } = useBannerRect();
    const ref = useRef(null);
 
    useEffect(() => {
        const element = ref.current;
        element.addEventListener('mouseenter', previewActive);
        element.addEventListener('mouseleave', previewRemoveActive);

        return () => {
            element.removeEventListener('mouseenter', previewActive);
            element.removeEventListener('mouseleave', previewRemoveActive);
        };
    }, []);

    return(
        <Link ref={ref} href={getBaseURL(location.href)+"mes-projets/"+url} className="work-item" onClick={(e) => setRect(e.target.parentNode.getBoundingClientRect())}>
            <RevealWrapper className='reveal-wrapper' >
                <div className="reveal-preview">
                    <figure className="work-item-preview" >
                        <img className='work-item-preview-image' src={src} width="" height="" alt={alt} loading="lazy" />
                    </figure>
                </div>
            </RevealWrapper>
        </Link>
    );
}