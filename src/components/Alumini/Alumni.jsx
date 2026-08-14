import React from "react";
import "./Alumni.css";


import adeptiaLogo from "../../img/company-logo/adeptia.webp";
import capgeminiLogo from "../../img/company-logo/capgemini.webp";
import cars24Logo from "../../img/company-logo/cars24.webp";
import casioLogo from "../../img/company-logo/casio.webp";
import cegLogo from "../../img/company-logo/ceg.webp";
import deoliteLogo from "../../img/company-logo/deolite.webp";
import dsLogo from "../../img/company-logo/ds.webp";
import fluitechLogo from "../../img/company-logo/fluidech.webp";
import glLogo from "../../img/company-logo/gl.webp";
import grittyLogo from "../../img/company-logo/gritty_tech_cover.webp";
import hackeroneLogo from "../../img/company-logo/hackerone.webp";
import hackitLogo from "../../img/company-logo/hacklt.webp";
import hcltechLogo from "../../img/company-logo/hcltech.webp";
import juspayLogo from "../../img/company-logo/juspay.webp";
import netSPILogo from "../../img/company-logo/netSPILogo.webp";
import paypalLogo from "../../img/company-logo/paypal.webp";
import pertsolLogo from "../../img/company-logo/pertsol.webp";
import sentineloneLogo from "../../img/company-logo/sentinelone.webp";
import sophosLogo from "../../img/company-logo/sophos.webp";
import thalesLogo from "../../img/company-logo/sophos.webp";
import thisLogo from "../../img/company-logo/this.webp";
import ucertifyLogo from "../../img/company-logo/ucertify.webp";
import zebpayLogo from "../../img/company-logo/zebpay.webp";
import zscalerLogo from "../../img/company-logo/zscalerLogo.webp";
import zyppLogo from "../../img/company-logo/zypp.webp";
import meridianLogo from "../../img/company-logo/meridian.webp";


const Alumni = ({ heading = "OUR ALUMNI" }) => {
  const companies = [
    {
      name: "Adeptia",
      logo: adeptiaLogo,
      url: "https://www.adeptia.com/",
    },
    {
      name: "Capgemini",
      logo: capgeminiLogo,
      url: "https://www.capgemini.com/",
    },
    {
      name: "Cars24",
      logo: cars24Logo,
      url: "https://www.cars24.com/",
    },
    {
      name: "Casio",
      logo: casioLogo,
      url: "https://www.casio.com/",
    },
    {
      name: "CEG",
      logo: cegLogo,
      url: "https://www.ceg.com/",
    },
    {
      name: "Deloitte",
      logo: deoliteLogo,
      url: "https://www2.deloitte.com/",
    },
    {
      name: "DS",
      logo: dsLogo,
      url: "https://www.ds.com/",
    },
    {
      name: "FluiTech",
      logo: fluitechLogo,
      url: "https://fluitech.com/",
    },
    {
      name: "GLA University",
      logo: glLogo,
      url: "https://www.gla.ac.in/",
    },
    {
      name: "Gritty",
      logo: grittyLogo,
      url: "https://gritty.com/",
    },
    {
      name: "HackerOne",
      logo: hackeroneLogo,
      url: "https://www.hackerone.com/",
    },
    {
      name: "HackIT",
      logo: hackitLogo,
      url: "https://hackit.com/",
    },
    {
      name: "HCLTech",
      logo: hcltechLogo,
      url: "https://www.hcltech.com/",
    },
    {
      name: "Juspay",
      logo: juspayLogo,
      url: "https://juspay.in/",
    },
    {
      name: "NetSPI",
      logo: netSPILogo,
      url: "https://www.netspi.com/",
    },
    {
      name: "PayPal",
      logo: paypalLogo,
      url: "https://www.paypal.com/",
    },
    {
      name: "PertSol",
      logo: pertsolLogo,
      url: "https://www.pertsol.com/",
    },
    {
      name: "SentinelOne",
      logo: sentineloneLogo,
      url: "https://www.sentinelone.com/",
    },
    {
      name: "Sophos",
      logo: sophosLogo,
      url: "https://www.sophos.com/",
    },
    {
      name: "Thales",
      logo: thalesLogo,
      url: "https://www.thalesgroup.com/",
    },
    {
      name: "THIS",
      logo: thisLogo,
      url: "https://this.com/",
    },
    {
      name: "uCertify",
      logo: ucertifyLogo,
      url: "https://www.ucertify.com/",
    },
    {
      name: "ZebPay",
      logo: zebpayLogo,
      url: "https://zebpay.com/",
    },
    {
      name: "Zscaler",
      logo: zscalerLogo,
      url: "https://www.zscaler.com/",
    },
    {
      name: "Zypp",
      logo: zyppLogo,
      url: "https://zypp.app/",
    },
    {
      name: "Meridian",
      logo: meridianLogo,
      url: "https://meridian.app/",
    },
  ];

  const marqueeCompanies = [...companies, ...companies];

  return (
    <section className="alumni" id="alumni">

      {/* ==================================================
          BACKGROUND GRID
      ================================================== */}

      <div className="alumni__grid" />

      {/* ==================================================
          SECTION LABEL
      ================================================== */}

      <div className="alumni__label">
        <span className="alumni__label-line" />
        <span>{heading}</span>
      </div>

      {/* ==================================================
          WHITE DIAGONAL TRANSITION STRIP
      ================================================== */}

      <div className="alumni__strip-wrapper">
        <div className="alumni__strip">

          <div className="alumni__track">

            {marqueeCompanies.map((company, index) => (
              <React.Fragment
                key={`${company.name}-${index}`}
              >

                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alumni__item"
                  aria-label={`Visit ${company.name}`}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="alumni__logo"
                  />
                </a>

                <span
                  className="alumni__separator"
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

export default Alumni;