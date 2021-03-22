import React, { useState } from 'react';


function Gallery() {

  return (
    <section>
        <div className="flex-row">
            <div className="project">
                <img
                src={require(`../../assets/projects/budget.jpg`).default}
                alt="budget-tracker"
                key="budget-tracker"
                />
                <a href="https://github.com/Azambik/budget-tracker" target="_blank" ><h3>Budget-tracker</h3></a>
                <p>Budget tracker is an app for tracking expenses on the go.</p>
            </div>
            <div className="project">
                <img
                src={require(`../../assets/projects/photo-hut.bmp`).default}
                alt="photo-hut"
                key="photo-hut"
                />
                <a href="https://github.com/Azambik/Photo-Hut" target="_blank" ><h3>photo hut</h3></a>
                <p>A platform for photographers to share their photo portfolio.</p>
            </div>
            <div className="project">
                <img
                src={require(`../../assets/projects/pizza-hunt.bmp`).default}
                alt="pizza-hunt"
                key="pizza-hunt"
                />
                <a href="https://github.com/Azambik/pizza-hunt" target="_blank" ><h3>pizza-hunt</h3></a>
                <p>Chatroom for pizza lovers.</p>
            </div>
            <div className="project">
                <img
                src={require(`../../assets/projects/zoo-keeper.bmp`).default}
                alt="zoo-keeper"
                key="zoo-keeper"
                />
                <a href="https://github.com/Azambik/zookeepr" target="_blank" ><h3>zoo-keeper</h3></a>
                <p>A website to keep track of zoo keepers and animals.</p>
            </div>
            <div className="project">
                <img
                src={require(`../../assets/projects/tech-blog.bmp`).default}
                alt="tech-blogr"
                key="tech-blog"
                />
                <a href="https://github.com/Azambik/tech-blog" target="_blank" ><h3>tech-blog</h3></a>
                <p>Blog for tech news.</p>
            </div>
            <div className="project">
                <img
                src={require(`../../assets/projects/movie.bmp`).default}
                alt="budget-tracker"
                key="budget-tracker"
                />
                <a href="https://github.com/nickmay9/MovieApp-TeamProject1" target="_blank" ><h3>movie watch list</h3></a>
                <p>movie watch list and search engine.</p>
            </div>
           
        </div>
    </section>
  );
}
export default Gallery;
