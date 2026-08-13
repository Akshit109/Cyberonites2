import React, { useState } from "react";
import "./KnowUs.css";

const KnowUs = () => {
  const [active, setActive] = useState("01");

  const sections = [
    {
      number: "01",
      title: "MISSION",
      text: "Fostering a community of passionate technology enthusiasts dedicated to exploring and advancing cybersecurity.",
    },
    {
      number: "02",
      title: "WHO WE ARE",
      text: "A student-driven cybersecurity community bringing together learners, developers, ethical hackers, researchers, and technology enthusiasts.",
    },
    {
      number: "03",
      title: "OUR STORY",
      text: "Since 2016, Cyberonites has grown into an active technical community organizing workshops, CTF competitions, hackathons, seminars, and industry interactions.",
    },
    {
      number: "04",
      title: "CYBERONITES AT GLA",
      text: "Based at GLA University, Cyberonites Club provides students with a platform to learn, collaborate, and compete in cybersecurity through technical events, CTFs, workshops, hackathons, and industry-focused initiatives.",
    },
  ];

  return (
    <section className="know-us">

      {/* Background */}
      <div className="know-us__grid" />

      {/* =================================================
          TOP SYSTEM BAR
      ================================================= */}

      <div className="know-us__top">

        <div className="know-us__section-id">
          <span>04</span>
          <i />
          <span>ABOUT CYBERONITES</span>
        </div>

        <div className="know-us__status">
          <span className="know-us__status-dot" />
          SYSTEM / ACTIVE
        </div>

      </div>


      {/* =================================================
          MAIN
      ================================================= */}

      <div className="know-us__layout">

        {/* =================================================
            LEFT
        ================================================= */}

        <div className="know-us__intro">

          <p className="know-us__eyebrow">
            INSIDE THE COMMUNITY
          </p>

          <h2 className="know-us__heading">
            WHO
            <br />
            <span>WE ARE.</span>
          </h2>

          <p className="know-us__intro-text">
            More than a cybersecurity club.
            A student-driven environment where
            curiosity becomes capability.
          </p>

          <div className="know-us__coordinates">
            <span>27.4924° N</span>
            <span>77.6737° E</span>
            <span>GLA / MATHURA</span>
          </div>

        </div>


        {/* =================================================
            RIGHT — INFORMATION SYSTEM
        ================================================= */}

        <div className="know-us__system">

          <div className="know-us__system-header">
            <span>CORE / IDENTITY</span>
            <span>00 — 04</span>
          </div>


          <div className="know-us__list">

            {sections.map((item) => (

              <article
                key={item.number}
                className={`know-us__item ${
                  active === item.number
                    ? "know-us__item--active"
                    : ""
                }`}
                onMouseEnter={() => setActive(item.number)}
              >

                {/* Number */}
                <div className="know-us__number">
                  {item.number}
                </div>


                {/* Main */}
                <div className="know-us__details">

                  <div className="know-us__item-top">

                    <h3>
                      {item.title}
                    </h3>

                    <span className="know-us__arrow">
                      ↗
                    </span>

                  </div>

                  <p>
                    {item.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>


    </section>
  );
};

export default KnowUs;