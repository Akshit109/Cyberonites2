import React from "react";
import { motion } from "framer-motion";

import teamData from "./teamData";
import TitleCard from "../team/TitleCard";

import "./Team2024.css";

const Team2024 = () => {
 
  const mentors = teamData.filter((member) =>
    ["Mentor", "Co-Mentor"].includes(member.role)
  );

  const leadership = teamData.filter((member) =>
    ["President", "Vice President", "General Secretary"].includes(member.role)
  );

  const departmentHeads = teamData.filter((member) =>
    [
      "Technical Head",
      "Event Head",
      "Design Head",
      "Development Head",
      "Management Head",
      "Public Relations Head",
      "Corporate Relations Head",
    ].includes(member.role)
  );

  const developmentTeam = teamData.filter(
    (member) => member.role === "Web Development Team Member"
  );

  return (
    <div className="team2024">

      {/* ==========================================
          BACKGROUND GRID
      ========================================== */}

      <div className="team2024__grid" />


      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="team2024__header">

        <div className="team2024__eyebrow">
          <span className="team2024__line" />
          CYBERONITES / TEAM 2024
        </div>

        <h1 className="team2024__title">
          THE PEOPLE
          <br />
          <span>BEHIND CYBERONITES.</span>
        </h1>

        <p className="team2024__intro">
          Meet the mentors, leaders, and technical minds who helped
          shape Cyberonites through cybersecurity, innovation,
          collaboration, and student-led initiatives.
        </p>

        <div className="team2024__meta">
          <span>GLA UNIVERSITY</span>
          <span>•</span>
          <span>CYBERONITES</span>
          <span>•</span>
          <span>2024</span>
        </div>

      </header>


      {/* ==========================================
          OUR INSPIRATION
      ========================================== */}

      <section className="team2024__section">

        <div className="team2024__section-header">

          <div>

            <p className="team2024__number">
              01 / GUIDANCE
            </p>

            <h2>
              OUR
              <br />
              INSPIRATION.
            </h2>

          </div>

          <p className="team2024__section-description">
            The mentors who supported Cyberonites with knowledge,
            experience, technical guidance, and strategic direction.
          </p>

        </div>


        <div className="team2024__gallery">

          {mentors.map((member, index) => (

            <motion.div
              key={`${member.name}-${index}`}
              className="team2024__gallery-item"
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


      {/* ==========================================
          CORE TEAM
      ========================================== */}

      <section className="team2024__section">

        <div className="team2024__section-header">

          <div>

            <p className="team2024__number">
              02 / LEADERSHIP
            </p>

            <h2>
              CORE
              <br />
              TEAM.
            </h2>

          </div>

          <p className="team2024__section-description">
            The leadership team responsible for coordinating
            Cyberonites and driving the community forward.
          </p>

        </div>


        <div className="team2024__gallery">

          {leadership.map((member, index) => (

            <motion.div
              key={`${member.name}-${index}`}
              className="team2024__gallery-item"
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


      {/* ==========================================
          DEPARTMENT HEADS
      ========================================== */}

      <section className="team2024__section">

        <div className="team2024__section-header">

          <div>

            <p className="team2024__number">
              03 / DEPARTMENTS
            </p>

            <h2>
              TEAM
              <br />
              HEADS.
            </h2>

          </div>

          <p className="team2024__section-description">
            The people responsible for technical development,
            events, design, management, public relations,
            and corporate collaborations.
          </p>

        </div>


        <div className="team2024__gallery">

          {departmentHeads.map((member, index) => (

            <motion.div
              key={`${member.name}-${index}`}
              className="team2024__gallery-item"
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


      {/* ==========================================
          DEVELOPMENT TEAM
      ========================================== */}

      {developmentTeam.length > 0 && (

        <section className="team2024__section">

          <div className="team2024__section-header">

            <div>

              <p className="team2024__number">
                04 / DEVELOPMENT
              </p>

              <h2>
                WEB
                <br />
                TEAM.
              </h2>

            </div>

            <p className="team2024__section-description">
              The developers behind Cyberonites' digital platforms,
              website, and technical infrastructure.
            </p>

          </div>


          <div className="team2024__gallery">

            {developmentTeam.map((member, index) => (

              <motion.div
                key={`${member.name}-${index}`}
                className="team2024__gallery-item"
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

      )}


      {/* ==========================================
          END
      ========================================== */}

      <section className="team2024__end">

        <p>CYBERONITES / 2024</p>

        <h2>
          BUILT BY
          <br />
          <span>THE COMMUNITY.</span>
        </h2>

      </section>

    </div>
  );
};

export default Team2024;