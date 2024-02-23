import RevealTitle from "./animation/reveal-title";

export default function Footer() {
  return (
    <footer className="footer section section-secondary border border-top" >
        <div className="footer-content container">
            <hgroup className="heading">
                <RevealTitle className="footer-title extra-heading" >
                    Me contacter
                </RevealTitle>
                <p className="heading-description" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque cursus nisi vel semper. Pellentesque ut massa sapien. Maecenas aliquet et erat ut tincidunt. 
                </p>
                <a href="#" className="external-link margin-top margin-right">
                    Mail
                </a>
                <a href="#" className="external-link margin-top margin">
                    Linkedin
                </a>
            </hgroup>
        </div>
        <nav className="footer-navigation border border-top">
            <ul className="reset-list container" >
                <li>
                    <a href="#">Copyright</a>
                </li>
                <li>
                    <a href="#">Mentions Légales</a>
                </li>
            </ul>
        </nav>
    </footer>
  );
}