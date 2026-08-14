import { useState } from "react";
import { teamData } from "./teamData";
import "./Team2026.css";

/* ──────────────────────────────────────────────────────────
   FEATURED CARD — shown on hover over an avatar
   ────────────────────────────────────────────────────────── */

function FeaturedCard({ member, onPrev, onNext }) {
  return (
    <div className="team2026__card">
      {/* Row: Photo + Info */}
      <div className="team2026__card-row">
        <div className="team2026__card-photo">
          <img src={member.image} alt={member.name} />
        </div>

        <div className="team2026__card-info">
          <h3 className="team2026__card-name">{member.name}</h3>
          <p className="team2026__card-role">{member.role}</p>

          {/* Social Icons */}
          <div className="team2026__card-socials">
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="team2026__card-social-link"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
            {member.socials?.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="team2026__card-social-link"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {member.socials?.email && (
              <a
                href={`mailto:${member.socials.email}`}
                aria-label="Email"
                className="team2026__card-social-link"
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="team2026__card-bio">
        <p>{member.bio}</p>
      </div>

      {/* Prev/Next arrows */}
      {(onPrev || onNext) && (
        <div className="team2026__card-nav">
          <div className="team2026__card-nav-group">
            <button type="button" onClick={onPrev} aria-label="Previous member" className="team2026__card-nav-btn">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="team2026__card-nav-divider" />
            <button type="button" onClick={onNext} aria-label="Next member" className="team2026__card-nav-btn">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   AVATAR BUTTON — circular thumbnail in the row
   ────────────────────────────────────────────────────────── */

function AvatarButton({ member, isSelected, onSelect, onMouseEnter, onMouseLeave }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(member)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={`Select ${member.name}`}
      className="team2026__avatar-btn"
    >
      <div className={`team2026__avatar-ring ${isSelected ? "team2026__avatar-ring--selected" : ""}`}>
        <div className="team2026__avatar-inner">
          <img
            src={member.image}
            alt={member.name}
            className={isSelected ? "team2026__avatar-img--selected" : ""}
          />
        </div>
      </div>
    </button>
  );
}

/* ──────────────────────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────────────────────── */

function Footer2026() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="team2026__footer">
      <div className="team2026__footer-grid">

        {/* Contact Us */}
        <div className="team2026__footer-col">
          <h4>Contact Us</h4>
          <p>
            GLA University, Mathura,<br />
            India - 281406
          </p>
          <a href="mailto:support@cyberonites.com" className="team2026__footer-email">
            support@cyberonites.com
          </a>
        </div>

        {/* Explore */}
        <div className="team2026__footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/our_team">Our Team</a></li>
            <li><a href="/#About">Connect</a></li>
            <li><a href="https://playground.cyberonites.com" target="_blank" rel="noopener noreferrer">Playground</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="team2026__footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="/security">Security &amp; Disclosure</a></li>
            <li>
              <a href="https://www.freeprivacypolicy.com/live/af9fbbb5-1acc-481f-8d06-ac6b84b7a27c" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/GLA+University/@27.6056887,77.5907496,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="team2026__footer-maps"
              >
                See on Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="team2026__footer-col team2026__footer-col--wide">
          <h4>Subscribe to our newsletter</h4>
          <p>Receive updates about upcoming events, workshops, guest lectures, and security programs.</p>
          <form onSubmit={handleSubscribe} className="team2026__newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="team2026__newsletter-input"
            />
            <button type="submit" className="team2026__newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="team2026__footer-bottom">
        <div className="team2026__footer-brand">
          <h3>CYBERONITES</h3>
          <p>Be Powerful.</p>
        </div>
        <p className="team2026__footer-copy">
          &copy; {new Date().getFullYear()} Cyberonites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────────────────── */

export default function Team2026() {
  const [selected, setSelected] = useState(teamData[0]);
  const [hovered, setHovered] = useState(null);

  const activeMember = hovered || selected;

  const handleNext = () => {
    const idx = teamData.findIndex((m) => m.id === selected.id);
    setSelected(teamData[(idx + 1) % teamData.length]);
  };

  const handlePrev = () => {
    const idx = teamData.findIndex((m) => m.id === selected.id);
    setSelected(teamData[(idx - 1 + teamData.length) % teamData.length]);
  };

  return (
    <div className="team2026">

      {/* ── Hero & Avatars ── */}
      <main className="team2026__hero">
        <section className="team2026__hero-inner">

          {/* Background Portrait */}
          <div className="team2026__bg-portrait">
            <img src={activeMember.image} alt="" />
          </div>

          {/* Large Watermark Text */}
          <div className="team2026__watermark">
            <span>CYBERONITES TEAM</span>
          </div>

          {/* Role Label */}
          <div className="team2026__role-label">
            {activeMember.role}
          </div>

          {/* Featured Card on Hover */}
          <div className={`team2026__featured-wrapper ${hovered ? "team2026__featured-wrapper--visible" : "team2026__featured-wrapper--hidden"}`}>
            <FeaturedCard
              member={hovered || teamData[0]}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>

          {/* Avatar Row */}
          <div className="team2026__avatar-row">
            <div className="team2026__avatar-list">
              {teamData.map((member, idx) => {
                const isSelected = selected.id === member.id;
                const floatClass = `animate-float-${(idx % 5) + 1}`;
                return (
                  <div key={member.id} className={floatClass}>
                    <AvatarButton
                      member={member}
                      isSelected={isSelected}
                      onSelect={setSelected}
                      onMouseEnter={() => setHovered(member)}
                      onMouseLeave={() => setHovered(null)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* Section Label */}
        <div className="team2026__title-card">
          <h2>Team members</h2>
        </div>
      </main>

      <Footer2026 />
    </div>
  );
}
