import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Escalatex.css";

import dsc1 from "../../../img/Escalatex/DSC_2326.webp";
import dsc2 from "../../../img/Escalatex/DSC_2498.webp";
import dsc3 from "../../../img/Escalatex/DSC_2605.webp";
import dsc4 from "../../../img/Escalatex/DSC_2614.webp";
import dsc5 from "../../../img/Escalatex/DSC_2687.webp";
import dsc6 from "../../../img/Escalatex/DSC_2615.webp";
import dsc7 from "../../../img/Escalatex/DSC_2626.webp";
import dsc8 from "../../../img/Escalatex/DSC_2629.webp";

import Footer from "../../../components/footer/Footer";

const Escalatexx = () => {
  const navigate = useNavigate();

  const [activeWinner, setActiveWinner] = useState(0);

  /* ==========================================================
     WINNERS
  ========================================================== */

  const winners = [
    {
      id: 1,
      rank: "01",
      badge: "🏆 1ST PLACE CHAMPION",
      name: "PARTH SETH",
      fullName: "Parth Seth",
      college: "GLA University",
      prize: "₹10,000",
      image: dsc6,
      perkTags: [
        "₹10,000 Cash",
        "Altered Security CRTP",
        "Offsec 3M Playground",
        "Paid Offsec Internship",
        "Digital Forensics Course",
      ],
      details:
        "Parth Seth from GLA University claimed 1st place in the EscalatexX CTF 2024, earning ₹10,000, CRTP lab access, an Offsec paid internship, and digital forensics certification.",
      isCenter: true,
    },
    {
      id: 2,
      rank: "02",
      badge: "🥈 2ND PLACE RUNNER-UP",
      name: "KRISHAN JAI",
      fullName: "Krishan Jai Soorya",
      college: "R.M.K. College of Eng. & Tech",
      prize: "₹6,000",
      image: dsc4,
      perkTags: [
        "₹6,000 Cash",
        "Altered Security CRTP",
        "Offsec 3M Playground",
        "Paid Offsec Internship",
        "Digital Forensics Course",
      ],
      details:
        "Krishan Jai Soorya from R.M.K. College of Engineering and Technology, Chennai, awarded ₹6,000, CRTP lab access, an Offsec paid internship, and digital forensics certification.",
      isCenter: false,
    },
    {
      id: 3,
      rank: "03",
      badge: "🥉 3RD PLACE RUNNER-UP",
      name: "MADHAV TYAGI",
      fullName: "Madhav Tyagi",
      college: "Manav Rachna University",
      prize: "₹4,000",
      image: dsc3,
      perkTags: [
        "₹4,000 Cash",
        "Altered Security CRTP",
        "Offsec 3M Playground",
        "Paid Offsec Internship",
        "Digital Forensics Course",
      ],
      details:
        "Madhav Tyagi from Manav Rachna University, Faridabad, awarded ₹4,000, CRTP lab access, an Offsec paid internship, and digital forensics certification.",
      isCenter: false,
    },
  ];

  /* ==========================================================
     WINNER NAVIGATION
  ========================================================== */

  const nextWinner = () => {
    setActiveWinner((prev) => (prev + 1) % winners.length);
  };

  const prevWinner = () => {
    setActiveWinner(
      (prev) => (prev - 1 + winners.length) % winners.length
    );
  };

  return (
    <div className="Escalatexx-page">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="Escalatexx-hero">

        <div className="Escalatexx-hero__background">
          <img
            src={dsc1}
            alt="CTF Arena Background"
          />

          <div className="Escalatexx-hero__overlay" />
        </div>

        {/* Header */}

        <header className="Escalatexx-header">

          <div className="Escalatexx-header__brand">
            CYBERONITES
          </div>

          <div className="Escalatexx-header__search">
            <span>SEARCH...</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </header>

        {/* Hero Content */}

        <div className="Escalatexx-hero__content">

          <div className="Escalatexx-hero__quote">

            <p>
              "CYBERSECURITY COMES SECOND TO CURIOSITY WHEN IT COMES TO
              SOLVING THE UNSOLVABLE"
            </p>

            <span>
              — EscalatexX ARCHIVE // CTF 2024
            </span>

          </div>

          <div className="Escalatexx-hero__headline">

            <h1>
              BE IN SYNC
              <br />
              WITH THE CODE
            </h1>

            <p>
              SEPTEMBER 15, 2024 | ACADEMIC BLOCK - 11,
              GLA UNIVERSITY
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("champions")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              EXPLORE CHAMPIONS
            </button>

          </div>

        </div>

        {/* Hero Bottom */}

        <div className="Escalatexx-hero__specs">

          <span>
            JEOPARDY STYLE CTF
          </span>

          <span>
            8-HOUR COMPETITION SPRINT
          </span>

          <span>
            NATIONAL PARTICIPANTS
          </span>

        </div>

      </section>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="Escalatexx-content">

        {/* ====================================================
            CHAMPIONS
        ==================================================== */}

        <section
          id="champions"
          className="Escalatexx-champions"
        >

          <div className="Escalatexx-section-header">

            <div>

              <span className="Escalatexx-section-label">
                [ OFFICIAL PODIUM ]
              </span>

              <h2>
                CYBERONITES VICTORS
              </h2>

            </div>

            <div className="Escalatexx-navigation">

              <button
                onClick={prevWinner}
                aria-label="Previous winner"
              >
                ←
              </button>

              <button
                onClick={nextWinner}
                aria-label="Next winner"
              >
                →
              </button>

            </div>

          </div>

          {/* Winners */}

          <div className="Escalatexx-winners-grid">

            {winners.map((winner, index) => {

              const isSelected = activeWinner === index;

              return (
                <article
                  key={winner.id}
                  className={`winner-card ${
                    isSelected ? "winner-card--active" : ""
                  }`}
                  onClick={() => setActiveWinner(index)}
                >

                  {/* Rank */}

                  <span className="winner-card__rank">
                    {winner.rank}
                  </span>

                  {/* Main Card */}

                  <div className="winner-card__main">

                    <div className="winner-card__badge">
                      <span>
                        {winner.badge}
                      </span>

                      <span>
                        [ POS. {winner.rank} ]
                      </span>
                    </div>

                    {/* Image */}

                    <div className="winner-card__image">

                      <img
                        src={winner.image}
                        alt={winner.name}
                      />

                      <div className="winner-card__image-overlay" />

                      <div className="winner-card__name">

                        <h3>
                          {winner.name}
                        </h3>

                        <span>
                          {winner.college}
                        </span>

                      </div>

                    </div>

                    {/* Prize */}

                    <div className="winner-card__prize">

                      <span>
                        PRIZE POOL
                      </span>

                      <strong>
                        {winner.prize} + PERKS
                      </strong>

                    </div>

                  </div>

                  {/* Perks */}

                  <div className="winner-card__details">

                    <h4>
                      {winner.fullName}
                    </h4>

                    <p>
                      {winner.college}
                    </p>

                    <div className="winner-card__perks">

                      {winner.perkTags.map(
                        (perk, perkIndex) => (
                          <span key={perkIndex}>
                            {perk}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </section>

        {/* ====================================================
            EVENT OVERVIEW
        ==================================================== */}

        <section className="Escalatexx-overview">

          <div className="overview-card overview-card--dark">

            <span>
              [ COMPETITION RETROSPECTIVE ]
            </span>

            <h2>
              Event Overview
            </h2>

            <div className="overview-line" />

            <div className="overview-meta">

              <span>
                DURATION: 10:00 AM – 6:00 PM
              </span>

              <span>
                TARGETS: REVERSE ENG, CRYPTO, WEB VULNS
              </span>

            </div>

          </div>

          <div className="overview-card overview-card--light">

            <span>
              SUMMARY REPORT
            </span>

            <p>
              The CTF event kicked off at 10:00 AM and continued
              until 6:00 PM. The structure of the competition was
              designed to maximize engagement and learning
              opportunities for participants. Students worked in
              teams or individually to solve tasks spanning
              various domains of cybersecurity, including reverse
              engineering, cryptography, and web vulnerabilities,
              all aimed at earning points and securing top
              positions on the leaderboard.
            </p>

            <p>
              Participants from multiple universities across India
              demonstrated their skills and competed in a
              collaborative environment, pushing their limits to
              tackle real-world cybersecurity challenges. The top
              three performers were awarded prizes, internships,
              and advanced cybersecurity courses to further their
              skills and careers.
            </p>

            <div className="overview-footer">

              <span>
                CYBERONITES CLUB
              </span>

              <span>
                GLA UNIVERSITY
              </span>

            </div>

          </div>

        </section>

        {/* ====================================================
            RUNNER UPS
        ==================================================== */}

        <section className="Escalatexx-dual-grid">

          <div className="dual-card dual-card--light">

            <span>
              [ RUNNER-UPS ]
            </span>

            <h2>
              Honorable Mentions
            </h2>

            <div className="runner-list">

              <div className="runner-item">

                <strong>
                  INDU SHEKHAR PANDEY
                  (KIET, GHAZIABAD)
                </strong>

                <p>
                  Awarded 3-month Offsec Playground
                  Subscription & Digital Forensics Course.
                </p>

              </div>

              <div className="runner-item">

                <strong>
                  ASWANTH BABU
                  (R.M.K. COLLEGE)
                </strong>

                <p>
                  Awarded 3-month Offsec Playground
                  Subscription & Digital Forensics Course.
                </p>

              </div>

            </div>

          </div>

          <div className="dual-card dual-card--dark">

            <span>
              [ PLAYERS ROLL CALL ]
            </span>

            <h2>
              Our CTF Players
            </h2>

            <p>
              We celebrate the incredible talent and dedication
              of all the participants in our CTF event. Each player
              showcased their skills in cybersecurity,
              problem-solving, and teamwork, contributing to an
              exciting and competitive atmosphere.
            </p>

          </div>

        </section>

      </main>

      {/* ======================================================
          RETURN HOME
      ====================================================== */}

      <button
        className="Escalatexx-home-button"
        onClick={() => navigate("/")}
        aria-label="Return to Home"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>
          [ RETURN HOME ]
        </span>

      </button>

      <Footer />

    </div>
  );
};

export default Escalatexx;