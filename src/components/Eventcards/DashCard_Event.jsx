import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashCard_Event.css";

const DashCard_Event = () => {
  const navigate = useNavigate();

  return (
    <section className="event-highlight">

      {/* Background grid */}
      <div className="event-highlight__grid" />

      {/* Top information */}
      <div className="event-highlight__top">
        <div className="event-highlight__eyebrow">
          <span className="event-highlight__number">05</span>
          <span className="event-highlight__line" />
          <span>EVENT ARCHIVE</span>
        </div>

        <span className="event-highlight__status">
          ARCHIVE / 001
        </span>
      </div>


      {/* Main content */}
      <div className="event-highlight__content">

        <div className="event-highlight__index">
          <span>01</span>
          <span>FLAGSHIP</span>
        </div>


        <div className="event-highlight__main">

          <p className="event-highlight__label">
            CYBERONITES / EXPERIENCES
          </p>

          <h2 className="event-highlight__title">
            GRAND
            <br />
            <span>EVENTS.</span>
          </h2>

          <p className="event-highlight__description">
            Explore the flagship cybersecurity events organized by
            Cyberonites — from national hackathons and CTF
            competitions to workshops and technical challenges
            that bring the community together.
          </p>


          <button
            type="button"
            className="event-highlight__button"
            onClick={() => navigate("/external-events")}
          >
            <span>EXPLORE EVENTS</span>

            <span className="event-highlight__button-arrow">
              ↗
            </span>
          </button>

        </div>


        {/* Right technical panel */}
        <div className="event-highlight__panel">

          <div className="event-highlight__panel-header">
            <span>SYSTEM</span>
            <span>04 / 06</span>
          </div>

          <div className="event-highlight__panel-status">
            <span className="event-highlight__status-dot" />
            ARCHIVE ONLINE
          </div>

          <div className="event-highlight__panel-row">
            <span>EVENTS</span>
            <strong>∞</strong>
          </div>

          <div className="event-highlight__panel-row">
            <span>FOCUS</span>
            <strong>CYBER</strong>
          </div>

          <div className="event-highlight__panel-row">
            <span>MODE</span>
            <strong>ACTIVE</strong>
          </div>

        </div>

      </div>


    
    </section>
  );
};

export default DashCard_Event;