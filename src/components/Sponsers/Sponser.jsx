import React from "react";
import "./Spon.css";

import AlteredSecurityLogo from "../../img/sponsor-logo/altered-security.webp";
import MultigradLogo from "../../img/sponsor-logo/multigrade.webp";
import CIGLogo from "../../img/sponsor-logo/cia.webp";
import OffsecLogo from "../../img/sponsor-logo/offsec.webp";
import YCFLogo from "../../img/sponsor-logo/ycf-logo.webp";

import AbhibusLogo from "../../img/escalate-v2/sponsor/abhibus.webp";
import BootcodingLogo from "../../img/escalate-v2/sponsor/Bootcoding.webp";
import BurgerjnLogo from "../../img/escalate-v2/sponsor/burgerjn.webp";
import CsataLogo from "../../img/escalate-v2/sponsor/csata.webp";
import CTF7Logo from "../../img/escalate-v2/sponsor/CTF7.webp";
import CyberfratNextgenLogo from "../../img/escalate-v2/sponsor/Cyberfratnextgen.webp";
import DefronixLogo from "../../img/escalate-v2/sponsor/defronix.webp";
import FizzifyLogo from "../../img/escalate-v2/sponsor/Fizzify.webp";
import GiveMyCertiLogo from "../../img/escalate-v2/sponsor/givemycerti.webp";
import InterviewBuddyLogo from "../../img/escalate-v2/sponsor/interviewbuddy.webp";
import MarketMafiaLogo from "../../img/escalate-v2/sponsor/marketmafia.webp";
import ModernSecurityLogo from "../../img/escalate-v2/sponsor/ModernSecurity.webp";
import OffSecNewLogo from "../../img/escalate-v2/sponsor/OffSec.webp";
import OSENLogo from "../../img/escalate-v2/sponsor/OSEN.webp";
import SecOpsLogo from "../../img/escalate-v2/sponsor/SecOps.webp";
import SquareBoatLogo from "../../img/escalate-v2/sponsor/SquareBoat.webp";
import UnstopLogo from "../../img/escalate-v2/sponsor/unstop.webp";

const Sponsor = ({ heading = "Our Sponsors" }) => {
  const sponsors = [
    {
      href: "https://www.alteredsecurity.com/",
      alt: "Altered Security",
      img: AlteredSecurityLogo,
    },
    {
      href: "https://www.cyintglobal.com/",
      alt: "Cyber Intelligence Global",
      img: CIGLogo,
    },
    {
      href: "https://www.multigrad.in/",
      alt: "Multigrad",
      img: MultigradLogo,
    },
    {
      href: "https://www.offsec.com/",
      alt: "Offensive Security",
      img: OffsecLogo,
    },
    {
      href: "https://ycfteam.in/",
      alt: "YCF Team",
      img: YCFLogo,
    },
    {
      href: "#",
      alt: "Abhibus",
      img: AbhibusLogo,
    },
    {
      href: "#",
      alt: "Bootcoding",
      img: BootcodingLogo,
    },
    {
      href: "#",
      alt: "Burgerjn",
      img: BurgerjnLogo,
    },
    {
      href: "#",
      alt: "CSATA",
      img: CsataLogo,
    },
    {
      href: "#",
      alt: "CTF7",
      img: CTF7Logo,
    },
    {
      href: "#",
      alt: "Cyberfrat Nextgen",
      img: CyberfratNextgenLogo,
    },
    {
      href: "#",
      alt: "Defronix",
      img: DefronixLogo,
    },
    {
      href: "#",
      alt: "Fizzify",
      img: FizzifyLogo,
    },
    {
      href: "#",
      alt: "GiveMyCerti",
      img: GiveMyCertiLogo,
    },
    {
      href: "#",
      alt: "InterviewBuddy",
      img: InterviewBuddyLogo,
    },
    {
      href: "#",
      alt: "Market Mafia",
      img: MarketMafiaLogo,
    },
    {
      href: "#",
      alt: "Modern Security",
      img: ModernSecurityLogo,
    },
    {
      href: "#",
      alt: "OffSec",
      img: OffSecNewLogo,
    },
    {
      href: "#",
      alt: "OSEN",
      img: OSENLogo,
    },
    {
      href: "#",
      alt: "SecOps",
      img: SecOpsLogo,
    },
    {
      href: "#",
      alt: "SquareBoat",
      img: SquareBoatLogo,
    },
    {
      href: "#",
      alt: "Unstop",
      img: UnstopLogo,
    },
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeSponsors = [...sponsors, ...sponsors];

  return (
    <section className="sponsor" id="sponsors">
      {/* ==================================================
          Background Grid
      ================================================== */}
      <div className="sponsor__grid" />

      {/* ==================================================
          Section Label
      ================================================== */}
      <div className="sponsor__label">
        <span className="sponsor__label-line" />
        <span>Powering Cyberonites</span>
      </div>

      {/* ==================================================
          Diagonal Marquee
      ================================================== */}
      <div className="sponsor__marquee-wrapper">
        <div className="sponsor__marquee">
          <div className="sponsor__track">
            {marqueeSponsors.map((sponsor, index) => (
              <React.Fragment key={`${sponsor.alt}-${index}`}>
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor__item"
                  aria-label={`Visit ${sponsor.alt}`}
                >
                  <img
                    src={sponsor.img}
                    alt={sponsor.alt}
                    className="sponsor__logo"
                  />
                </a>

                <span
                  className="sponsor__separator"
                  aria-hidden="true"
                >
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;