import React from "react";
import { Link } from "react-router-dom";
import "./Externalevents.css";

import Footer from "../footer/Footer";

// Event Posters
import intrusionPoster from "../../img/events/IntrusionX2.webp";
import escalatePoster from "../../img/events/EscalateXv2.webp";
import ctfPoster from "../../img/events/EscalateX_CTF.webp";
import intrusionx from "../../img/events/IntrusionX.webp";
import hackops from "../../img/events/Hackops.webp";

const events = [
  {
    id: "01",
    title: "HackOPS",
    category: "Workshop",
    date: "24 APRIL, 2026",
    poster: hackops,
    route: "/hackops",
  },
  {
    id: "02",
    title: "IntrusionX Second Edition",
    category: "36 Hour Hackathon",
    date: "10 — 11 APRIL, 2026",
    poster: intrusionPoster,
    route: "/intrusionx-se",
  },
  {
    id: "03",
    title: "EscalateX V2",
    category: "Cybersecurity Event",
    date: "08 — 09 NOVEMBER, 2025",
    poster: escalatePoster,
    route: "/escalatexv2",
  },{
    id: "04",
    title: "IntrusionX",
    category: "Hackathon",
    date: "11 — 12 APRIL, 2025",
    poster: intrusionx,
    route: "/intrusionx",
  },
  {
    id: "05",
    title: "EscalateX V1",
    category: "Competition",
    date: "15 SEPTEMBER, 2024",
    poster: ctfPoster,
    route: "/escalatex",
  },
  
];

const Externalevents = () => {
  return (
    <>
      <main className="event-page">

        <header className="event-page__header">

          

          <div className="event-page__heading">

          

            <h1 className="event-page__title">
              <span className="event-page__title-solid">
                O U R
              </span>

              <span className="event-page__title-outline">
                GRAND EVENTS.
              </span>
            </h1>

            <p className="event-page__description">
              A collection of hackathons, cybersecurity competitions,
              and technical experiences that have shaped the
              Cyberonites community.
            </p>

          </div>

        </header>




        <section className="event-grid">

          {events.map((event) => (

            <article
              key={event.id}
              className="event-card"
            >

           

              <div className="event-card__top">

                <span className="event-card__number">
                  {event.id}
                </span>

                <span className="event-card__type">
                  {event.category}
                </span>

              </div>



              <Link
                to={event.route}
                className="event-card__image"
                aria-label={`View ${event.title}`}
              >

                <img
                  src={event.poster}
                  alt={`${event.title} poster`}
                />

                <span className="event-card__image-overlay">
                  VIEW
                  <span>↗</span>
                </span>

              </Link>


              <div className="event-card__content">

                <div>

                  <p className="event-card__category">
                    {event.category}
                  </p>

                  <h2 className="event-card__title">
                    {event.title}
                  </h2>

                </div>


                <div className="event-card__bottom">

                  <p className="event-card__date">
                    {event.date}
                  </p>

                  <Link
                    to={event.route}
                    className="event-card__button"
                  >
                    <span>VIEW EVENT</span>

                    <span className="event-card__button-arrow">
                      ↗
                    </span>
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </section>



      </main>

      <Footer />
    </>
  );
};

export default Externalevents;