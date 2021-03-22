import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About'
import background from './assets/main/main.jpg'
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'
function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  return (
    <div className="h-100" style={{ backgroundImage: `url(${background})` }}>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected = {resumeSelected}
      setResumeSelected={setResumeSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main className="maindiv">
      { contactSelected? (
              <>
                <ContactForm></ContactForm>
              </>
              ): portfolioSelected?( <>
                <Portfolio></Portfolio>
              </>
              ) : resumeSelected?( <>
                <Resume></Resume>
              </>
              ) : (
                <About></About>
              
      )}
    
     
      </main>
      <footer className="foot">
        <h4>Made by Andrew Zambik</h4>
        <div>
        <a href="https://www.linkedin.com/in/andrew-zambik-385a861b7/" target="_blank" className="fa fa-linkedin"></a>
        <a href="https://github.com/Azambik" target="_blank" className="fa fa-github"></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
