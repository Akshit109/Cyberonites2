import React from "react";
import { useNavigate } from "react-router-dom";
import "./CyberonitesHero.css";

const CyberonitesHero = () => {
  const navigate = useNavigate();

  const scrollToEvents = () => {
    const events = document.getElementById("Events");

    if (events) {
      events.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToSponsors = () => {
    const sponsors = document.getElementById("Sponsors");

    if (sponsors) {
      sponsors.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="cyb-new-hero">

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div className="cyb-new-hero__grid" />

      <div className="cyb-new-hero__noise" />


      {/* =====================================================
          TOP INFORMATION BAR
      ===================================================== */}

      <header className="cyb-new-hero__top">

        <div className="cyb-new-hero__top-left">




          <span>
            CYBERONITES
          </span>

        </div>


        <div className="cyb-new-hero__top-right">


          <span>
            SECURE // 001
          </span>

        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="cyb-new-hero__main">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="cyb-new-hero__left">

          {/* Location */}

          <div className="cyb-new-hero__location">

            <span className="cyb-new-hero__location-dot" />

            <span>
              MATHURA · INDIA
            </span>

          </div>


          {/* =================================================
              TITLE
          ================================================= */}

          <h1 className="cyb-new-hero__title">

            <span className="cyb-new-hero__title-solid">
              CYBER
            </span>

            <span className="cyb-new-hero__title-outline">
              ONITES
            </span>

          </h1>


          {/* Title divider */}

          <div className="cyb-new-hero__line" />


          {/* =================================================
              INTRO
          ================================================= */}

          <div className="cyb-new-hero__intro">

            <div className="cyb-new-hero__intro-number">
              [01]
            </div>

            <p>
              A student-driven cybersecurity community focused on
              practical learning, technical exploration, and building
              the next generation of cyber professionals.
            </p>

          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="cyb-new-hero__actions">

            <button
              type="button"
              className="cyb-new-hero__button cyb-new-hero__button--primary"
              onClick={scrollToEvents}
            >
              <span>
                OUR EVENTS
              </span>

              <span className="cyb-new-hero__button-arrow">
                ↗
              </span>
            </button>


            <a
              href="https://forms.gle/tXcy9ZjqRPPjpXsH6"
              target="_blank"
              rel="noopener noreferrer"
              className="cyb-new-hero__button cyb-new-hero__button--primary"
            >
              SPONSOR US

              <span className="cyb-new-hero__button-arrow">
                ↗
              </span>
            </a>

          </div>

        </div>


        {/* ===================================================
            RIGHT SYSTEM PANEL
        =================================================== */}

        <aside className="cyb-new-hero__right">

          {/* Establishment */}

          <div className="cyb-new-hero__est">

            <span>
              EST.
            </span>

            <strong>
              2024
            </strong>

          </div>


          {/* System card */}

          <div className="cyb-new-hero__system">

            <div className="cyb-new-hero__system-header">

              <span>
                SYSTEM STATUS
              </span>

              <span className="cyb-new-hero__shield">
                ◇
              </span>

            </div>


            <div className="cyb-new-hero__status">

              <span className="cyb-new-hero__status-dot" />

              <span>
                OPERATIONAL
              </span>

            </div>


            <div className="cyb-new-hero__system-grid">

              <div>
                <span>
                  COMMUNITY
                </span>

                <strong>
                  1000+
                </strong>
              </div>


              <div>
                <span>
                  FOCUS
                </span>

                <strong>
                  CYBERSEC
                </strong>
              </div>


              <div>
                <span>
                  MODE
                </span>

                <strong>
                  ACTIVE
                </strong>
              </div>

            </div>

          </div>


          {/* Technical information */}

          <div className="cyb-new-hero__technical">
            <span>
              0xCYB
            </span>
            <span>
              AUTH: TRUE
            </span>
            <span>
              NETWORK: SECURE
            </span>
          </div>
        </aside>
      </div>
      <div className="cyb-new-hero__side cyb-new-hero__side--left">
        <span>
          [01] CYBER SECURITY
        </span>
        <span>
          [02] ETHICAL HACKING
        </span>
        <span>
          [03] DIGITAL DEFENSE
        </span>
      </div>
      <div className="cyb-new-hero__side cyb-new-hero__side--right">
        <span>
          &lt;secure_future /&gt;
        </span>
        <span>
          users: 1000+
        </span>
        <span>
          status: protected
        </span>
      </div>
      <button
        type="button"
        className="cyb-new-hero__scroll"
        onClick={scrollToEvents}
        aria-label="Scroll to events"
      >
        <span>
          ↓
        </span>
      </button>

    </section>
  );
};

export default CyberonitesHero;