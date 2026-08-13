import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import "./ContactUs.css";

const socials = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    link: "mailto:support@cyberonites.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/cyberonites-club/",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://www.instagram.com/official_cyberonites/",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    link: "https://chat.whatsapp.com/Hq3fqUz5J0eD4i4bYUSzR1",
  },
];

const ContactUs = () => {
  return (
    <section className="contact">

      {/* Background Grid */}
      <div className="contact__grid" />

      {/* Top Label */}
      <div className="contact__top">
        <div className="contact__eyebrow">
          <span className="contact__line" />
          07 / CONNECT
        </div>
      </div>

      {/* Main Content */}
      <div className="contact__container">

        {/* Left */}
        <div className="contact__content">

          <h2 className="contact__title">
            LET'S BUILD
            <br />
            <span>TOGETHER.</span>
          </h2>

          <p className="contact__description">
            Have an idea, want to collaborate, or looking to be part
            of the Cyberonites community? Start a conversation with us.
          </p>

          {/* CTA */}
          <a
            href="mailto:support@cyberonites.com"
            className="contact__button"
          >
            START A CONVERSATION
            <span>↗</span>
          </a>

          {/* Socials */}
          <div className="contact__socials">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.link.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="contact__social"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Right Information */}
        <div className="contact__side">

          <div className="contact__side-block">
            <span>EMAIL</span>

            <a href="mailto:support@cyberonites.com">
              support@cyberonites.com
            </a>
          </div>

          <div className="contact__side-block">
            <span>LOCATION</span>

            <p>
              GLA University
              <br />
              Mathura, Uttar Pradesh
            </p>
          </div>

          <div className="contact__side-block">
            <span>COMMUNITY</span>

            <p>
              Cyberonites Club
              <br />
              Since 2016
            </p>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="contact__bottom">
        <span>CYBERONITES</span>
        <span>GLA UNIVERSITY</span>
        <span>SECURE THE FUTURE.</span>
      </div>

    </section>
  );
};

export default ContactUs;