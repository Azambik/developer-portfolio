import React from 'react';

function About() {
  return (
    
    <section className="my-5">
      <img
                src={require(`../../assets/about/me.jpg`).default}
                alt="Andrew Zambik"
                key="Andrew Zambik"
                />
        <div > 
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <p>
          I am an aspiring web develop living in orlando Florida. I am currently working my way though the UFC coding boot camp. Some of my hobbies include
          3d printing, video games, hiking, biking, tennis and tending to my cat and cockatiel. 
        </p>
      </div>
      </div>
    </section>

  );
}

export default About;
