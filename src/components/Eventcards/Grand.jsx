import React from "react";
import { Link } from "react-router-dom";
import "./Grand.css";

import event1 from "../../img/events/IntrusionX2.webp";
import event2 from "../../img/events/EscalateXv2.webp";
import event3 from "../../img/events/EscalateX_CTF.webp";

const Grand = () => {
  const events = [
    {
      id: "01",
      title: "IntrusionX Second Edition",
      category: "HACKATHON",
      date: "10–11 APR 2026",
      participants: "990+",
      image: event1,
      link: "/intrusionx-se",
    },
    {
      id: "02",
      title: "EscalateX V2",
      category: "CYBERSECURITY EVENT",
      date: "08–09 NOV 2025",
      participants: "450+",
      image: event2,
      link: "/escalatexv2",
    },
    {
      id: "03",
      title: "EscalateX CTF",
      category: "CAPTURE THE FLAG",
      date: "15 SEP 2024",
      participants: "50+",
      image: event3,
      link: "/escalatex",
    },
  ];

  return (
    <section className="grand" id="Events">

      {/* HEADER */}

      <div className="grand__header">

        <div className="grand__eyebrow">
          <span>06</span>
          <i />
          <span>FIELD OPERATIONS</span>
        </div>

        <div className="grand__heading-row">

          <h2 className="grand__title">
            WHERE CYBER
            <br />
            BECOMES <span>REAL.</span>
          </h2>

          <p className="grand__intro">
            From competitive CTFs to large-scale cybersecurity
            experiences, these are the moments where Cyberonites
            turns knowledge into action.
          </p>

        </div>

      </div>


      {/* EVENTS */}

      <div className="grand__events">

        {/* FEATURED EVENT */}

        <Link
          to={events[0].link}
          className="grand__featured"
        >

          <div className="grand__featured-image">
            <img
              src={events[0].image}
              alt={events[0].title}
            />

            <div className="grand__scanline" />

            <span className="grand__featured-index">
              EVENT / {events[0].id}
            </span>

            <span className="grand__featured-arrow">
              ↗
            </span>
          </div>

          <div className="grand__featured-content">

            <div>
              <span className="grand__category">
                {events[0].category}
              </span>

              <h3>
                {events[0].title}
              </h3>
            </div>

            <div className="grand__featured-meta">
              <span>{events[0].date}</span>
              <span>{events[0].participants} PARTICIPANTS</span>
            </div>

          </div>

        </Link>


        {/* SIDE EVENTS */}

        <div className="grand__side">

          {events.slice(1).map((event) => (
            <Link
              key={event.id}
              to={event.link}
              className="grand__side-event"
            >

              <div className="grand__side-image">
                <img
                  src={event.image}
                  alt={event.title}
                />
              </div>

              <div className="grand__side-content">

                <div className="grand__side-top">
                  <span>
                    {event.id}
                  </span>

                  <span>
                    {event.category}
                  </span>
                </div>

                <h3>
                  {event.title}
                </h3>

                <div className="grand__side-meta">
                  {event.date}
                  <span>·</span>
                  {event.participants}
                </div>

              </div>

              <span className="grand__side-arrow">
                →
              </span>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Grand;