import React from 'react';
import resume from '../../assets/resume/resume.txt'
function Resume() {
  return (

    <section className="my-5">
        <div > 
      <h1 id="about">Andrew Zambik</h1>
      <h2>8730 Ribbault Ave, Orlando, FL, 32832</h2>
      <ul>
          <h3>
              skills
          </h3>
          <li>
              HTML/CSS
          </li>
          <li>
              JavaScript
          </li>
          <li>
              Node.js
          </li>
          <li>
              Express.js
          </li>
          <li>
              SQL
          </li>
          <li>
              MongDB
          </li>
          <li>
              React
          </li>
      </ul>
      </div>
      <div>
      <a href={resume} download="Andrew-Zambik-resume">download</a>
      </div>
    </section>

  );
}

export default Resume;
