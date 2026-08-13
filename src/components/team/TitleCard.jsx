import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./TitleCard.css";

const TitleCard = ({
  name,
  role,
  profileImage,
  linkedin,
  email,
}) => {
  return (
    <article className="title-card">

      {/* ================================
          IMAGE
      ================================= */}

      <div className="title-card__image-wrap">

        {profileImage ? (
          <img
            src={profileImage}
            alt={name}
            className="title-card__image"
          />
        ) : (
          <div className="title-card__placeholder">
            CYB
          </div>
        )}

      </div>


      {/* ================================
          CONTENT
      ================================= */}

      <div className="title-card__content">

        <span className="title-card__profile">
          // PROFILE
        </span>

        <h3 className="title-card__name">
          {name}
        </h3>

        <p className="title-card__role">
          {role}
        </p>


        {/* ================================
            SOCIAL LINKS
        ================================= */}

        <div className="title-card__social">

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="title-card__social-link"
              aria-label={`${name} LinkedIn`}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="title-card__social-link"
              aria-label={`Email ${name}`}
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          )}

        </div>

      </div>

    </article>
  );
};

export default TitleCard;