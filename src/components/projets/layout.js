
'use client'

import Layout from '../page-layout';
import Aside from './aside';
import Content from './content';
import Banner from './banner';
import { motion } from 'framer-motion';
import { AnimatePresence } from "framer-motion";
import { isEmptyRect } from '../../store/bannerRect';


export default function ProjectLayout({data})
{
    const animeConfig = {
        initiaL:{opacity:0},
        animate:{opacity:1},
        transition:{delay: 1.4}
    }

    return(
        <Layout title="Mes projets" description="Ma superbe description" >
            <AnimatePresence mode="wait">
                <div className="section section-page">
                    <Banner thumb={data.thumb} />
                    <motion.div {...(!isEmptyRect() ? animeConfig : "")}
                        className="section-page-content border border-top">
                        <div className="container section-page-content-grid">
                            <Content content={data.content} />
                            <Aside content={data.infos} categories={data.categories} />
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </Layout>
    )
}