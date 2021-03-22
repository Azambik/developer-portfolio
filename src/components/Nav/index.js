//importing react to the nave bar component
import React, { useEffect } from 'react';
import background from '../../assets/header/header.jpg'

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        portfolioSelected,
        setPortfolioSelected
      } = props;
    return (
        <header className="flex-row px-1" style={{ backgroundImage: `url(${background})` }}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>   
            <h2>
                <a data-testid="link" href="/">
                    Andrew John Zambik
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => { setContactSelected(false); setResumeSelected(false);setPortfolioSelected(false);}}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => { setPortfolioSelected(true); setContactSelected(false); setResumeSelected(false);}}>Portfolio</span>
          </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => { setContactSelected(true); setResumeSelected(false); setPortfolioSelected(false);}}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => { setResumeSelected(true); setContactSelected(false); setPortfolioSelected(false);}}>Resume</span>
          </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;