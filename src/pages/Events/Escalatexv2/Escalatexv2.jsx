import React, { useState, useRef } from 'react';
import './escalatexv2.css';
/* ==========================================================
   MAIN IMAGES
========================================================== */

import Logo from "../../../img/escalate-v2/logo.webp";
import Hero from "../../../img/escalate-v2/Hero.webp";
import featuredEvent from "../../../img/escalate-v2/featured-event.webp";
import poster from "../../../img/escalate-v2/poster.webp";
import cyberonites from "../../../img/escalate-v2/cyberonites.webp";
import esc from "../../../img/escalate-v2/esc.webp";
import Escalate from "../../../img/escalate-v2/Escalate.webp";
import psFinal from "../../../img/escalate-v2/ps-final.webp";
import psFinal1 from "../../../img/escalate-v2/ps-final1.webp";
import mentorDrAsheeshTiwari from "../../../img/escalate-v2/mentor-dr-asheesh-tiwari.webp";


/* ==========================================================
   PARTNERS
========================================================== */

import pirates from "../../../img/escalate-v2/partners/0x0pirates_logo.webp";
import bsidesJ from "../../../img/escalate-v2/partners/BSidesJ.webp";
import cybersurge from "../../../img/escalate-v2/partners/cybersurge.webp";
import dcgGurugram from "../../../img/escalate-v2/partners/dcg_gurugram_logo.webp";
import eventsinfo from "../../../img/escalate-v2/partners/eventsinfo.webp";
import hackhalt from "../../../img/escalate-v2/partners/hackhalt.webp";
import hackloop from "../../../img/escalate-v2/partners/hackloop-logo.webp";
import leninTree from "../../../img/escalate-v2/partners/lenint_tree.webp";
import partnerLogo from "../../../img/escalate-v2/partners/logo.webp";


/* ==========================================================
   SPONSORS
========================================================== */

import abhibus from "../../../img/escalate-v2/sponsor/abhibus.webp";
import bootcoding from "../../../img/escalate-v2/sponsor/Bootcoding.webp";
import burgerjn from "../../../img/escalate-v2/sponsor/burgerjn.webp";
import csata from "../../../img/escalate-v2/sponsor/csata.webp";
import ctf7 from "../../../img/escalate-v2/sponsor/CTF7.webp";
import cyberfratnextgen from "../../../img/escalate-v2/sponsor/Cyberfratnextgen.webp";
import defronix from "../../../img/escalate-v2/sponsor/defronix.webp";
import fizzify from "../../../img/escalate-v2/sponsor/Fizzify.webp";
import givemycerti from "../../../img/escalate-v2/sponsor/givemycerti.webp";
import interviewbuddy from "../../../img/escalate-v2/sponsor/interviewbuddy.webp";
import marketmafia from "../../../img/escalate-v2/sponsor/marketmafia.webp";
import modernSecurity from "../../../img/escalate-v2/sponsor/ModernSecurity.webp";
import offSec from "../../../img/escalate-v2/sponsor/OffSec.webp";
import osen from "../../../img/escalate-v2/sponsor/OSEN.webp";
import secOps from "../../../img/escalate-v2/sponsor/SecOps.webp";
import squareBoat from "../../../img/escalate-v2/sponsor/SquareBoat.webp";
import unstop from "../../../img/escalate-v2/sponsor/unstop.webp";


/* ==========================================================
   SPEAKERS
========================================================== */

import pulkitSingh from "../../../img/escalate-v2/speakers/pulkit_singh.webp";
import kaushikPal from "../../../img/escalate-v2/speakers/kaushik_pal.webp";
import agrahJain from "../../../img/escalate-v2/speakers/agrah_jain.webp";
import kanishkBhadauria from "../../../img/escalate-v2/speakers/kanishk_bhadauria.webp";
import abhijeetSingh from "../../../img/escalate-v2/speakers/abhijeet_singh.webp";
import nipunJaiswal from "../../../img/escalate-v2/speakers/nipun-jaiswal.webp";
import himanshuThakur from "../../../img/escalate-v2/speakers/himanshu_thakur.webp";


/* ==========================================================
   PANELISTS
========================================================== */

import tamannaAgrawal from "../../../img/escalate-v2/panelists/tamanna_agrawal.webp";


/* ==========================================================
   CTF WINNERS
========================================================== */

import binary from "../../../img/escalate-v2/ctf-winners/binary.webp";
import blitz from "../../../img/escalate-v2/ctf-winners/blitz.webp";
import houseStark from "../../../img/escalate-v2/ctf-winners/house-stark.webp";


/* ==========================================================
   GALLERY
========================================================== */

import gallery1 from "../../../img/escalate-v2/GALLERY/event1.webp";
import gallery2 from "../../../img/escalate-v2/GALLERY/event2.webp";
import gallery3 from "../../../img/escalate-v2/GALLERY/event3.webp";
import gallery4 from "../../../img/escalate-v2/GALLERY/event4.webp";
import gallery5 from "../../../img/escalate-v2/GALLERY/event5.webp";
import gallery6 from "../../../img/escalate-v2/GALLERY/event6.webp";
import gallery7 from "../../../img/escalate-v2/GALLERY/event7.webp";
import gallery8 from "../../../img/escalate-v2/GALLERY/event8.webp";
const Escalatexv2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // 'home' by default (cover exhibit)

  const contentContainerRef = useRef(null);

  const selectSection = (secId) => {
    setActiveSection(secId);
    setSidebarOpen(false);
    if (secId !== 'home') {
      setTimeout(() => {
        contentContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const partnersLogos = [
    { src: bsidesJ, alt: 'BSides Jaipur' },
    { src: cybersurge, alt: 'Cybersurge' },
    { src: dcgGurugram, alt: 'DCG Gurugram' },
    { src: eventsinfo, alt: 'EventsInfo' },
    { src: hackhalt, alt: 'HackHalt' },
    { src: hackloop, alt: 'HackLoop' },
    { src: leninTree, alt: 'Lenin Tree' },
    { src: partnerLogo, alt: 'Partner Logo' },
    { src: pirates, alt: '0x0pirates' }
  ];

  const sponsorsLogos = [
    { src: abhibus, alt: 'Abhibus' },
    { src: bootcoding, alt: 'Bootcoding' },
    { src: burgerjn, alt: 'Burger Junction' },
    { src: csata, alt: 'CSATA' },
    { src: ctf7, alt: 'CTF7' },
    { src: cyberfratnextgen, alt: 'CyberFrat NextGen' },
    { src: defronix, alt: 'Defronix' },
    { src: fizzify, alt: 'Fizzify' },
    { src: givemycerti, alt: 'Give My Certificate' },
    { src: interviewbuddy, alt: 'Interview Buddy' },
    { src: marketmafia, alt: 'Market Mafia' },
    { src: modernSecurity, alt: 'Modern Security' },
    { src: offSec, alt: 'OffSec' },
    { src: osen, alt: 'OSEN' },
    { src: secOps, alt: 'SecOps Group' },
    { src: squareBoat, alt: 'SquareBoat' },
    { src: unstop, alt: 'Unstop' }
  ];

  const speakersList = [
  {
    name: "Mr. Nipun Jaswal",
    role: "Senior Director, Offensive Security",
    company: "NTT Data",
    badge: "CHIEF GUEST",
    image: nipunJaiswal,
  },
  {
    name: "Mr. Himanshu Thakur",
    role: "Director, Cyber Security",
    company: "Nangia Group",
    badge: "GUEST OF HONOUR",
    image: himanshuThakur,
  },
  {
    name: "Mr. Pulkit Singh",
    role: "Solution Delivery Lead",
    company: "Deloitte USI",
    badge: "OSINT SPEAKER",
    image: pulkitSingh,
  },
  {
    name: "Mr. Kaushik Pal",
    role: "Threat Researcher",
    company: "CloudSEK",
    badge: "MALWARE ANALYSIS",
    image: kaushikPal,
  },
  {
    name: "Mr. Agrah Jain",
    role: "Head Cyber Security",
    company: "Wheelseye",
    badge: "CLOUD SECURITY",
    image: agrahJain,
  },
  {
    name: "Mr. Kanishk Bhadauria",
    role: "Cyber Security Professional",
    company: "Industry Expert",
    badge: "SOC OPERATIONS",
    image: kanishkBhadauria,
  },
  {
    name: "Mr. Abhijeet Singh",
    role: "Cyber Security Professional",
    company: "Industry Expert",
    badge: "OFFENSIVE OPS",
    image: abhijeetSingh,
  },
  {
    name: "Ms. Tamanna Agrawal",
    role: "Assistant Manager, Cyber Security",
    company: "CyberFrat",
    badge: "MODERATOR",
    image: tamannaAgrawal,
  },
];
  const ctfWinners = [
  {
    position: "1ST PLACE",
    team: "Team Binary",
    prize: "₹12,000 Cash Prize",
    image: binary,
    perks: [
      "OffSec Certification Voucher (1× PG Practice - 6 mos)",
      "SecOps Certification Voucher – ₹12,000",
      "Interview Buddy & AceInt.ai Access",
    ],
  },
  {
    position: "2ND PLACE",
    team: "Team Blitz",
    prize: "₹8,000 Cash Prize",
    image: blitz,
    perks: [
      "OffSec Certification Voucher (1× PG Practice - 6 mos)",
      "SecOps Certification Voucher – ₹12,000",
      "Interview Buddy & AceInt.ai Access",
    ],
  },
  {
    position: "3RD PLACE",
    team: "Team House_Stark",
    prize: "₹5,000 Cash Prize",
    image: houseStark,
    perks: [
      "OffSec Certification Voucher (1× PG Practice - 6 mos)",
      "SecOps Certification Voucher – ₹12,000",
      "Interview Buddy & AceInt.ai Access",
    ],
  },
];
  const timelineEvents = [
    {
      year: 'DAY 01',
      date: 'NOV 8, 2025',
      title: 'Inauguration & Knowledge Villages',
      desc: 'Opening keynotes by Mr. Nipun Jaswal & Mr. Himanshu Thakur, followed by workshops in OSINT, Malware Analysis, Cloud Security & Panel Discussion.'
    },
    {
      year: 'DAY 02',
      date: 'NOV 9, 2025',
      title: '6-Hour CTF Challenge & Awards',
      desc: '72 elite teams competing across Web Exploitation, Reverse Engineering, Forensics & Crypto, concluded with alumni networking & prize distribution.'
    }
  ];

  const galleryImages = [
    { id: 1, src: gallery1, title: 'Inauguration Ceremony', caption: 'GLA University Auditorium' },
    { id: 2, src: gallery2, title: 'Lighting of the Lamp', caption: 'Opening Ceremony Ritual' },
    { id: 3, src: gallery3, title: 'Alumni Interaction', caption: 'Career & Placement Guidance' },
    { id: 4, src: gallery4, title: 'CTF Live Arena', caption: 'Competitive Hacking Sprint' },
    { id: 5, src: gallery5, title: 'Technical Keynotes', caption: 'Expert Knowledge Exchange' },
    { id: 6, src: gallery6, title: 'ESCALATE X V2 Keynote', caption: 'Main Stage Address' },
    { id: 7, src: gallery7, title: 'Team & Alumni Photo', caption: 'Cyberonites Club Core Team' },
    { id: 8, src: gallery8, title: 'Closing & Awards', caption: 'Valedictory Session' }
  ];

  const menuSections = [
    { id: 'intro', label: 'Executive Briefing & Strategic Vision', sub: 'Event Mission, Leadership & Mentor Insight' },
    { id: 'journey', label: 'Knowledge Villages & Technical Masterclasses', sub: 'Interactive Workshops & Domain Tracks' },
    { id: 'speakers', label: 'Distinguished Keynotes & Industry Leaders', sub: 'Chief Guests, Keynotes & Panel Facilitators' },
    { id: 'winners', label: 'CTF Champions & National Honors', sub: 'Podium Winners, Cash Prizes & Certification Grants' },
    { id: 'timeline', label: 'Chronological Event Proceedings', sub: 'Day 1 & Day 2 Comprehensive Schedule' },
    { id: 'gallery', label: 'Retrospective Exhibition Gallery', sub: 'Curated Photo Archive & Key Moments' },
    { id: 'sponsors', label: 'Ecosystem Partners & Corporate Sponsors', sub: 'Monochrome Industry Alliance Directory' },
    { id: 'all', label: 'Complete Retrospective Exhibition', sub: 'Continuous Full Portfolio Archive View' }
  ];

  return (
    <div className="escalate-archive-container">
      {/* FIXED TOP BAR */}
      <div className="fixed-top-bar">
        <div className="archive-logo-tag">
          <img src={Logo} alt="X" className="archive-mini-logo" />
          <span>CYBERONITES • EXECUTIVE RETROSPECTIVE 2025</span>
        </div>

        <button
          className="archive-hamburger-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Menu Drawer"
        >
          {sidebarOpen ? (
            <span className="close-icon-text">✕</span>
          ) : (
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          )}
        </button>
      </div>

      {/* FULLSCREEN RIGHT SIDEBAR MENU */}
      <div className={`fullscreen-sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-drawer-header">
          <span className="drawer-title">EXHIBITION DIRECTORY</span>
          <button className="drawer-close-btn" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
        </div>

        <div className="sidebar-drawer-menu">
          <button
            className={`drawer-menu-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => selectSection('home')}
          >
            <span className="menu-num">00</span>
            <div className="menu-text">
              <span className="menu-main">EXHIBIT COVER & EXECUTIVE SUMMARY</span>
              <span className="menu-sub">Primary Retrospective Cover View</span>
            </div>
          </button>

          {menuSections.map((sec, idx) => (
            <button
              key={sec.id}
              className={`drawer-menu-item ${activeSection === sec.id ? 'active' : ''}`}
              onClick={() => selectSection(sec.id)}
            >
              <span className="menu-num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="menu-text">
                <span className="menu-main">{sec.label}</span>
                <span className="menu-sub">{sec.sub}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="sidebar-drawer-footer">
          <p>CYBERONITES CLUB • DEPARTMENT OF CEA • GLA UNIVERSITY</p>
        </div>
      </div>

      {/* 00 // INITIAL HOMEPAGE (ULTRA-MINIMALIST EXECUTIVE COVER) */}
      <main className="archive-cover-section">
        <div className="cover-inner-container">
          <div className="cover-header-group">
            <span className="cover-year">2025 // RETROSPECTIVE DOSSIER</span>
            <h1 className="cover-title">
              ESCALATE <img src={Logo} alt="X" className="cover-title-logo" /> V2
            </h1>
            <p className="cover-description">
              An executive retrospective documenting Escalate X V2 — a flagship two-day cybersecurity symposium bringing together offensive security practitioners, threat researchers, malware analysts, and competitive CTF hackers.
            </p>
          </div>

          <div className="cover-image-container">
            <img src={featuredEvent} alt="EscalateX V2 Event Cover" className="cover-img" />
            <div className="cover-caption-bar">
              <span>GLA UNIVERSITY, MATHURA</span>
              <span>FACULTY MENTOR: DR. ASHEESH TIWARI</span>
            </div>
          </div>

          <div className="cover-explore-trigger">
            <button className="explore-archive-btn" onClick={() => setSidebarOpen(true)}>
              ACCESS EXHIBITION DIRECTORY ↗
            </button>
            <span className="scroll-hint">NAVIGATE THROUGH CURATED CHAPTERS VIA THE DIRECTORY INDEX</span>
          </div>
        </div>
      </main>

      {/* SECTION CONTENT CONTAINER (VISIBLE WHEN USER SELECTS A SECTION FROM SIDEBAR) */}
      <div ref={contentContainerRef} className="archive-content-container">
        {activeSection !== 'home' && (
          <div className="active-section-topbar">
            <span className="active-section-name">ACTIVE CHAPTER: {activeSection.toUpperCase()}</span>
            <button className="reset-cover-btn" onClick={() => selectSection('home')}>
              ✕ CLOSE CHAPTER (RETURN TO COVER)
            </button>
          </div>
        )}

        {/* 01 // EXECUTIVE BRIEFING & STRATEGIC VISION */}
        {(activeSection === 'intro' || activeSection === 'all') && (
          <section className="editorial-screen-section image-left">
            <div className="editorial-screen-inner">
              <div className="editorial-media-col">
                <div className="portrait-frame">
                  <img
  src={mentorDrAsheeshTiwari}
  alt="Dr. Asheesh Tiwari"
  className="editorial-portrait"
/>
                  <div className="portrait-caption">
                    <h4>Dr. Asheesh Tiwari</h4>
                    <p>Faculty Advisor & Associate Professor, Dept. of CEA</p>
                  </div>
                </div>
              </div>

              <div className="editorial-text-col">
                <span className="editorial-num">01 // BRIEFING & VISION</span>
                <h2 className="editorial-title">Executive Briefing & Objectives</h2>
                <p className="editorial-body">
                  EscalateX V2 was conceived as a landmark cybersecurity symposium organized by Cyberonites Club at GLA University, Mathura. The primary objective was to bridge academic discourse with real-world threat landscape practice, technical vulnerability assessment, and offensive security methodologies.
                </p>
                <p className="editorial-body">
                  Across both days, 450+ participants engaged on-ground in specialized technical masterclasses, malware dissection labs, OSINT investigations, and competitive hackathon challenges.
                </p>

                <div className="editorial-stats-row">
                  <div className="stat-unit">
                    <span className="stat-num">250+</span>
                    <span className="stat-lbl">Teams</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-num">500+</span>
                    <span className="stat-lbl">Attendees</span>
                  </div>
                  <div className="stat-unit">
                    <span className="stat-num">₹5L+</span>
                    <span className="stat-lbl">Prize Pool</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}

        {/* 02 // KNOWLEDGE VILLAGES & MASTERCLASSES */}
        {(activeSection === 'journey' || activeSection === 'all') && (
          <section className="editorial-screen-section text-left">
            <div className="editorial-screen-inner">
              <div className="editorial-text-col">
                <span className="editorial-num">02 // DOMAIN TRACKS</span>
                <h2 className="editorial-title">Knowledge Villages & Masterclasses</h2>
                <p className="editorial-body">
                  Day 1 hosted interactive specialized Knowledge Villages designed to simulate real-world security operations. Participants engaged directly with industry experts across offensive operations, cloud security posture, and malware research.
                </p>

                <div className="villages-editorial-list">
                  <div className="village-item">
                    <h4>01 / OSINT & DIGITAL FORENSICS</h4>
                    <p>Facilitated by Mr. Pulkit Singh (Deloitte USI) focusing on open-source intelligence gathering and digital artifact analysis.</p>
                  </div>
                  <div className="village-item">
                    <h4>02 / MALWARE ANALYSIS & REVERSING</h4>
                    <p>Facilitated by Mr. Kaushik Pal (CloudSEK) demonstrating dynamic binary analysis and payload dissection.</p>
                  </div>
                  <div className="village-item">
                    <h4>03 / CLOUD INFRASTRUCTURE SECURITY</h4>
                    <p>Facilitated by Mr. Agrah Jain (Wheelseye) covering cloud architecture, IAM misconfigurations, and container runtime security.</p>
                  </div>
                </div>
              </div>

              <div className="editorial-media-col">
                <img src={gallery6} alt="Knowledge Villages" className="magazine-img" />
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}

        {/* 03 // DISTINGUISHED SPEAKERS & CHIEF GUESTS */}
        {(activeSection === 'speakers' || activeSection === 'all') && (
          <section className="editorial-screen-section full-width">
            <div className="full-screen-inner">
              <span className="editorial-num">03 // KEYNOTES</span>
              <h2 className="editorial-title">Chief Guests & Industry Keynotes</h2>

              <div className="speakers-magazine-grid">
                {speakersList.map((speaker, index) => (
                  <div key={index} className="speaker-magazine-card">
                    <div className="portrait-container">
                      <img src={speaker.image} alt={speaker.name} className="bw-portrait" />
                    </div>
                    <div className="speaker-details">
                      <span className="speaker-badge">{speaker.badge}</span>
                      <h3 className="speaker-name">{speaker.name}</h3>
                      <p className="speaker-role">{speaker.role}</p>
                      <p className="speaker-org">{speaker.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}

        {/* 04 // CTF CHAMPIONS & REWARDS */}
        {(activeSection === 'winners' || activeSection === 'all') && (
          <section className="editorial-screen-section full-width">
            <div className="full-screen-inner">
              <span className="editorial-num">04 // COMPETITIONS</span>
              <h2 className="editorial-title">CTF Challenge Champions & Honors</h2>

              <div className="winners-magazine-list">
                {ctfWinners.map((winner, index) => (
                  <div key={index} className="winner-magazine-row">
                    <div className="winner-photo-col">
                      <img src={winner.image} alt={winner.team} className="winner-photo" />
                    </div>
                    <div className="winner-meta-col">
                      <span className="winner-tag">{winner.position}</span>
                      <h3 className="winner-team">{winner.team}</h3>
                      <div className="winner-cash">{winner.prize}</div>
                      <ul className="winner-perks-list">
                        {winner.perks.map((perk, pIdx) => (
                          <li key={pIdx}>— {perk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}

        {/* 05 // CHRONOLOGICAL EVENT TIMELINE */}
        {(activeSection === 'timeline' || activeSection === 'all') && (
          <section className="editorial-screen-section text-left">
            <div className="editorial-screen-inner">
              <div className="editorial-text-col">
                <span className="editorial-num">05 // TIMELINE</span>
                <h2 className="editorial-title">Chronological Event Proceedings</h2>

                <div className="timeline-magazine-container">
                  {timelineEvents.map((evt, index) => (
                    <div key={index} className="timeline-magazine-row">
                      <div className="timeline-year-col">
                        <h3>{evt.year}</h3>
                        <span>{evt.date}</span>
                      </div>
                      <div className="timeline-line-col"></div>
                      <div className="timeline-info-col">
                        <h4>{evt.title}</h4>
                        <p>{evt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="editorial-media-col">
                <img src={gallery4} alt="CTF Arena Timeline" className="magazine-img" />
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}

        {/* 06 // RETROSPECTIVE PHOTO GALLERY */}
        {(activeSection === 'gallery' || activeSection === 'all') && (
          <section className="editorial-screen-section full-width">
            <div className="full-screen-inner">
              <span className="editorial-num">06 // ARCHIVE</span>
              <h2 className="editorial-title">Retrospective Photo Exhibition</h2>

              <div className="gallery-magazine-grid">
                {galleryImages.map((img) => (
                  <div key={img.id} className="gallery-magazine-item">
                    <img src={img.src} alt={img.title} className="gallery-magazine-img" />
                    <div className="gallery-magazine-caption">
                      <span>{img.caption}</span>
                      <h4>{img.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}

        {/* 07 // ECOSYSTEM PARTNERS & SPONSORS */}
        {(activeSection === 'sponsors' || activeSection === 'all') && (
          <section className="editorial-screen-section full-width">
            <div className="full-screen-inner text-center">
              <span className="editorial-num">07 // ECOSYSTEM</span>
              <h2 className="editorial-title">Partners & Corporate Alliance</h2>

              <div className="monochrome-marquee-container">
                <div className="monochrome-track">
                  <div className="monochrome-set">
                    {sponsorsLogos.map((logo, idx) => (
                      <img key={idx} src={logo.src} alt={logo.alt} className="partner-logo-bw" />
                    ))}
                  </div>
                  <div className="monochrome-set" aria-hidden="true">
                    {sponsorsLogos.map((logo, idx) => (
                      <img key={`dup-${idx}`} src={logo.src} alt={logo.alt} className="partner-logo-bw" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="monochrome-marquee-container mt-12">
                <div className="monochrome-track reverse">
                  <div className="monochrome-set">
                    {partnersLogos.map((logo, idx) => (
                      <img key={idx} src={logo.src} alt={logo.alt} className="partner-logo-bw" />
                    ))}
                  </div>
                  <div className="monochrome-set" aria-hidden="true">
                    {partnersLogos.map((logo, idx) => (
                      <img key={`dup-${idx}`} src={logo.src} alt={logo.alt} className="partner-logo-bw" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr className="magazine-line" />
          </section>
        )}
      </div>

      {/* EDITORIAL MINIMAL FOOTER */}
      <footer className="archive-footer">
        <div className="archive-footer-inner">
          <div className="footer-col">
            <h3>Cyberonites</h3>
            <p>Department of CEA • GLA University, Mathura</p>
          </div>
          <div className="footer-col">
            <span className="footer-meta">CONTACT</span>
            <p>support@cyberonites.com</p>
          </div>
          <div className="footer-col">
            <span className="footer-meta">CONNECT</span>
            <div className="social-links-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="archive-footer-bottom">
          <p>© 2025 Cyberonites Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Escalatexv2;
