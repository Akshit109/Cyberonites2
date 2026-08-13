import React from "react";
import { useNavigate } from "react-router-dom";
import "./TeamCard.css";

import logo from "../../img/ps-final.png";

const TeamCard = () => {
  const navigate = useNavigate();

  return (
    <section className="team-card">


      <div className="team-card__grid" />

      <div className="team-card__container">

        <div className="team-card__content">

          {/* Eyebrow */}
          <p className="team-card__eyebrow">
            <span className="team-card__dot" />
            CYBERONITES LEADERSHIP
          </p>


          {/* Title */}
          <h2 className="team-card__title">
            MEET OUR
            <br />
            <span>TEAM.</span>
          </h2>




          <br />
          <br />


          {/* =====================================
              ACTIONS
          ===================================== */}
          <div className="team-card__actions">

            <button
              type="button"
              className="team-card__primary"
              onClick={() => navigate("/team2026")}
            >
              CURRENT TEAM
              <span>↗</span>
            </button>
            <button
              type="button"
              className="team-card__secondary"
              onClick={() => navigate("/team2025")}
            >
              TEAM 2025
              <span>↗</span>
            </button>

            <button
              type="button"
              className="team-card__secondary"
              onClick={() => navigate("/team2024")}
            >
              TEAM 2024
              <span>↗</span>
            </button>

          </div>

        </div>


        {/* =======================================
            RIGHT VISUAL
        ======================================= */}
        <div className="team-card__visual">

          {/* Label */}
          <div className="team-card__visual-label">
            CYBERONITES <span>/</span> TEAM
          </div>


          {/* Logo */}
          <div className="team-card__visual-mark">

            <div className="team-card__logo-frame">

              <img
                src={logo}
                alt="Cyberonites"
                className="team-card__logo"
              />

            </div>

          </div>


          {/* Caption */}
          <div className="team-card__visual-caption">

            <span>
              GLA UNIVERSITY
            </span>

            <span>
              2016 — PRESENT
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TeamCard;