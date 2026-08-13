import React from "react";
import { motion } from "framer-motion";

import teamData from "./teamData";
import TitleCard from "../team/TitleCard";

import "./Team2026.css";

const Team2026 = () => {
  // ================================
  // ORGANIZE TEAM
  // ================================

  const mentors = teamData.filter((member) =>
    ["Mentor", "Co-Mentor"].includes(member.role)
  );

  const leadership = teamData.filter((member) =>
    ["President", "Vice President", "General Secretary"].includes(member.role)
  );

  const departmentHeads = teamData.filter((member) =>
    [
      "Technical Head",
      "Development Head",
      "Event Head",
      "Design Head",
      "Management Head",
      "PR Head",
      "CR Head",
      "Content Head",
      "Treasurer",
    ].includes(member.role)
  );

  return (
    <div className="team2026">

      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

      <div className="team2026__grid" />


      {/* =========================================
          HEADER
      ========================================= */}

      <header className="team2026__header">

        <div className="team2026__eyebrow">
          <span className="team2026__line" />
          CYBERONITES / TEAM 2026
        </div>

        <h1 className="team2026__title">
          MEET THE
          <br />
          <span>CYBERONITES.</span>
        </h1>

        <p className="team2026__intro">
          The students, mentors, and leaders shaping the cybersecurity
          community at GLA University through technical learning,
          collaboration, innovation, and real-world experience.
        </p>

        <div className="team2026__meta">
          <span>GLA UNIVERSITY</span>
          <span>•</span>
          <span>CYBERSECURITY</span>
          <span>•</span>
          <span>2026</span>
        </div>

      </header>


      {/* =========================================
          MENTORS
      ========================================= */}

      <section className="team2026__section">

        <div className="team2026__section-header">

          <div>
            <p className="team2026__number">
              01 / GUIDANCE
            </p>

            <h2>
              OUR
              <br />
              INSPIRATION.
            </h2>
          </div>

          <p className="team2026__section-description">
            The mentors who guide Cyberonites with experience,
            knowledge, and direction.
          </p>

        </div>


        <div className="team2026__gallery">

          {mentors.map((member, index) => (

            <motion.div
              key={`${member.name}-${index}`}
              className="team2026__gallery-item"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <TitleCard
                name={member.name}
                role={member.role}
                profileImage={member.profileImage}
                linkedin={member.linkedin}
                email={member.email}
              />

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================================
          CORE TEAM
      ========================================= */}

      <section className="team2026__section">

        <div className="team2026__section-header">

          <div>
            <p className="team2026__number">
              02 / LEADERSHIP
            </p>

            <h2>
              CORE
              <br />
              TEAM.
            </h2>
          </div>

          <p className="team2026__section-description">
            The leadership responsible for the vision, strategy,
            and direction of Cyberonites.
          </p>

        </div>


        <div className="team2026__gallery">

          {leadership.map((member, index) => (

            <motion.div
              key={`${member.name}-${index}`}
              className="team2026__gallery-item"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <TitleCard
                name={member.name}
                role={member.role}
                profileImage={member.profileImage}
                linkedin={member.linkedin}
                email={member.email}
              />

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================================
          DEPARTMENT HEADS
      ========================================= */}

      <section className="team2026__section">

        <div className="team2026__section-header">

          <div>
            <p className="team2026__number">
              03 / DEPARTMENTS
            </p>

            <h2>
              TEAM
              <br />
              HEADS.
            </h2>
          </div>

          <p className="team2026__section-description">
            The people leading technical development, events,
            design, management, content, PR, and partnerships.
          </p>

        </div>


        <div className="team2026__gallery">

          {departmentHeads.map((member, index) => (

            <motion.div
              key={`${member.name}-${index}`}
              className="team2026__gallery-item"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >

              <TitleCard
                name={member.name}
                role={member.role}
                profileImage={member.profileImage}
                linkedin={member.linkedin}
                email={member.email}
              />

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================================
          FOOTER MESSAGE
      ========================================= */}

      <section className="team2026__end">

        <p>CYBERONITES / 2026</p>

        <h2>
          BUILT BY
          <br />
          <span>THE COMMUNITY.</span>
        </h2>

      </section>

    </div>
  );
};

export default Team2026;