import React from "react";
import "./home.scss";

import HomeHero from "../../components/home-hero/home-hero";
import HomeProjects from "../../components/home-projects/home-projects";

// let options = {
//   root: null,
//   rootMargin: "600px 0px",
//   threshold: 1.0,
// };

function Home(props) {
  // let callback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.style.backgroundColor = "red";
  //     } else {
  //       entry.target.style.backgroundColor = "#ffffff";
  //     }
  //   });
  // };

  // let observer = new IntersectionObserver(callback, options);
  // useEffect(() => {
  //   const projects = document.querySelector(".home-projects");
  //   observer.observe(projects);
  // }, []);

  return (
    <div className="home">
      <HomeHero />
      <HomeProjects />
    </div>
  );
}

export default Home;
