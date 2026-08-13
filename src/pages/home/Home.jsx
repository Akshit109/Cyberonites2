import React from "react";
import "./Home.css";

import Navbar from "../../components/navbar/navbar";
import CyberonitesHero from "../../components/hero/CyberonitesHero";
import Alumini from "../../components/Alumini/Alumni";
import Sponsor from "../../components/Sponsers/Sponser";
import KnowUs from "../../components/knowUs/KnowUs";

import DashCard_Event from "../../components/Eventcards/DashCard_Event";
import InternalEventsCard from "../../components/Eventcards/InternalEventsCard";

import Grand from "../../components/Eventcards/Grand";

import TeamCard from "../../components/Teamcard/TeamCard";
import ConnecttUs from "../../components/connect/ConnectUs";


import GridBackground from "../../components/background/GridBackground";


// ==========================================================
// SMOOTH SCROLL
// ==========================================================

const ScrollElement = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


// ==========================================================
// HOME
// ==========================================================

const Home = () => {
  return (
    <GridBackground>
      <main>
        <section id="Home">
          <CyberonitesHero />
        </section>
        <Alumini heading="Our Alumni" />
        <Sponsor heading="Our Sponsors" />
        <section id="About">
          <KnowUs />
        </section>
        <section className="home-feature-grid">
          <DashCard_Event />
          <InternalEventsCard />
        </section>
        <section id="Events">
          <Grand />
        </section>
        <TeamCard />
        <ConnecttUs />

      </main>


    </GridBackground>
  );
};

export default Home;