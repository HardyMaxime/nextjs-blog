import Link from 'next/link'
import { useState } from 'react';

export default function Topbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className={'header' + (open ? " open-topbar" : "")}>
            <nav className="topbar border border-bottom">
                <div className="topbar-content container-fluid">
                    <Link href="/" className="topbar-logo">
                        MAXIME
                    </Link>
                    <ul className="topbar-navigation reset-list">
                        <li>
                            <Link href="/">
                                home
                            </Link>
                        </li>
                        <li>
                            <Link href="/mes-projets">
                                works
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="topbar-button-wrapper border border-left" onClick={()=> setOpen(!open)}>
                    <div className="topbar-button">
                        <div className="topbar-button-line"></div>
                    </div>
                </button>
            </nav>
        </header>
    );
}
