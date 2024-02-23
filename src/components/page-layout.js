'use client'

import Topbar from './topbar';
import Footer from './footer';
import { Fragment } from 'react';

export default function Layout({children}) {
    return (
        <Fragment>
            <Topbar />
                <main className="main" role='main'>
                    {children}
                </main>
            <Footer />
        </Fragment>
    );
}
