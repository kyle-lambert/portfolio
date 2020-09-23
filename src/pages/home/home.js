import React, { useState } from "react";
import "./home.scss";

// import Header from "../../components/header/header";
// import Navigation from "../../components/navigation/navigation";
import PageTag from "../../components/page-tag/page-tag";
import MenuToggle from "../../components/menu-toggle/menu-toggle";
import HomeHero from "../../components/home-hero/home-hero";

function Home(props) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div className="home">
      {/* <Header handleToggle={handleToggle} open={open} /> */}
      {/* <Navigation open={open} /> */}

      <PageTag text="Kyle Lambert" />
      <MenuToggle />
      <HomeHero />
    </div>
  );
}

export default Home;
