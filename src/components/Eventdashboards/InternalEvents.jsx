import React from "react";
import "./InternalEvents.css";

import Footer from "../footer/Footer";

// Posters
import securityFest from "../../img/InternalEvents/CyberonitesSecurityFest.webp";
import cybersphere from "../../img/InternalEvents/Cybersphere.webp";
import defenceMatrix from "../../img/InternalEvents/Defence_Matrix.webp";
import escalateXGL from "../../img/InternalEvents/EscalateXGL.webp";
import itMela from "../../img/InternalEvents/ITMela.webp";
import networkInterception from "../../img/InternalEvents/NetworkInterception.webp";
import webSecPro from "../../img/InternalEvents/WebSecPro.webp";
import youCanHack from "../../img/InternalEvents/youCanHack.webp";

const InternalEvents = () => {
  const events = [
    {
      id: 1,
      title: "Cyberonites Security Fest",
      date: "Internal Event",
      poster: securityFest,
    },
    {
      id: 2,
      title: "Cybersphere",
      date: "Internal Event",
      poster: cybersphere,
    },
    {
      id: 3,
      title: "Defence Matrix",
      date: "Internal Event",
      poster: defenceMatrix,
    },
    {
      id: 4,
      title: "EscalateX GL",
      date: "Internal Event",
      poster: escalateXGL,
    },
    {
      id: 5,
      title: "IT Mela",
      date: "Internal Event",
      poster: itMela,
    },
    {
      id: 6,
      title: "Network Interception",
      date: "Internal Event",
      poster: networkInterception,
    },
    {
      id: 7,
      title: "WebSec Pro",
      date: "Internal Event",
      poster: webSecPro,
    },
    {
      id: 8,
      title: "You Can Hack",
      date: "Internal Event",
      poster: youCanHack,
    },
  ];

  return (
    <div className="internal-events">

      {/* Background */}
      <div className="internal-events__grid-bg" />

      {/* Header */}
      <header className="internal-events__header">
        <h1 className="internal-events__title">
          INTERNAL EVENTS
        </h1>

        <p className="internal-events__description">
          Explore workshops, technical sessions, seminars, and
          learning experiences organized by Cyberonites for the
          student community.
        </p>
      </header>

      {/* Event Grid */}
      <main className="internal-events__cards">

        {events.map((event, index) => (
          <article
            className="internal-event-card"
            key={event.id}
          >

            {/* Number */}
            <div className="internal-event-card__number">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Poster */}
            <div className="internal-event-card__image">
              <img
                src={event.poster}
                alt={event.title}
                loading="lazy"
              />
            </div>

            {/* Event Information */}
            <div className="internal-event-card__content">

              <span className="internal-event-card__date">
                {event.date}
              </span>

              <h2 className="internal-event-card__title">
                {event.title}
              </h2>

            </div>

          </article>
        ))}

      </main>

      <Footer />

    </div>
  );
};

export default InternalEvents;