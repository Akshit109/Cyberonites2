import React from "react";
import { useNavigate } from "react-router-dom";
import "./InternalEventsCard.css";

const InternalEventsCard = () => {
  const navigate = useNavigate();

  return (
    <section className="internal-highlight">

     


      {/* Main content */}
      <div className="internal-highlight__content">

        {/* Left technical index */}
        <div className="internal-highlight__index">

          <span>02</span>

          <span>LEARNING</span>

       

        </div>


        {/* Main text */}
        <div className="internal-highlight__main">

          <p className="internal-highlight__label">
            CYBERONITES / COMMUNITY
          </p>

          <h2 className="internal-highlight__title">
            LEARN.
            <br />
            <span>BUILD.</span>
          </h2>

          <p className="internal-highlight__description">
            Technical workshops, knowledge sessions, seminars, and
            hands-on activities designed to help students explore
            cybersecurity beyond the classroom.
          </p>


          <button
            type="button"
            className="internal-highlight__button"
            onClick={() => navigate("/internal-events")}
          >
            <span>VIEW SESSIONS</span>

            <span className="internal-highlight__button-arrow">
              ↗
            </span>
          </button>

        </div>


        {/* Right information panel */}
        <div className="internal-highlight__panel">

          <div className="internal-highlight__panel-header">
            <span>ACTIVITY</span>
            <span>05 / 06</span>
          </div>


          <div className="internal-highlight__panel-title">
            INTERNAL
            <br />
            PROGRAMS
          </div>


          <div className="internal-highlight__panel-row">
            <span>FORMAT</span>
            <strong>HANDS-ON</strong>
          </div>

          <div className="internal-highlight__panel-row">
            <span>FOCUS</span>
            <strong>SKILLS</strong>
          </div>

          <div className="internal-highlight__panel-row">
            <span>COMMUNITY</span>
            <strong>ACTIVE</strong>
          </div>

        </div>

      </div>


    </section>
  );
};

export default InternalEventsCard;