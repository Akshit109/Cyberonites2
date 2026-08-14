import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaCamera,
  FaClipboardCheck,
  FaUserTie,
  FaTerminal,
  FaUserFriends,
  FaShieldAlt,
  FaExclamationTriangle,
  FaArrowRight,
  FaPlay,
  FaChevronRight,
  FaCheck,
  FaStar,
  FaBolt,
  FaLock,
  FaLaptopCode,
  FaMicrochip,
  FaBrain,
  FaMedal,
  FaUniversity,
  FaArrowLeft,
  FaUserShield,
  FaServer,
  FaGraduationCap,
  FaChevronUp,
  FaChevronDown,
  FaAward,
  FaChevronLeft
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Footer from "../../../components/footer/Footer";

const intrusionXStyles = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Syncopate:wght@700;800&family=Space+Grotesk:wght@500;700&display=swap');

/* Master Styling for IntrusionX - Scoped */

.pure-bw-scope .font-syncopate,
.font-syncopate {
  font-family: 'Syncopate', 'Orbitron', sans-serif;
  letter-spacing: -0.02em;
}

.pure-bw-scope .font-orbitron,
.font-orbitron {
  font-family: 'Orbitron', 'Space Grotesk', sans-serif;
}

.pure-bw-scope .font-space,
.font-space {
  font-family: 'Space Grotesk', sans-serif;
}

/* Scoped Main Container */
.pure-bw-scope {
  background-color: #000000;
  color: #ffffff;
}

/* Text Stroke Utilities for Avant-Garde Typography */
.pure-bw-scope .hero-stroke-text {
  -webkit-text-stroke: 2.5px #ffffff;
  color: transparent;
  transition: all 0.5s ease;
}
.pure-bw-scope .hero-stroke-text:hover {
  color: #ffffff;
  -webkit-text-stroke: 0px transparent;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.pure-bw-scope .animate-spin-slow {
  animation: spinSlow 12s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.pure-bw-scope .animate-marquee {
  display: flex;
  width: 200%;
  animation: marquee 25s linear infinite;
}
.pure-bw-scope .animate-marquee:hover {
  animation-play-state: paused;
}

.pure-bw-scope .polaroid-frame {
  background-color: #ffffff;
  box-shadow: 6px 6px 0px 0px #ffffff;
  border: 2px solid #ffffff;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.pure-bw-scope .polaroid-frame * {
  color: #000000;
}
.pure-bw-scope .polaroid-frame:hover {
  transform: scale(1.04) rotate(0deg) !important;
  z-index: 40;
  box-shadow: 12px 12px 0px 0px #ffffff;
}

.pure-bw-scope .brutalist-card {
  border: 2px solid #ffffff;
  background: #000000;
  box-shadow: 6px 6px 0px 0px #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.pure-bw-scope .brutalist-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 10px 10px 0px 0px #ffffff;
}

.pure-bw-scope .brutalist-btn {
  border: 2px solid #ffffff;
  background: #000000;
  color: #ffffff;
  box-shadow: 4px 4px 0px 0px #ffffff;
  transition: all 0.2s ease;
}
.pure-bw-scope .brutalist-btn:hover {
  background: #ffffff;
  color: #000000;
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px 0px #ffffff;
}

.pure-bw-scope .category-box-interactive {
  border: 2px solid #ffffff;
  background: #000000;
  color: #ffffff;
  box-shadow: 6px 6px 0px 0px #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.pure-bw-scope .category-box-interactive:hover {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
  box-shadow: 8px 8px 0px 0px #ffffff;
  transform: translate(-2px, -2px);
}
.pure-bw-scope .category-box-interactive:hover * {
  color: #000000;
}

.pure-bw-scope .giant-hero-watermark {
  font-family: 'Syncopate', sans-serif;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
  user-select: none;
  pointer-events: none;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes slideInLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideInRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
@keyframes glow {
  0% { text-shadow: 0 0 5px rgba(0, 255, 204, 0.3); }
  50% { text-shadow: 0 0 20px rgba(0, 255, 204, 0.5), 0 0 30px rgba(0, 255, 204, 0.3); }
  100% { text-shadow: 0 0 5px rgba(0, 255, 204, 0.3); }
}
@keyframes terminalBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes gridPulse {
  0% { opacity: 0.15; }
  50% { opacity: 0.25; }
  100% { opacity: 0.15; }
}
@keyframes flicker {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.8; }
}
@keyframes loadBar {
  from { width: 0; }
  to { width: 100%; }
}

.pure-bw-scope .animate-fadeIn { animation: fadeIn 1s ease forwards; }
.pure-bw-scope .animate-slideUp { animation: slideUp 0.8s ease forwards; }
.pure-bw-scope .animate-slideInLeft { animation: slideInLeft 0.8s ease forwards; }
.pure-bw-scope .animate-slideInRight { animation: slideInRight 0.8s ease forwards; }
.pure-bw-scope .animate-pulse { animation: pulse 2s infinite; }
.pure-bw-scope .animate-glow { animation: glow 2s infinite; }
.pure-bw-scope .animate-terminalBlink { animation: terminalBlink 1s step-start infinite; }
.pure-bw-scope .animate-gridPulse { animation: gridPulse 4s infinite; }
.pure-bw-scope .animate-flicker { animation: flicker 3s linear infinite; }
.pure-bw-scope .animate-scanline { animation: scanline 3s linear infinite; }

.pure-bw-scope .delay-100 { animation-delay: 100ms; }
.pure-bw-scope .delay-200 { animation-delay: 200ms; }
.pure-bw-scope .delay-300 { animation-delay: 300ms; }
.pure-bw-scope .delay-400 { animation-delay: 400ms; }
.pure-bw-scope .delay-500 { animation-delay: 500ms; }
.pure-bw-scope .delay-600 { animation-delay: 600ms; }
.pure-bw-scope .delay-700 { animation-delay: 700ms; }
.pure-bw-scope .delay-800 { animation-delay: 800ms; }

.pure-bw-scope .hover-scale { transition: transform 0.3s ease; }
.pure-bw-scope .hover-scale:hover { transform: scale(1.05); }

.pure-bw-scope .hover-glow { transition: box-shadow 0.3s ease, text-shadow 0.3s ease; }
.pure-bw-scope .hover-glow:hover {
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
  text-shadow: 0 0 8px rgba(0, 255, 204, 0.5);
}

.pure-bw-scope .terminal-entry {
  overflow: hidden;
  border-right: 2px solid #00ffcc;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), cursorBlink 0.75s step-end infinite;
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes cursorBlink {
  from, to { border-color: transparent }
  50% { border-color: #00ffcc; }
}

.pure-bw-scope .reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.5, 0, 0, 1);
}
.pure-bw-scope .reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.pure-bw-scope .cyber-card {
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.pure-bw-scope .cyber-card:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 15px 30px rgba(0, 255, 204, 0.2);
}

.pure-bw-scope .terminal-open {
  animation: terminalOpen 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
@keyframes terminalOpen {
  from { max-height: 0; opacity: 0; }
  to { max-height: 2000px; opacity: 1; }
}

/* Glitch Effect Styles */
.pure-bw-scope .glitch-hero-container {
  position: relative;
  padding: 120px 0;
  text-align: center;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 204, 0.3);
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
}
.pure-bw-scope .glitch-environment {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  opacity: 0.4;
  filter: blur(3px);
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.pure-bw-scope .glitch-title {
  font-size: clamp(40px, 10vw, 100px);
  line-height: 1;
  display: inline-block;
  color: #fff;
  z-index: 2;
  letter-spacing: 10px;
  font-family: monospace;
  font-weight: bold;
  filter: drop-shadow(0 0 10px rgba(0, 255, 204, 0.7));
}
.pure-bw-scope .glitch-subtitle {
  font-family: monospace;
  font-size: clamp(15px, 4vw, 20px);
  margin-top: 20px;
  letter-spacing: 5px;
  color: #00ffcc;
}
.pure-bw-scope .glitch-layers { position: relative; }
.pure-bw-scope .glitch-layers::before,
.pure-bw-scope .glitch-layers::after {
  content: attr(data-text);
  position: absolute;
  width: 110%;
  z-index: -1;
}
.pure-bw-scope .glitch-layers::before { top: 10px; left: 15px; color: #e0287d; }
.pure-bw-scope .glitch-layers::after { top: 5px; left: -10px; color: #1bc7fb; }
.pure-bw-scope .glitch-paths { animation: glitch-paths 5s step-end infinite; }

@keyframes glitch-paths {
  0% {
    clip-path: polygon(
      0% 43%, 83% 43%, 83% 22%, 23% 22%, 23% 24%, 91% 24%, 91% 26%, 18% 26%, 18% 83%, 29% 83%, 29% 17%, 41% 17%, 41% 39%, 18% 39%, 18% 82%, 54% 82%, 54% 88%, 19% 88%, 19% 4%, 39% 4%, 39% 14%, 76% 14%, 76% 52%, 23% 52%, 23% 35%, 19% 35%, 19% 8%, 36% 8%, 36% 31%, 73% 31%, 73% 16%, 1% 16%, 1% 56%, 50% 56%, 50% 8%
    );
  }
  5% {
    clip-path: polygon(
      0% 29%, 44% 29%, 44% 83%, 94% 83%, 94% 56%, 11% 56%, 11% 64%, 94% 64%, 94% 70%, 88% 70%, 88% 32%, 18% 32%, 18% 96%, 10% 96%, 10% 62%, 9% 62%, 9% 84%, 68% 84%, 68% 50%, 52% 50%, 52% 55%, 35% 55%, 35% 87%, 25% 87%, 25% 39%, 15% 39%, 15% 88%, 52% 88%
    );
  }
  30% {
    clip-path: polygon(
      0% 53%, 93% 53%, 93% 62%, 68% 62%, 68% 37%, 97% 37%, 97% 89%, 13% 89%, 13% 45%, 51% 45%, 51% 88%, 17% 88%, 17% 54%, 81% 54%, 81% 75%, 79% 75%, 79% 76%, 38% 76%, 38% 28%, 61% 28%, 61% 12%, 55% 12%, 55% 62%, 68% 62%, 68% 51%, 0% 51%, 0% 92%, 63% 92%, 63% 4%, 65% 4%
    );
  }
  1%, 7%, 33%, 47%, 78%, 93% { clip-path: none; }
}

.pure-bw-scope .glitch-movement { position: relative; animation: glitch-movement 8s step-end infinite; }
@keyframes glitch-movement {
  0% { top: 0px; left: -20px; }
  15% { top: 10px; left: 10px; }
  60% { top: 5px; left: -10px; }
  75% { top: -5px; left: 20px; }
  100% { top: 10px; left: 5px; }
}
.pure-bw-scope .glitch-opacity { animation: glitch-opacity 5s step-end infinite; }
@keyframes glitch-opacity {
  0% { opacity: 0.1; }
  5% { opacity: 0.7; }
  30% { opacity: 0.4; }
  45% { opacity: 0.6; }
  76% { opacity: 0.4; }
  90% { opacity: 0.8; }
  1%, 7%, 33%, 47%, 78%, 93% { opacity: 0; }
}
.pure-bw-scope .glitch-font { animation: glitch-font 7s step-end infinite; }
@keyframes glitch-font {
  0% { font-weight: 100; color: #e0287d; filter: blur(3px); }
  20% { font-weight: 500; color: #fff; filter: blur(0); }
  50% { font-weight: 300; color: #1bc7fb; filter: blur(2px); }
  60% { font-weight: 700; color: #fff; filter: blur(0); }
  90% { font-weight: 500; color: #e0287d; filter: blur(6px); }
}
.pure-bw-scope .glitch-text span { animation: glitch-paths 5s step-end infinite; }
.pure-bw-scope .glitch-text::before {
  animation: glitch-paths 5s step-end infinite, glitch-opacity 5s step-end infinite, glitch-font 8s step-end infinite, glitch-movement 10s step-end infinite;
}
.pure-bw-scope .glitch-text::after {
  animation: glitch-paths 5s step-end infinite, glitch-opacity 5s step-end infinite, glitch-font 7s step-end infinite, glitch-movement 8s step-end infinite;
}
.pure-bw-scope .scanner {
  position: absolute; top: 0; left: 0; width: 100%; height: 5px;
  background: linear-gradient(to right, transparent, rgba(0, 255, 204, 0.8), transparent);
  opacity: 0.8; animation: scan 4s linear infinite;
}
@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
.pure-bw-scope .glitch-event-details { margin-top: 30px; display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.pure-bw-scope .glitch-detail-item { display: flex; align-items: center; font-family: monospace; }
.pure-bw-scope .glitch-detail-icon { margin-right: 10px; animation: pulse 2s infinite; }
@media (max-width: 768px) {
  .pure-bw-scope .glitch-hero-container { padding: 80px 0; }
  .pure-bw-scope .glitch-event-details { gap: 20px; }
}

/* Swiper Custom Styles - Scoped */
.pure-bw-scope .carousel-container { width: 100%; padding: 20px 0; position: relative; }
.pure-bw-scope .event-swiper { width: 100%; padding-bottom: 40px; margin: 0 auto; }
.pure-bw-scope .event-swiper .swiper-slide-custom { width: 350px; transition: transform 0.3s ease; will-change: transform; }
.pure-bw-scope .carousel-card { width: 100%; height: 100%; position: relative; border-radius: 10px; overflow: hidden; box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2); background-color: #1f2937; transition: all 0.3s; }
.pure-bw-scope .carousel-card:hover { transform: translateY(-10px); box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3); }
.pure-bw-scope .carousel-image-container { transform: translateZ(0); backface-visibility: hidden; perspective: 1000px; }
.pure-bw-scope .carousel-image-container img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pure-bw-scope .carousel-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.pure-bw-scope .carousel-card:hover .carousel-image { transform: scale(1.05); }
.pure-bw-scope .carousel-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent); transition: all 0.3s; }
.pure-bw-scope .carousel-title { color: #fff; font-weight: 600; font-size: 18px; margin: 0; opacity: 0.9; text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); }
.pure-bw-scope .event-swiper .swiper-button-next, .pure-bw-scope .event-swiper .swiper-button-prev { color: #fff; background-color: rgba(30, 41, 59, 0.7); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; }
.pure-bw-scope .event-swiper .swiper-button-next:after, .pure-bw-scope .event-swiper .swiper-button-prev:after { font-size: 18px; font-weight: bold; }
.pure-bw-scope .event-swiper .swiper-button-next:hover, .pure-bw-scope .event-swiper .swiper-button-prev:hover { background-color: rgba(37, 99, 235, 0.9); }
.pure-bw-scope .event-swiper .swiper-pagination { bottom: 10px; }
.pure-bw-scope .event-swiper .swiper-pagination-bullet { width: 8px; height: 8px; background: rgba(255, 255, 255, 0.5); opacity: 1; transition: all 0.3s; }
.pure-bw-scope .event-swiper .swiper-pagination-bullet-active { background: rgb(37, 99, 235); width: 24px; border-radius: 4px; }
.pure-bw-scope .event-swiper .swiper-slide-shadow-left, .pure-bw-scope .event-swiper .swiper-slide-shadow-right { background-image: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent); }

.pure-bw-scope .winner-swiper { width: 100%; border-radius: 0; margin-bottom: 0; }
.pure-bw-scope .winner-swiper .swiper-slide { transition: opacity 300ms ease; border-radius: 0; }
.pure-bw-scope .winner-swiper .swiper-button-next, .pure-bw-scope .winner-swiper .swiper-button-prev { color: rgba(255, 255, 255, 0.7); background-color: rgba(0, 0, 0, 0.3); width: 35px; height: 35px; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
.pure-bw-scope .winner-swiper .swiper-button-next:after, .pure-bw-scope .winner-swiper .swiper-button-prev:after { font-size: 16px; }
.pure-bw-scope .winner-swiper .swiper-pagination { bottom: 5px; }
.pure-bw-scope .winner-swiper .swiper-pagination-bullet { background: rgba(255, 255, 255, 0.7); opacity: 0.5; }
.pure-bw-scope .winner-swiper .swiper-pagination-bullet-active { opacity: 1; background: #ffffff; }

.pure-bw-scope .winner-swiper.swiper-primary .swiper-button-next, .pure-bw-scope .winner-swiper.swiper-primary .swiper-button-prev { background-color: rgba(22, 163, 74, 0.3); }
.pure-bw-scope .winner-swiper.swiper-primary .swiper-pagination-bullet-active { background: rgb(22, 163, 74); }
.pure-bw-scope .winner-swiper.swiper-secondary .swiper-button-next, .pure-bw-scope .winner-swiper.swiper-secondary .swiper-button-prev { background-color: rgba(107, 114, 128, 0.3); }
.pure-bw-scope .winner-swiper.swiper-secondary .swiper-pagination-bullet-active { background: rgb(107, 114, 128); }
.pure-bw-scope .winner-swiper.swiper-tertiary .swiper-button-next, .pure-bw-scope .winner-swiper.swiper-tertiary .swiper-button-prev { background-color: rgba(234, 88, 12, 0.3); }
.pure-bw-scope .winner-swiper.swiper-tertiary .swiper-pagination-bullet-active { background: rgb(234, 88, 12); }

.pure-bw-scope .team-swiper { width: 100%; border-radius: 0; margin-bottom: 0; }
.pure-bw-scope .team-swiper .swiper-slide { transition: opacity 300ms ease; border-radius: 0; }
.pure-bw-scope .team-swiper .swiper-button-next, .pure-bw-scope .team-swiper .swiper-button-prev { color: rgba(255, 255, 255, 0.7); background-color: rgba(0, 0, 0, 0.3); width: 35px; height: 35px; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
.pure-bw-scope .team-swiper .swiper-button-next:after, .pure-bw-scope .team-swiper .swiper-button-prev:after { font-size: 16px; }
.pure-bw-scope .team-swiper .swiper-pagination { bottom: 5px; }
.pure-bw-scope .team-swiper .swiper-pagination-bullet { background: rgba(255, 255, 255, 0.7); opacity: 0.5; }
.pure-bw-scope .team-swiper .swiper-pagination-bullet-active { opacity: 1; background: #EC4899; }
.pure-bw-scope .team-swiper .swiper-button-next, .pure-bw-scope .team-swiper .swiper-button-prev { background-color: rgba(236, 72, 153, 0.3); }
.pure-bw-scope .team-swiper .swiper-button-next:hover, .pure-bw-scope .team-swiper .swiper-button-prev:hover { background-color: rgba(236, 72, 153, 0.5); }

.pure-bw-scope .evaluation-swiper { width: 100%; border-radius: 0; margin-bottom: 0; }
.pure-bw-scope .evaluation-swiper .swiper-slide { transition: opacity 300ms ease; border-radius: 0; }
.pure-bw-scope .evaluation-swiper .swiper-button-next, .pure-bw-scope .evaluation-swiper .swiper-button-prev { color: rgba(255, 255, 255, 0.7); background-color: rgba(8, 145, 178, 0.3); width: 35px; height: 35px; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
.pure-bw-scope .evaluation-swiper .swiper-button-next:after, .pure-bw-scope .evaluation-swiper .swiper-button-prev:after { font-size: 16px; }
.pure-bw-scope .evaluation-swiper .swiper-pagination { bottom: 5px; }
.pure-bw-scope .evaluation-swiper .swiper-pagination-bullet { background: rgba(255, 255, 255, 0.7); opacity: 0.5; }
.pure-bw-scope .evaluation-swiper .swiper-pagination-bullet-active { opacity: 1; background: #06b6d4; }
.pure-bw-scope .evaluation-swiper .swiper-button-next:hover, .pure-bw-scope .evaluation-swiper .swiper-button-prev:hover { background-color: rgba(8, 145, 178, 0.5); }

@media (max-width: 768px) {
  .pure-bw-scope .event-swiper .swiper-slide-custom { width: 280px; }
  .pure-bw-scope .event-swiper .swiper-button-next, .pure-bw-scope .event-swiper .swiper-button-prev { width: 35px; height: 35px; }
  .pure-bw-scope .carousel-content { padding: 15px; }
  .pure-bw-scope .carousel-title { font-size: 16px; }
}
@media (max-width: 480px) {
  .pure-bw-scope .event-swiper .swiper-slide-custom { width: 220px; }
  .pure-bw-scope .event-swiper .swiper-button-next:after, .pure-bw-scope .event-swiper .swiper-button-prev:after { font-size: 14px; }
  .pure-bw-scope .event-swiper .swiper-pagination-bullet { width: 6px; height: 6px; }
  .pure-bw-scope .event-swiper .swiper-pagination-bullet-active { width: 18px; }
}


`;

// -------------------- IMAGE ASSETS --------------------
import eventBannerImgFile from "../../../img/intrusionX/D1.jpg";
import judgesImgFile from "../../../img/intrusionX/Judges.webp";
import teamsImgFile from "../../../img/intrusionX/Teams.webp";
import winnersImgFile from "../../../img/intrusionX/Winners.webp";

import judgesPanelImgFile from "../../../img/intrusionX/DSC_0572.webp";
import cyberYaanCEOImgFile from "../../../img/intrusionX/DSC_0820.webp";
import additionalEvalImgFile from "../../../img/intrusionX/DSC_7269.webp";

import teamWithAlumniImage1 from "../../../img/intrusionX/DSC_7157.webp";
import teamWithAlumniImage2 from "../../../img/intrusionX/DSC_7151.webp";
import teamWithAlumniImage3 from "../../../img/intrusionX/DSC_7155.webp";

import winnerImg1File from "../../../img/intrusionX/DSC_0540.webp";
import winnerImg2File from "../../../img/intrusionX/DSC_7101.webp";
import winnerImg3File from "../../../img/intrusionX/DSC_7300.webp";
import winnerImg4File from "../../../img/intrusionX/DSC_7419.webp";
import runnerUpImg1File from "../../../img/intrusionX/DSC_7414.webp";
import runnerUpImg2File from "../../../img/intrusionX/DSC_7105.webp";
import secondRunnerUpImg1File from "../../../img/intrusionX/DSC_7411.webp";
import secondRunnerUpImg2File from "../../../img/intrusionX/DSC_7436.webp";

import teamImage1 from "../../../img/intrusionX/DSC_7100.webp";
import teamImage2 from "../../../img/intrusionX/DSC_7091.webp";
import teamImage3 from "../../../img/intrusionX/DSC_7087.webp";
import teamImage4 from "../../../img/intrusionX/DSC_0809.webp";
import teamImage5 from "../../../img/intrusionX/DSC_7105.webp";
import teamImage6 from "../../../img/intrusionX/DSC_7101.webp";
import teamImage7 from "../../../img/intrusionX/DSC_7106.webp";
import teamImage8 from "../../../img/intrusionX/DSC_7109.webp";
import teamImage9 from "../../../img/intrusionX/DSC_7116.webp";
import teamImage10 from "../../../img/intrusionX/DSC_7117.webp";
import teamImage11 from "../../../img/intrusionX/DSC_7120.webp";
import teamImage12 from "../../../img/intrusionX/DSC_7122.webp";
import teamImage13 from "../../../img/intrusionX/DSC_7124.webp";
import teamImage14 from "../../../img/intrusionX/DSC_7126.webp";
import teamImage15 from "../../../img/intrusionX/DSC_7128.webp";
import teamImage16 from "../../../img/intrusionX/DSC_7129.webp";
import teamImage17 from "../../../img/intrusionX/DSC_7279.webp";

import evaluationImage1 from "../../../img/intrusionX/DSC_7354.webp";
import evaluationImage2 from "../../../img/intrusionX/DSC_7331.webp";
import evaluationImage3 from "../../../img/intrusionX/DSC_7319.webp";
import evaluationImage4 from "../../../img/intrusionX/DSC_7305.webp";
import evaluationImage5 from "../../../img/intrusionX/DSC_7300.webp";
import evaluationImage6 from "../../../img/intrusionX/DSC_7292.webp";
import evaluationImage7 from "../../../img/intrusionX/DSC_7264.webp";
import evaluationImage8 from "../../../img/intrusionX/DSC_7269.webp";

import judgeDetailImage1 from "../../../img/intrusionX/DSC_0650.webp";
import judgeDetailImage2 from "../../../img/intrusionX/DSC_0657.webp";
import judgeDetailImage3 from "../../../img/intrusionX/DSC_0647.webp";
import judgeDetailImage4 from "../../../img/intrusionX/DSC_7396.webp";
import judgeDetailImage5 from "../../../img/intrusionX/DSC_0643.webp";
import judgeDetailImage6 from "../../../img/intrusionX/DSC_0628.webp";
import judgeDetailImage7 from "../../../img/intrusionX/DSC_0623.webp";

import guestDetailImage1 from "../../../img/intrusionX/DSC_0469.webp";
import guestDetailImage2 from "../../../img/intrusionX/DSC_0473.webp";
import guestDetailImage3 from "../../../img/intrusionX/DSC_0477.webp";
import guestDetailImage4 from "../../../img/intrusionX/DSC_0486.webp";

import cyberyaanLogo from "../../../img/intrusionX/web-logo.webp";
import alteredSecurityLogo from "../../../img/sponsor-logo/altered-security.webp";
import unstopLogo from "../../../img/intrusionX/unstop-logo.webp";
import xyzLogo from "../../../img/intrusionX/xyz-logo.webp";

import coordinatorImg from "../../../img/intrusionX/DSC_0486.webp";
import mentorImage1 from "../../../img/intrusionX/DSC_0469.webp";
import mentorImage2 from "../../../img/intrusionX/DSC_0477.webp";
import coMentorImg from "../../../img/intrusionX/DSC_0477.webp";

const eventBannerImg = eventBannerImgFile;
const judgesImg = judgesImgFile;
const teamsImg = teamsImgFile;
const winnersImg = winnersImgFile;

const judgesPanelImg = judgesPanelImgFile;
const cyberYaanCEOImg = cyberYaanCEOImgFile;
const additionalEvalImg = additionalEvalImgFile;

const teamWithAlumniImages = [teamWithAlumniImage1, teamWithAlumniImage2, teamWithAlumniImage3];

const firstPlaceWinnerImages = [winnerImg1File, winnerImg2File, winnerImg3File, winnerImg4File];
const secondPlaceWinnerImages = [runnerUpImg1File, runnerUpImg2File];
const thirdPlaceWinnerImages = [secondRunnerUpImg1File, secondRunnerUpImg2File];

const teamImages = [
  teamImage1, teamImage2, teamImage3, teamImage4, teamImage5, teamImage6,
  teamImage7, teamImage8, teamImage9, teamImage10, teamImage11, teamImage12,
  teamImage13, teamImage14, teamImage15, teamImage16, teamImage17
];

const evaluationImages = [
  evaluationImage1, evaluationImage2, evaluationImage3, evaluationImage4,
  evaluationImage5, evaluationImage6, evaluationImage7, evaluationImage8
];

const judgeDetailImages = [
  judgeDetailImage1, judgeDetailImage2, judgeDetailImage3, judgeDetailImage4,
  judgeDetailImage5, judgeDetailImage6, judgeDetailImage7
];

const guestDetailImages = [
  guestDetailImage1, guestDetailImage2, guestDetailImage3, guestDetailImage4
];

const sponsorLogos = {
  cyberyaan: cyberyaanLogo,
  alteredSecurity: alteredSecurityLogo,
  unstop: unstopLogo,
  xyz: xyzLogo
};

const facultyCoordinatorImg = coordinatorImg;
const mentorImages = {
  drSandeep: mentorImage1,
  drArvind: mentorImage2
};

// -------------------- EVENT DATA --------------------
const statistics = [
  { label: "Total Teams", value: "25", icon: "FaUsers" },
  { label: "External Teams", value: "10", icon: "FaUniversity" },
  { label: "Internal Teams", value: "15", icon: "FaGraduationCap" },
  { label: "Prize Pool", value: "₹3,00,000", icon: "FaTrophy" }
];

const highlights = [
  "25 Dynamic Teams Participation",
  "24-Hour Non-Stop Hacking",
  "Expert Panel of Judges",
  "Hands-on Cybersecurity Challenges",
  "Attractive Prizes & Certifications",
  "Networking with Industry Professionals"
];

const navigationSections = [
  { id: "overview", name: "Overview", iconName: "FaTerminal" },
  { id: "challenges", name: "Challenges", iconName: "FaShieldAlt" },
  { id: "winners", name: "Winners", iconName: "FaTrophy" },
  { id: "teams", name: "Teams", iconName: "FaUsers" },
  { id: "judges", name: "Judges", iconName: "FaUserTie" },
  { id: "evaluation", name: "Evaluation", iconName: "FaClipboardCheck" },
  { id: "sponsors", name: "Sponsors", iconName: "FaHandshake" },
  { id: "gallery", name: "Gallery", iconName: "FaCamera" }
];

const sectionColors = {
  overview: "cyan",
  challenges: "red",
  sponsors: "green",
  teams: "magenta",
  judges: "yellow",
  evaluation: "cyan",
  winners: "green",
  gallery: "magenta"
};

const winners = [
  {
    name: "Team Captcha_Unrecognised",
    college: "MRIIS, Faridabad",
    prize: "₹15,000 + ₹5,000 & CEH Practical Voucher (Cyberyaan)",
    position: "1st Prize",
    variant: "primary",
    prizeDetails: [
      "Cash Prize: ₹15,000",
      "Additional Prize: ₹5,000",
      "CEH Practical Voucher (Sponsored by Cyberyaan)"
    ],
    achievement: "Team Captcha_Unrecognised demonstrated exceptional skills in solving complex cybersecurity challenges, showcasing innovative approaches to penetration testing and vulnerability analysis.",
    images: firstPlaceWinnerImages
  },
  {
    name: "Team Deathly Hallows",
    college: "GLA University (1st Year Team)",
    prize: "₹10,000 + 3 CRTP Certificates (Altered Security)",
    position: "2nd Prize",
    variant: "secondary",
    prizeDetails: [
      "Cash Prize: ₹10,000",
      "3 CRTP Certificates (Sponsored by Altered Security)"
    ],
    images: secondPlaceWinnerImages
  },
  {
    name: "Team Cyber Sentinels",
    college: "GLA University",
    prize: "₹5,000",
    position: "3rd Prize",
    variant: "tertiary",
    prizeDetails: [
      "Cash Prize: ₹5,000"
    ],
    images: thirdPlaceWinnerImages
  }
];

const guests = [
  { name: "Mr. Aman Singh Chauhan", role: "Security Researcher at HCL Technologies", expertise: "Web Application Security" },
  { name: "Mr. Lucky Thandel", role: "Security Researcher at HackIT", expertise: "Vulnerability Research & Bug Bounty" },
  { name: "Mr. Ritaj Sharma", role: "Security Consultant at Deloitte", expertise: "Security Assessment & Consulting" },
  { name: "Mr. Deepak Yadav", role: "Cyber Security Expert & Evangelist", expertise: "Network Security & Threat Analysis" },
  { name: "Mr. Pankaj Yadav", role: "Founder of Cyberyaan", expertise: "Cybersecurity Expert & Entrepreneur" },
  { name: "Mr. Mohsin Qureshi", role: "SME at Hack The Box, Trainer at Kyrion Technologies", expertise: "Penetration Testing & Security Research" },
  { name: "Mr. Kashish Kanojia", role: "Founder & CEO of IDevSec", expertise: "Application Security & Secure Coding" },
  { name: "Mr. Deepak Kumar", role: "Co-Founder of IDevSec & OWASP Noida Lead", expertise: "OWASP Top 10 & Web Security" }
];

const participatingInstitutions = [
  "IIT Mandi", "PIET", "MRIIS, Faridabad", "Sagar Institute", "MIT", "IGNOU",
  "GLA University", "VIT Bhopal", "Graphic Era University", "Manipal University Jaipur",
  "Dev Bhumi University"
];

const judgingCriteria = [
  "Technical proficiency in solving cybersecurity challenges",
  "Innovation in approach and methodology",
  "Teamwork and collaboration",
  "Presentation and communication of solutions",
  "Ethical considerations and best practices"
];

const evaluationSteps = [
  { step: "01", title: "INITIAL ASSESSMENT", description: "Judges made an initial round to understand each team's approach" },
  { step: "02", title: "MIDWAY EVALUATION", description: "Technical progress check and feedback session with teams" },
  { step: "03", title: "FINAL PRESENTATIONS", description: "Teams demonstrated their complete solutions to the judging panel" },
  { step: "04", title: "DELIBERATION & RESULTS", description: "Judges deliberated to select winners based on comprehensive evaluation" }
];

const captions = [
  "Judges assessing team presentations and technical implementations",
  "Team explaining their approach to vulnerability exploitation",
  "Evaluation of defensive security measures implemented by participants",
  "Technical review of network penetration methodologies",
  "Judges analyzing solution effectiveness and innovation",
  "In-depth questioning of participants about their approach",
  "Final deliberation on technical merit and implementation"
];

const challengeProblems = [
  {
    id: 1,
    category: "IIOT",
    title: "SIIOT DEVICES ARE TARGETED BY MALWARE, CAUSING DISRUPTIONS AND SAFETY RISKS.",
    description: "IIOT NETWORKS POWER INDUSTRIES LIKE MANUFACTURING AND ENERGY BUT OFTEN LACK SECURITY, MAKING THEM VULNERABLE TO CYBER THREATS.",
    challenges: ["LACK OF ENDPOINT SECURITY IN LEGACY IIOT DEVICES.", "REAL-TIME MALWARE DETECTION WITHOUT AFFECTING SYSTEM PERFORMANCE."]
  },
  {
    id: 2,
    category: "IIOT",
    title: "FIRMWARE UPDATES IN IIOT DEVICES ARE VULNERABLE TO TAMPERING AND ATTACKS.",
    description: "MANY IIOT DEVICES LACK SECURE UPDATE MECHANISMS, LEAVING THEM OPEN TO MALICIOUS FIRMWARE INJECTION.",
    challenges: ["ENSURING FIRMWARE AUTHENTICITY AND INTEGRITY.", "SECURELY DELIVERING UPDATES OVER UNTRUSTED NETWORKS."]
  },
  {
    id: 3,
    category: "IIOT",
    title: "TRADITIONAL SECURITY MONITORING IS INEFFECTIVE AGAINST ADVANCED CYBER THREATS.",
    description: "IIOT GENERATES VAST OPERATIONAL DATA, REQUIRING AI-DRIVEN ANOMALY DETECTION TO PREVENT CYBERATTACKS.",
    challenges: ["DIFFERENTIATING BETWEEN LEGITIMATE CHANGES AND SECURITY THREATS.", "PROCESSING LARGE-SCALE IIOT DATA IN REAL-TIME."]
  },
  {
    id: 4,
    category: "AI",
    title: "AI MODELS ARE VULNERABLE TO ADVERSARIAL ATTACKS THAT MANIPULATE PREDICTIONS.",
    description: "ATTACKERS CRAFT INPUTS THAT MISLEAD AI, AFFECTING APPLICATIONS LIKE FRAUD DETECTION",
    challenges: ["DETECTING SUBTLE ADVERSARIAL INPUT MODIFICATIONS.", "PREVENTING MODEL PERFORMANCE DEGRADATION."]
  },
  {
    id: 5,
    category: "AI",
    title: "AI-GENERATED PHISHING ATTACKS BYPASS TRADITIONAL EMAIL FILTERING",
    description: "AI CAN ANALYZE LINGUISTIC PATTERNS AND METADATA TO DETECT PHISHING ATTEMPTS.",
    challenges: ["HIGH ACCURACY IN DISTINGUISHING PHISHING EMAILS", "HANDLING MULTILINGUAL AND EVOLVING PHISHING TACTICS"]
  },
  {
    id: 6,
    category: "AI",
    title: "AI MODELS CAN BE COMPROMISED THROUGH POISONED TRAINING DATA",
    description: "DATA POISONING LEADS TO INCORRECT AI DECISIONS, AFFECTING SECURITY-SENSITIVE APPLICATIONS.",
    challenges: ["DETECTING POISONED DATA IN LARGE DATASETS", "ENSURING AI MODEL ROBUSTNESS"]
  },
  {
    id: 7,
    category: "INSIDER",
    title: "EMPLOYEES WITH ACCESS TO CRITICAL DATA POSE SECURITY THREATS",
    description: "BEHAVIORAL ANALYTICS CAN HELP DETECT SUSPICIOUS INSIDER ACTIVITIES.",
    challenges: ["DIFFERENTIATING BETWEEN MALICIOUS AND UNINTENTIONAL ACTIONS", "DETECTING SOPHISTICATED INSIDER THREATS"]
  },
  {
    id: 8,
    category: "CLOUD",
    title: "MISCONFIGURATIONS IN CLOUD ENVIRONMENTS EXPOSE SENSITIVE DATA",
    description: "MANY ORGANIZATIONS STRUGGLE TO DETECT AND FIX MISCONFIGURATIONS PROMPTLY.",
    challenges: ["SCANNING CLOUD INFRASTRUCTURE WITHOUT PERFORMANCE ISSUES", "AUTOMATING REMEDIATION WITHOUT DISRUPTING OPERATIONS"]
  },
  {
    id: 9,
    category: "BLOCKCHAIN",
    title: "CENTRALIZED IDENTITY SYSTEMS ARE VULNERABLE TO BREACHES",
    description: "BLOCKCHAIN ENABLES DECENTRALIZED IDENTITY VERIFICATION FOR SECURE AUTHENTICATION.",
    challenges: ["ENSURING PRIVACY WHILE ENABLING SECURE VERIFICATION", "INTEGRATING BLOCKCHAIN WITH AUTHENTICATION SYSTEMS"]
  },
  {
    id: 10,
    category: "MALWARE",
    title: "TRADITIONAL ANTIVIRUS STRUGGLES TO DETECT EVOLVING MALWARE STRAINS",
    description: "AI-DRIVEN ANALYSIS CAN DETECT NEW THREATS BASED ON BEHAVIOR AND HEURISTICS.",
    challenges: ["DETECTING ZERO-DAY MALWARE VARIANTS", "REDUCING FALSE POSITIVES IN MALWARE CLASSIFICATION"]
  },
  {
    id: 11,
    category: "MALWARE",
    title: "TRADITIONAL ANTIVIRUS IS INEFFECTIVE AGAINST ZERO-DAY THREATS",
    description: "AI CAN DETECT SUSPICIOUS SYSTEM BEHAVIOR INDICATING NEW EXPLOITS.",
    challenges: ["ACCURATELY DETECTING NOVEL ATTACK PATTERNS", "BALANCING SECURITY WITH SYSTEM PERFORMANCE"]
  },
  {
    id: 12,
    category: "MALWARE",
    title: "USB DEVICES SPREAD MALWARE AND EXECUTE BADUSB ATTACKS",
    description: "A USB THREAT DETECTION TOOL CAN SCAN AND RESTRICT MALICIOUS ACTIVITIES.",
    challenges: ["PREVENTING UNAUTHORIZED DATA EXFILTRATION VIA USB"]
  },
  {
    id: 13,
    category: "MOBILE",
    title: "MALICIOUS APPS STEAL USER DATA",
    description: "AI-POWERED SCANNING CAN ANALYZE APP BEHAVIOR AND PERMISSIONS TO IDENTIFY THREATS.",
    challenges: ["DYNAMICALLY ANALYZING APP PERMISSIONS", "MINIMIZING FALSE POSITIVES"]
  },
  {
    id: 14,
    category: "MOBILE",
    title: "CYBERCRIMINALS EXPLOIT MOBILE PAYMENT VULNERABILITIES",
    description: "AI-BASED FRAUD DETECTION CAN SECURE TRANSACTIONS AGAINST UNAUTHORIZED ACTIVITIES.",
    challenges: ["DETECTING FRAUD WITHOUT DISRUPTING LEGITIMATE PAYMENTS"]
  },
  {
    id: 15,
    category: "DEEPFAKE",
    title: "DEEPFAKE TECHNOLOGY IS USED FOR IDENTITY THEFT AND MISINFORMATION",
    description: "AI-BASED DETECTION CAN HELP IDENTIFY DEEPFAKES IN REAL TIME.",
    challenges: ["IDENTIFYING DEEPFAKES WITH MINIMAL FALSE POSITIVES"]
  },
  {
    id: 16,
    category: "CLOUD",
    title: "SENSITIVE CLOUD DATA IS FREQUENTLY EXPOSED DUE TO MISCONFIGURATIONS",
    description: "AI CAN DETECT AND PREVENT DATA LEAKS BY MONITORING ACCESS PATTERNS.",
    challenges: ["DETECTING INSIDER THREATS WITHOUT PRIVACY VIOLATIONS"]
  },
  {
    id: 17,
    category: "MALWARE",
    title: "RANSOMWARE ENCRYPTS CRITICAL DATA AND DEMANDS RANSOM PAYMENTS",
    description: "AI-DRIVEN BEHAVIOR ANALYSIS CAN DETECT EARLY RANSOMWARE INDICATORS.",
    challenges: ["DETECTING RANSOMWARE IN REAL TIME BEFORE ENCRYPTION STARTS"]
  },
  {
    id: 18,
    category: "BLOCKCHAIN",
    title: "FINANCIAL INSTITUTIONS STRUGGLE TO TRACK AND DETECT ILLICIT MONEY LAUNDERING ACTIVITIES ACROSS GLOBAL TRANSACTIONS.",
    description: "MONEY LAUNDERING NETWORKS EXPLOIT WEAK COMPLIANCE MECHANISMS IN FINANCIAL SYSTEMS, MAKING IT DIFFICULT TO DETECT SUSPICIOUS ACTIVITIES IN REAL-TIME. AI-DRIVEN BEHAVIORAL ANALYSIS COMBINED WITH BLOCKCHAIN'S IMMUTABLE TRANSACTION RECORDS CAN IMPROVE AML COMPLIANCE.",
    challenges: ["HANDLING LARGE-SCALE FINANCIAL TRANSACTIONS WHILE DETECTING SUBTLE LAUNDERING PATTERNS.", "ENSURING BLOCKCHAIN-BASED TRACKING DOES NOT VIOLATE PRIVACY LAWS"]
  },
  {
    id: 19,
    category: "BLOCKCHAIN",
    title: "CROSS-BORDER PAYMENTS ARE SLOW, EXPENSIVE, AND VULNERABLE TO FRAUD DUE TO MULTIPLE INTERMEDIARIES.",
    description: "TRADITIONAL CROSS-BORDER PAYMENT SYSTEMS INVOLVE BANKS, CLEARINGHOUSES, AND REGULATORY BODIES, LEADING TO DELAYS AND SECURITY VULNERABILITIES. BLOCKCHAIN TECHNOLOGY CAN PROVIDE A DECENTRALIZED, SECURE, AND EFFICIENT ALTERNATIVE.",
    challenges: ["MAINTAINING COMPLIANCE WITH INTERNATIONAL FINANCIAL REGULATIONS", "PREVENTING DOUBLE-SPENDING AND TRANSACTION ROLLBACKS"]
  }
];

const eventTimeline = [
  { day: "DAY 1", title: "Registration & Kickoff", description: "Team Formation, Problem Statement" },
  { day: "NIGHT", title: "Hacking Session", description: "24-Hour Non-Stop Challenge" },
  { day: "DAY 2", title: "Presentations & Awards", description: "Evaluation, Prize Distribution" }
];

const eventLeaders = [
  "Dr. Sandeep Rathod – HOD, CEA",
  "Dr. Hitendra Garg – HOD, Specialization, CEA",
  "Dr. Asheesh Tiwari – Faculty Coordinator",
  "Akash Chaudhary – Assistant Professor",
  "Rahul Shandilya – Assistant Professor",
  "Shamsher Khan – Assistant Professor",
  "Shubham Shukla – Assistant Professor",
  "Deepak Kumar Sah – Assistant Professor",
  "Rohini Raina – Assistant Professor",
];

const problemStatementContributors = [
  { name: "Dr. Ram Kumar G", role: "Cybersecurity & Risk Leader, Global Automotive Company", experience: "22 years of", count: "3 problem statements" },
  { name: "Dr. Lalit Gupta", role: "President, Cybersecurity Council", experience: "30 years of", count: "4 problem statements" },
  { name: "Dhiraj Tandon", role: "Senior Solutions Architect, Binalyze", experience: "18 years of", count: "4 problem statements" },
  { name: "Sanjeev Multani", role: "Security Lead, Nuvollo Corp | Ex-Professor, DU", experience: "10 years of", count: "2 problem statements" },
  { name: "Mr. Mohsin Qureshi", role: "SME at Hack The Box, Trainer at Kyrion Technologies", experience: "10 years of", count: "5 problem statements" },
  { name: "Gaurav Gogia", role: "Security Engineer, Qualys", experience: "8 years of", count: "2 problem statements" }
];

const sponsorContributions = [
  {
    name: "Cyberyaan",
    contributions: [
      "CEH Certification for winners: ₹60,000",
      "₹5,000 Cash for Winners",
      "CEH Training for 3 anchors: ₹30,000",
      "Internships (2 months) for Club President & VP: ₹20,000/month",
      "50% Discount on CEH for other team members"
    ],
    totalValue: "₹2,85,000"
  },
  {
    name: "Altered Security",
    contributions: ["Sponsored 3 CRTP licenses worth $270 each"],
    totalValue: "$810 (Approx. ₹67,000)"
  },
  {
    name: ".xyz",
    contributions: ["Provided 50 domain names (1-year) worth $20 each"],
    totalValue: "$1,000 (Approx. ₹82,000)"
  },
  {
    name: "Unstop",
    contributions: ["Outreach support, media promotion & visibility"],
    totalValue: "Non-monetary"
  }
];

const testimonials = [
  { quote: "IntrusionX was one of the most intense and rewarding hackathons I've ever attended.", author: "Participant from IIT Mandi" },
  { quote: "Great platform for students to experience real-world cyber problem-solving. We'll definitely come back!", author: "Participant from VIT Bhopal" }
];

const sponsors = [
  { name: "CYBERYAAN", logo: "cyberyaan", role: "Premium Sponsor", contribution: "₹2,85,000" },
  { name: "ALTERED SECURITY", logo: "alteredSecurity", role: "Training Partner", contribution: "₹67,000" },
  { name: "UNSTOP", logo: "unstop", role: "Platform Partner", contribution: "Outreach & Promotion" },
  { name: ".XYZ", logo: "xyz", role: "Domain Partner", contribution: "₹82,000" }
];

const mentors = [
  { name: "Dr. Sandeep Rathod", role: "Primary Mentor", position: "Head of Department, CEA", expertise: "Cybersecurity Policy & Leadership", imgPath: "drSandeep" },
  { name: "Dr. Arvind Prasad", role: "Co-Mentor", position: "Assistant Professor, Cyberonites", expertise: "Network Security & Digital Forensics", imgPath: "drArvind" }
];

const challengeCategoriesList = [
  { name: "IIoT Security", color: "red" },
  { name: "AI Security", color: "blue" },
  { name: "Blockchain", color: "yellow" },
  { name: "Malware Analysis", color: "purple" },
  { name: "Mobile Security", color: "green" },
  { name: "Cloud Security", color: "orange" },
  { name: "Deepfake Detection", color: "gray" },
  { name: "Insider Threats", color: "indigo" }
];

// -------------------- HELPER HOOK --------------------
function useScrollPosition(threshold = 400) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return isScrolled;
}

// -------------------- SUB-COMPONENTS --------------------

const GlitchHeader = ({ onReturnClick, backgroundImage }) => {
  return (
    <div className="mb-8">
      <button
        onClick={onReturnClick}
        className="flex items-center text-blue-400 mb-4 border border-blue-900 px-4 py-2 rounded-sm bg-black/30 hover:bg-black/50 transition-colors hover-scale hover-glow z-20 relative"
      >
        <FaArrowLeft className="mr-2" />
        <span className="font-mono">RETURN TO HOME</span>
      </button>

      <div className="glitch-hero-container rounded-sm">
        <div
          className="glitch-environment"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="scanner"></div>
        <h1 className="glitch-title glitch-text glitch-layers" data-text="INTRUSION">
          <span>INTRUSION</span>
        </h1>
        <h1 className="glitch-title glitch-text glitch-layers text-[10em]" data-text="X">
          <span>X</span>
        </h1>

        <p className="glitch-subtitle">
          \\ A PREMIER CYBERSECURITY HACKATHON // <br /> \\ APRIL 11-12, 2025 //
        </p>

        <div className="mt-8 text-left inline-block bg-black/50 px-4 py-2 rounded-sm font-mono text-xs md:text-sm">
          <div className="text-blue-400">root@intrusionx:~#</div>
          <div className="flex">
            <span className="text-blue-400 mr-2">$</span>
            <span className="terminal-entry">./launch_hackathon --mode=cybersecurity --teams=25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FacultyCoordinator = ({ name, department }) => {
  return (
    <div className="mb-6 border-2 border-cyan-700/70 bg-black/40 p-6 rounded-sm shadow-lg shadow-cyan-900/20">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-6 lg:mb-0 lg:mr-8 relative">
          <div className="absolute inset-0 border-2 border-cyan-500 rounded-md transform rotate-3 bg-cyan-900/10"></div>
          <div className="relative z-10 w-64 h-64 rounded-md overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-900/30">
            <img
              src={facultyCoordinatorImg}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-cyan-800 text-cyan-100 px-3 py-1 rounded-sm z-20 shadow-md transform rotate-3 border border-cyan-500">
            <div className="flex items-center">
              <FaMedal className="mr-2 text-yellow-300" />
              <span className="font-mono text-sm">CLUB MENTOR</span>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-cyan-300 font-mono mb-3">{name}</h2>
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <FaUniversity className="text-cyan-400 mr-2" />
            <p className="text-cyan-200">{department}</p>
          </div>
          <div className="bg-cyan-900/20 p-4 border border-cyan-800/40 rounded-sm">
            <p className="text-cyan-100 italic">
              &quot;The IntrusionX hackathon was designed to challenge participants to think beyond conventional security approaches and develop innovative solutions for modern cyber threats.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Co_mentor = ({ name, department }) => {
  return (
    <div className="mb-6 border-2 border-cyan-700/70 bg-black/40 p-6 rounded-sm shadow-lg shadow-cyan-900/20">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-6 lg:mb-0 lg:mr-8 relative">
          <div className="absolute inset-0 border-2 border-cyan-500 rounded-md transform rotate-3 bg-cyan-900/10"></div>
          <div className="relative z-10 w-64 h-64 rounded-md overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-900/30">
            <img
              src={coMentorImg}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-cyan-800 text-cyan-100 px-3 py-1 rounded-sm z-20 shadow-md transform rotate-3 border border-cyan-500">
            <div className="flex items-center">
              <FaMedal className="mr-2 text-yellow-300" />
              <span className="font-mono text-sm">CO-MENTOR</span>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-cyan-300 font-mono mb-3">{name}</h2>
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <FaUniversity className="text-cyan-400 mr-2" />
            <p className="text-cyan-200">{department}</p>
          </div>
          <div className="bg-cyan-900/20 p-4 border border-cyan-800/40 rounded-sm">
            <p className="text-cyan-100 italic">
              &quot;IntrusionX challenged participants to create bold, modern solutions against today’s cyber threats.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntrusionCards = ({ list, rounded = "rounded-lg", shadow = "shadow-lg" }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {list.map((item) => (
        <div key={item.id} className={`bg-gray-800 ${rounded} ${shadow} overflow-hidden`}>
          <img
            src={item.imageUrl}
            alt={item.altText}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const MentorShowcase = ({ mentors }) => {
  return (
    <div className="mt-6 border border-cyan-900/60 bg-black/30 p-6 rounded-sm">
      <h4 className="text-cyan-400 font-mono text-xl mb-6 border-b border-cyan-900/50 pb-2 text-center flex items-center justify-center">
        <FaStar className="mr-2" /> EVENT MENTORS <FaStar className="ml-2" />
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((mentor, idx) => (
          <div key={idx} className="group overflow-hidden rounded-md relative">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-900 z-10"></div>
              <div className="absolute top-4 right-4 bg-black/80 text-cyan-300 font-mono text-xs py-1.5 px-3 rounded-sm z-20 flex items-center border border-cyan-700 backdrop-blur-sm shadow-md">
                {idx === 0 ? (
                  <><FaUserShield className="mr-2" /> PRIMARY MENTOR</>
                ) : (
                  <><FaServer className="mr-2" /> CO-MENTOR</>
                )}
              </div>
              <div className="h-80 overflow-hidden">
                {mentor.imgPath && mentorImages[mentor.imgPath] ? (
                  <img
                    src={mentorImages[mentor.imgPath]}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-cyan-900/40 flex items-center justify-center text-cyan-300 text-4xl font-bold">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
            </div>
            <div className="relative p-5 bg-gradient-to-b from-black to-cyan-950/10 border-x border-b border-cyan-900/60">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-700"></div>
              <div className="pl-3">
                <h3 className="text-cyan-300 font-mono font-bold text-xl tracking-wide mb-1">{mentor.name}</h3>
                <div className="flex items-center mb-1">
                  <div className="w-8 h-0.5 bg-cyan-700 mr-2"></div>
                  <p className="text-cyan-400 font-medium">{mentor.role}</p>
                </div>
                <p className="text-gray-300 text-sm opacity-90">{mentor.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionNavigation = ({ activeTab, onTabChange, isScrolled }) => {
  const getIcon = (iconName) => {
    const iconMap = {
      FaTerminal: <FaTerminal />,
      FaHandshake: <FaHandshake />,
      FaUsers: <FaUsers />,
      FaUserTie: <FaUserTie />,
      FaClipboardCheck: <FaClipboardCheck />,
      FaTrophy: <FaTrophy />,
      FaCamera: <FaCamera />,
      FaShieldAlt: <FaShieldAlt />
    };
    return iconMap[iconName] || null;
  };

  return (
    <div className={`${isScrolled ? 'sticky top-0 z-50 py-3 bg-black/80 backdrop-blur-md border-b border-cyan-900' : 'mb-12'} transition-colors`}>
      <div className="flex overflow-x-auto hide-scrollbar gap-2 justify-center">
        {navigationSections.map(section => (
          <button
            key={section.id}
            onClick={() => onTabChange(section.id)}
            className={`font-mono text-xs px-3 py-2 whitespace-nowrap rounded-sm border ${activeTab === section.id
              ? 'bg-cyan-900/40 text-cyan-300 border-cyan-700'
              : 'bg-transparent border-gray-800 text-gray-400 hover:text-cyan-400'
              }`}
          >
            <span className="mr-2">{getIcon(section.iconName)}</span>
            <span>{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const StatisticsPanel = () => {
  const getIcon = (iconName) => {
    const icons = {
      FaUsers: <FaUsers />,
      FaUniversity: <FaUniversity />,
      FaGraduationCap: <FaGraduationCap />,
      FaTrophy: <FaTrophy />
    };
    return icons[iconName] || null;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
      {statistics.map((stat, idx) => (
        <div key={idx} className="border border-cyan-900 bg-black/40 backdrop-blur-sm p-4 flex flex-col items-center justify-center">
          <div className="text-cyan-500 mb-2">{getIcon(stat.icon)}</div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">{stat.value}</div>
          <div className="text-xs sm:text-sm text-cyan-200 mt-1 font-mono tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const TerminalSection = ({ id, title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const color = sectionColors[id] || "cyan";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className="mb-12 border border-gray-800 bg-gray-900/60 backdrop-blur-sm rounded-sm hover-glow">
      <div
        className={`flex items-center justify-between px-4 py-3 border-b border-${color}-900 cursor-pointer hover:bg-black/40 transition-colors`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className={`text-${color}-500 mr-3 ${isExpanded ? 'animate-pulse' : ''}`}>{icon}</span>
          <h2 className={`text-xl md:text-2xl font-mono text-${color}-400 tracking-wide uppercase ${isExpanded ? 'animate-glow' : ''}`}>
            {title}
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className={`text-${color}-400 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isInitialRender ? (isExpanded ? 'terminal-open' : 'opacity-0 max-h-0') :
          isExpanded ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0'
          }`}
      >
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </section>
  );
};

const WinnerCarousel = ({ images = [], variant = "primary" }) => {
  if (!images || images.length === 0) {
    return (
      <div className="border border-gray-800 rounded-sm bg-black/30 flex items-center justify-center p-6 aspect-video">
        <p className="text-gray-400 text-sm">No images available</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-800 rounded-sm overflow-hidden bg-black/30">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={images.length > 1}
        className={`winner-swiper swiper-${variant}`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[4/3] w-full">
              <img
                src={image}
                alt={`Winner image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const WinnerCard = ({ winner, isFirst = false }) => {
  const { name, college, position, variant, prizeDetails, achievement, images } = winner;

  const variantStyles = {
    primary: {
      border: "border-green-900",
      gradient: "from-green-700 to-green-500",
      iconBg: "border-green-700 bg-green-900/20 text-green-500",
      badge: "text-green-500 bg-green-900/30",
      line: "bg-green-600/50",
      title: "text-green-400",
      subtitle: "text-green-300/70",
      icon: <FaTrophy className="text-2xl md:text-3xl" />,
      cardBg: "border-green-900/50",
      bulletColor: "bg-green-500",
      textColor: "text-green-100"
    },
    secondary: {
      border: "border-gray-700",
      gradient: "from-gray-700 to-gray-500",
      iconBg: "border-gray-700 bg-gray-800/50 text-gray-400",
      badge: "text-gray-500 bg-gray-800/60",
      line: "bg-gray-600/50",
      title: "text-gray-400",
      subtitle: "text-gray-400/70",
      icon: <FaMedal className="text-xl" />,
      cardBg: "border-gray-800/70",
      bulletColor: "bg-gray-500",
      textColor: "text-gray-300"
    },
    tertiary: {
      border: "border-orange-900",
      gradient: "from-orange-900 to-orange-700",
      iconBg: "border-orange-800 bg-orange-900/20 text-orange-500",
      badge: "text-orange-500 bg-orange-900/30",
      line: "bg-orange-700/50",
      title: "text-orange-400",
      subtitle: "text-orange-400/70",
      icon: <FaMedal className="text-xl" />,
      cardBg: "border-orange-900/50",
      bulletColor: "bg-orange-500",
      textColor: "text-orange-200"
    }
  };

  const style = variantStyles[variant] || variantStyles.primary;

  return (
    <div className={`bg-black/30 ${style.border} rounded-sm overflow-hidden ${isFirst ? 'mb-10' : ''} cyber-card reveal`}>
      <div className={`h-1 bg-gradient-to-r ${style.gradient}`}></div>
      <div className={`${isFirst ? 'p-6' : 'p-5'}`}>
        <div className="flex items-center mb-6">
          <div className={`${isFirst ? 'p-3' : 'p-2'} mr-${isFirst ? '4' : '3'} border ${style.iconBg} rounded-sm animate-pulse`}>
            {style.icon}
          </div>
          <div>
            <div className="flex items-center">
              <span className={`text-xs font-mono ${style.badge} uppercase px-2 py-0.5 rounded-sm mr-2`}>{position}</span>
              <span className={`h-px w-${isFirst ? '16' : '12'} ${style.line}`}></span>
            </div>
            <h3 className={`${isFirst ? 'text-xl md:text-2xl' : 'text-lg'} font-mono ${style.title} mt-1 animate-glow`}>{name}</h3>
            <p className={`${style.subtitle} text-xs`}>{college}</p>
          </div>
        </div>

        <div className={`${isFirst ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'block'}`}>
          <WinnerCarousel
            images={images}
            variant={variant}
          />

          <div className={`bg-black/40 ${style.cardBg} p-${isFirst ? '5' : '4'} ${!isFirst ? 'mt-4' : ''} rounded-sm flex flex-col justify-center`}>
            <h4 className={`${style.title} ${isFirst ? 'text-lg' : 'text-sm'} font-mono mb-${isFirst ? '4' : '3'} flex items-center border-b ${style.cardBg} pb-2`}>
              {style.icon} <span className="ml-2">PRIZE DETAILS</span>
            </h4>
            <ul className={`space-y-${isFirst ? '3' : '2'} ${!isFirst ? 'text-sm' : ''}`}>
              {prizeDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`w-1.5 h-1.5 ${style.bulletColor} mr-2 rounded-full mt-${isFirst ? '2' : '1'}`}></span>
                  <span className={style.textColor}>{detail}</span>
                </li>
              ))}
            </ul>

            {achievement && (
              <div className="mt-6 pt-4 border-t border-green-900/30">
                <h5 className="text-green-400 font-mono text-sm mb-2">ACHIEVEMENT</h5>
                <p className="text-sm text-green-200/80">{achievement}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamCarousel = ({ images, aspectRatio = "aspect-[4/3]" }) => {
  return (
    <div className="border border-pink-900 rounded-sm overflow-hidden bg-black/30">
      <div className="h-1 bg-gradient-to-r from-pink-700 to-pink-500"></div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="team-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={`${aspectRatio} w-full`}>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const EvaluationCarousel = () => {
  const getImageCaption = (index) => {
    return captions[index] || "Evaluation process";
  };

  return (
    <div className="border-2 border-cyan-800 rounded-sm overflow-hidden bg-black/40 mb-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-800 bg-cyan-900/20">
        <h3 className="text-lg font-mono text-cyan-300 flex items-center">
          <span className="mr-2 text-cyan-400">〉</span>
          JUDGING IN PROGRESS
        </h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="evaluation-swiper"
      >
        {evaluationImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[16/9] w-full relative">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 px-4">
                <p className="text-cyan-300 font-mono text-sm">
                  {getImageCaption(index)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-4 border-t border-cyan-800/50 bg-black/60">
        <p className="text-sm text-cyan-100">
          Our expert panel of judges evaluated each team&apos;s approach to solving complex cybersecurity challenges,
          assessing technical skills, innovation, and presentation quality during the final evaluation rounds.
        </p>
      </div>
    </div>
  );
};

const JudgesGallery = ({ judges, judgeImages }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
      {judges.map((judge, idx) => (
        <div key={idx} className="bg-black/30 border border-yellow-800 rounded-sm overflow-hidden group hover:border-yellow-600 transition-all">
          <div className="relative aspect-[5/3] overflow-hidden">
            <img
              src={judgeImages[idx]}
              alt=""
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center text-yellow-500 mb-1">
                <FaUserTie className="mr-2" />
                <div className="h-px flex-grow bg-gradient-to-r from-yellow-500/70 to-transparent"></div>
              </div>
              <h3 className="text-white font-mono text-lg">{judge.name}</h3>
              <p className="text-yellow-200/90 text-xs font-mono">{judge.role}</p>
            </div>
          </div>
          <div className="p-3 border-t border-yellow-900/50 bg-black/60">
            <div className="flex items-center mb-2">
              <FaAward className="text-yellow-500 mr-2" size={14} />
              <p className="text-xs text-gray-300">{judge.expertise}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SponsorsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="border border-green-900/70 bg-black/40 p-4 rounded-sm">
          <div className="bg-white p-4 mb-4 rounded-sm">
            <img
              src={sponsorLogos[sponsor.logo]}
              alt={sponsor.name}
              className="h-14 mx-auto object-contain"
            />
          </div>
          <h3 className="text-center text-green-400 font-mono text-lg">{sponsor.name}</h3>
          <p className="text-center text-sm mt-1">{sponsor.role}</p>
          <p className="text-center text-xs mt-1 text-green-200">
            {sponsor.contribution && `Contribution: ${sponsor.contribution}`}
          </p>
        </div>
      ))}
    </div>
  );
};

const GalleryCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (isAutoPlaying) return;
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="relative">
      <div className="h-[450px] overflow-hidden rounded-sm border-2 border-purple-500/70 bg-black/40 shadow-lg shadow-purple-900/30">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <img
              src={image}
              alt={`Event Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center text-purple-300 font-mono text-sm">
                <FaCamera className="mr-2 text-purple-400" />
                <span>GALLERY IMAGE {currentIndex + 1}/{images.length}</span>
              </div>
            </div>
          </div>
        ))}

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-900/70 text-white p-3 rounded-full transition-all z-20 border border-purple-500/50 hover:scale-110"
          onClick={goToPrevious}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-900/70 text-white p-3 rounded-full transition-all z-20 border border-purple-500/50 hover:scale-110"
          onClick={goToNext}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

// -------------------- MAIN INTRUSION-X COMPONENT --------------------
const IntrusionX = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const isScrolled = useScrollPosition(300);
  const [loaded, setLoaded] = useState(false);
  const [activeChallengeCategory, setActiveChallengeCategory] = useState("all");

  const judgeImages = judgeDetailImages;

  const teamWithAlumniImagesArr = teamWithAlumniImages.map(
    (imageUrl, index) => ({
      id: 8000 + index,
      imageUrl,
      altText: "",
    })
  );

  const scrollToSection = useCallback((sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const challengeFilters = {
    all: challengeProblems,
    iiot: challengeProblems.filter((p) => p.id <= 3),
    ai: challengeProblems.filter((p) => p.id >= 4 && p.id <= 6),
    insider: challengeProblems.filter((p) => p.id === 7),
    cloud: challengeProblems.filter((p) => [8, 16].includes(p.id)),
    blockchain: challengeProblems.filter((p) => [9, 18, 19].includes(p.id)),
    malware: challengeProblems.filter((p) => [10, 11, 12, 17].includes(p.id)),
  };

  const filteredChallenges = challengeFilters[activeChallengeCategory] || challengeProblems;

  const navItems = [
    { id: "overview", label: "OVERVIEW" },
    { id: "winners", label: "WINNERS" },
    { id: "challenges", label: "CHALLENGES" },
    { id: "teams", label: "TEAMS" },
    { id: "judges", label: "JUDGES" },
    { id: "evaluation", label: "EVALUATION" },
    { id: "sponsors", label: "SPONSORS" },
    { id: "gallery", label: "GALLERY" },
  ];

  return (
    <>
      <style>{intrusionXStyles}</style>
      <div className="pure-bw-scope bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">

        {/* TOP NAVBAR HEADER */}
        <header className="border-b-2 border-white bg-black text-white px-4 sm:px-8 py-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

            {/* Left Brand Logo & Badge */}
            <div className="flex items-center space-x-3 cursor-pointer shrink-0" onClick={() => navigate("/")}>
              <span className="font-syncopate text-lg sm:text-xl font-extrabold tracking-tighter text-white">
                CYBERONITES
              </span>
              <span className="font-orbitron text-[10px] tracking-widest bg-white text-black font-extrabold px-2 py-0.5 uppercase border border-white">
                IX 1.0
              </span>
            </div>

            {/* Center Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-5 text-[11px] font-orbitron tracking-[0.2em] font-bold uppercase">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1 border transition-all duration-200 ${activeTab === item.id
                    ? "bg-white text-black font-extrabold border-white"
                    : "border-transparent text-white hover:border-white"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center space-x-4 text-xs font-orbitron tracking-widest text-white shrink-0">
              <div className="hidden sm:flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span className="font-bold text-white text-[11px]">LIVE RECAP</span>
              </div>
              <button
                onClick={() => navigate("/intrusionx-Se")}
                className="brutalist-btn px-4 py-1.5 text-xs font-bold uppercase"
              >
                EDITION 2.0 →
              </button>
            </div>
          </div>
        </header>

        {/* HERO BANNER */}
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black border-b-2 border-white">

          {/* Full-width dark background image backdrop */}
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src={eventBannerImg}
              alt="Runway Hackathon Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          {/* Giant Watermark Behind Headline */}
          <div className="giant-hero-watermark text-6xl sm:text-9xl md:text-[15rem] tracking-[0.15em] text-center w-full absolute inset-0 flex items-center justify-center opacity-20 z-0">
            INTRUSION-X
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8 my-8">

            <div className="flex flex-wrap items-center justify-center gap-3 font-orbitron text-[10px] sm:text-xs tracking-[0.3em] font-extrabold uppercase">
              <span className="border-2 border-white bg-black px-3 py-1">GLA UNIVERSITY</span>
              <span className="border-2 border-white bg-white text-black px-3 py-1 font-black">FLAGSHIP HACKATHON</span>
              <span className="border-2 border-white bg-black px-3 py-1 hidden sm:inline-block">24 HOURS</span>
            </div>

            <div className="space-y-2 sm:space-y-4 my-6">
              <h1 className="font-syncopate text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none tracking-[0.04em] drop-shadow-[0_10px_30px_rgba(255,255,255,0.25)]">
                STRENGTH.
              </h1>
              <h1 className="font-syncopate text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black hero-stroke-text uppercase leading-none tracking-[0.06em]">
                INNOVATION.
              </h1>
              <h1 className="font-syncopate text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none tracking-[0.04em]">
                DEFENSE.
              </h1>
            </div>

            <div className="w-36 h-1.5 bg-white mx-auto my-6"></div>

            <p className="font-space text-white text-xs sm:text-base max-w-2xl mx-auto tracking-widest font-extrabold uppercase border-2 border-white p-3 bg-black/90 shadow-[4px_4px_0px_0px_#ffffff]">
              A HIGH-INTENSITY 24-HOUR NATIONAL CYBERSECURITY HACKATHON SIMULATING REAL-WORLD THREAT VECTORS & DIGITAL FORENSICS OPERATIONS
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => scrollToSection("overview")}
                className="brutalist-btn bg-white text-black font-orbitron font-black text-xs uppercase tracking-[0.3em] px-10 py-4 shadow-[6px_6px_0px_0px_#ffffff]"
              >
                EXPLORE OVERVIEW ↓
              </button>
              <button
                onClick={() => scrollToSection("winners")}
                className="brutalist-btn bg-black text-white font-orbitron font-black text-xs uppercase tracking-[0.3em] px-10 py-4 shadow-[6px_6px_0px_0px_#ffffff]"
              >
                VIEW CHAMPIONS →
              </button>
            </div>
          </div>
        </section>

        {/* CONTINUOUS MARQUEE TICKER BANNER */}
        <div className="border-b-2 border-white bg-white text-black py-3 overflow-hidden font-orbitron text-xs font-black uppercase tracking-[0.25em]">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
            <span>INTRUSION-X 1.0</span>
            <span>·</span>
            <span>24-HOUR NATIONAL HACKATHON</span>
            <span>·</span>
            <span>GLA UNIVERSITY</span>
            <span>·</span>
            <span>₹35,000+ PRIZE POOL</span>
            <span>·</span>
            <span>100+ CYBER DEFENDERS</span>
            <span>·</span>
            <span>ETHICAL HACKING & CTF</span>
            <span>·</span>
            <span>INTRUSION-X 1.0</span>
            <span>·</span>
            <span>24-HOUR NATIONAL HACKATHON</span>
            <span>·</span>
            <span>GLA UNIVERSITY</span>
            <span>·</span>
            <span>₹35,000+ PRIZE POOL</span>
            <span>·</span>
            <span>100+ CYBER DEFENDERS</span>
            <span>·</span>
            <span>ETHICAL HACKING & CTF</span>
          </div>
        </div>

        {/* MAIN LAYOUT CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-32 py-20">

          {/* SECTION 01: OVERVIEW & 3-POLAROID GRID */}
          <section id="overview" className="scroll-mt-28 space-y-12">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>COLLECTION / MISSION BRIEF</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">01</span>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="font-syncopate text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight">
                INTRUSION / OVERVIEW<br />
                2024-2025
              </h2>
              <p className="font-space text-white text-sm sm:text-base leading-relaxed max-w-xl mx-auto uppercase tracking-wider font-semibold">
                SYSTEM engineered to challenge security talent nationwide. IntrusionX offers a platform to approach modern cyber threats with an uncompromising defense mindset.
              </p>
              <div>
                <button
                  onClick={() => scrollToSection("winners")}
                  className="brutalist-btn bg-white text-black font-orbitron text-xs font-black uppercase tracking-[0.25em] px-10 py-4 inline-flex items-center gap-3 shadow-[6px_6px_0px_0px_#ffffff]"
                >
                  <span>VIEW THE COLLECTION</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* 3 Tilted Polaroid Photo Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 max-w-5xl mx-auto items-center">

              <div className="polaroid-frame p-4 -rotate-6 transform">
                <div className="aspect-[3/4] overflow-hidden bg-black mb-3 relative">
                  <img
                    src={eventBannerImg}
                    alt="Inauguration Session"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black text-white font-orbitron text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest border border-white">
                    IX-01
                  </span>
                </div>
                <div className="flex justify-between items-center text-black font-orbitron text-xs font-black tracking-widest uppercase">
                  <span>INAUGURATION</span>
                  <span>2024</span>
                </div>
              </div>

              <div className="polaroid-frame p-4 rotate-1 transform md:-translate-y-6">
                <div className="aspect-[3/4] overflow-hidden bg-black mb-3 relative">
                  <img
                    src={judgesPanelImg}
                    alt="Cyber Defenders"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black text-white font-orbitron text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest border border-white">
                    IX-02
                  </span>
                </div>
                <div className="flex justify-between items-center text-black font-orbitron text-xs font-black tracking-widest uppercase">
                  <span>HACKING SESSIONS</span>
                  <span>24 HRS</span>
                </div>
              </div>

              <div className="polaroid-frame p-4 rotate-6 transform">
                <div className="aspect-[3/4] overflow-hidden bg-black mb-3 relative">
                  <img
                    src={teamImages[0]}
                    alt="Participating Team"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black text-white font-orbitron text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest border border-white">
                    IX-03
                  </span>
                </div>
                <div className="flex justify-between items-center text-black font-orbitron text-xs font-black tracking-widest uppercase">
                  <span>DELEGATES</span>
                  <span>GLA</span>
                </div>
              </div>

            </div>

            <div className="brutalist-card p-8 bg-black mt-12 space-y-6">
              <h3 className="font-syncopate text-2xl font-black text-white uppercase border-b-2 border-white pb-3">
                EXECUTIVE OBJECTIVE & VISION
              </h3>
              <p className="font-space text-white text-sm leading-relaxed font-semibold">
                The primary objective of IntrusionX was to organize a high-impact national-level cybersecurity hackathon that would serve as a platform for budding cybersecurity enthusiasts to test and showcase their skills in a competitive environment. The hackathon simulated real-world cybersecurity scenarios, encouraging participants to think critically, collaborate effectively, and apply theoretical knowledge to practical challenges.
              </p>
            </div>
          </section>

          {/* SECTION 02: CATEGORY / FILTER GRID */}
          <section className="space-y-4 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => scrollToSection("winners")}
                className="category-box-interactive p-6 flex items-center justify-between group text-left"
              >
                <span className="font-syncopate text-xl sm:text-2xl font-black uppercase tracking-wider">
                  WINNERS & LEADERBOARD <span className="text-xs font-mono">(03)</span>
                </span>
                <FaArrowRight className="text-2xl transform group-hover:translate-x-3 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("challenges")}
                className="category-box-interactive p-6 flex items-center justify-between group text-left"
              >
                <span className="font-syncopate text-xl sm:text-2xl font-black uppercase tracking-wider">
                  CYBER CHALLENGES <span className="text-xs font-mono">(19)</span>
                </span>
                <FaArrowRight className="text-2xl transform group-hover:translate-x-3 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("teams")}
                className="category-box-interactive p-6 flex items-center justify-between group text-left"
              >
                <span className="font-syncopate text-xl sm:text-2xl font-black uppercase tracking-wider">
                  PARTICIPATING TEAMS <span className="text-xs font-mono">(25)</span>
                </span>
                <FaArrowRight className="text-2xl transform group-hover:translate-x-3 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("judges")}
                className="category-box-interactive p-6 flex items-center justify-between group text-left"
              >
                <span className="font-syncopate text-xl sm:text-2xl font-black uppercase tracking-wider">
                  JUDGES & EXPERTS <span className="text-xs font-mono">(06)</span>
                </span>
                <FaArrowRight className="text-2xl transform group-hover:translate-x-3 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <button
                onClick={() => scrollToSection("evaluation")}
                className="category-box-interactive p-6 flex items-center justify-between group text-left"
              >
                <span className="font-syncopate text-lg sm:text-xl font-black uppercase tracking-wider">
                  EVALUATION <span className="text-xs font-mono">(04)</span>
                </span>
                <FaArrowRight className="text-xl transform group-hover:translate-x-3 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("sponsors")}
                className="category-box-interactive p-6 flex items-center justify-between group text-left"
              >
                <span className="font-syncopate text-lg sm:text-xl font-black uppercase tracking-wider">
                  SPONSORS <span className="text-xs font-mono">(05)</span>
                </span>
                <FaArrowRight className="text-xl transform group-hover:translate-x-3 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("gallery")}
                className="bg-white text-black p-6 flex items-center justify-between group text-left border-2 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:bg-white transition-all transform hover:-translate-y-1"
              >
                <span className="font-syncopate text-lg sm:text-xl font-black uppercase tracking-wider text-black">
                  GALLERY ARCHIVE <span className="text-xs font-mono text-black">(50+)</span>
                </span>
                <FaArrowRight className="text-xl text-black transform group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </section>

          {/* SECTION 03: CHAMPIONS */}
          <section id="winners" className="scroll-mt-28 space-y-12 relative pt-12">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>CHAMPIONS / HALL OF FAME</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">02</span>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="font-syncopate text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider">
                PRESENTATION OF<br />THE CHAMPIONS
              </h2>
              <p className="font-space text-white text-sm sm:text-base max-w-lg mx-auto uppercase tracking-wider font-semibold">
                We are thrilled to unveil the top cybersecurity teams from across the nation who emerged victorious after 24 hours of intense competition.
              </p>
            </div>

            {/* Overlapping Stacked Polaroid Cards */}
            <div className="relative py-24 flex items-center justify-center">
              <div className="giant-hero-watermark text-7xl sm:text-9xl md:text-[16rem] tracking-[0.2em] text-center w-full absolute inset-0 flex items-center justify-center opacity-30">
                STYLE
              </div>

              <div className="relative z-20 w-80 sm:w-96 h-[28rem] flex items-center justify-center">
                <div className="polaroid-frame p-3 absolute w-full -rotate-12 translate-x-8 -translate-y-6 opacity-75">
                  <div className="aspect-[3/4] bg-black overflow-hidden">
                    <img src={teamImages[1] || eventBannerImg} alt="Runner Up" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="polaroid-frame p-3 absolute w-full rotate-12 -translate-x-8 translate-y-6 opacity-80">
                  <div className="aspect-[3/4] bg-black overflow-hidden">
                    <img src={teamImages[2] || judgesPanelImg} alt="Third Place" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="polaroid-frame p-4 absolute w-full rotate-2 shadow-2xl">
                  <div className="aspect-[3/4] bg-black overflow-hidden relative mb-3">
                    <img src={teamImages[0] || eventBannerImg} alt="Winner Team" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="relative flex items-center justify-center">
                        <svg className="w-28 h-28 animate-spin-slow absolute inset-0" viewBox="0 0 100 100">
                          <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                          <text className="font-orbitron text-[8.5px] font-black uppercase fill-white tracking-widest">
                            <textPath href="#textPath">
                              INTRUSION-X RECAP · HALL OF FAME ·
                            </textPath>
                          </text>
                        </svg>
                        <button
                          onClick={() => scrollToSection("winners-table")}
                          className="w-14 h-14 rounded-full border-2 border-white bg-black hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 shadow-xl relative z-10"
                        >
                          <FaPlay className="text-sm ml-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-black font-orbitron text-xs font-black text-center uppercase tracking-widest">
                    TEAM CAPTCHA_UNRECOGNISED
                  </div>
                </div>
              </div>
            </div>

            {/* Winner Cards Detailed Render */}
            <div id="winners-table" className="pt-12 space-y-8">
              <WinnerCard winner={winners[0]} isFirst={true} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <WinnerCard winner={winners[1]} />
                <WinnerCard winner={winners[2]} />
              </div>

              {/* Official Leaderboard Table */}
              <div className="brutalist-card p-8 bg-black">
                <h3 className="font-syncopate text-xl font-black text-white uppercase tracking-widest mb-6 text-center border-b-2 border-white pb-4">
                  OFFICIAL LEADERBOARD STANDINGS
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-space text-xs">
                    <thead>
                      <tr className="border-b-2 border-white text-white font-black uppercase tracking-wider font-orbitron">
                        <th className="py-4 px-4">RANK</th>
                        <th className="py-4 px-4">TEAM NAME</th>
                        <th className="py-4 px-4">INSTITUTION</th>
                        <th className="py-4 px-4">REWARD & RECOGNITION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white">
                      <tr className="bg-white text-black font-extrabold hover:bg-white hover:text-black cursor-pointer">
                        <td className="py-4 px-4 font-orbitron text-lg font-black text-black">01</td>
                        <td className="py-4 px-4 uppercase tracking-wider font-extrabold text-black">Team Captcha_Unrecognised</td>
                        <td className="py-4 px-4 text-black">MRIIS, Faridabad</td>
                        <td className="py-4 px-4 font-extrabold text-black">₹15,000 + ₹5,000 & CEH Voucher</td>
                      </tr>
                      <tr className="text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                        <td className="py-4 px-4 font-orbitron text-lg font-bold">02</td>
                        <td className="py-4 px-4 font-bold uppercase tracking-wider">Team Deathly Hallows</td>
                        <td className="py-4 px-4">GLA University (1st Year)</td>
                        <td className="py-4 px-4 font-bold">₹10,000 + 3 CRTP Certificates</td>
                      </tr>
                      <tr className="text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                        <td className="py-4 px-4 font-orbitron text-lg font-bold">03</td>
                        <td className="py-4 px-4 font-bold uppercase tracking-wider">Team Cyber Sentinels</td>
                        <td className="py-4 px-4">GLA University</td>
                        <td className="py-4 px-4 font-bold">₹5,000 Cash Prize</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 04: CYBERSECURITY CHALLENGES */}
          <section id="challenges" className="scroll-mt-28 space-y-8">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>PROBLEM STATEMENTS</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">03</span>
            </div>

            <div className="brutalist-card p-8 bg-black space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-white pb-6">
                <div>
                  <h3 className="font-syncopate text-2xl font-black text-white uppercase tracking-wider">
                    CYBERSECURITY CHALLENGES
                  </h3>
                  <p className="font-space text-white text-xs uppercase tracking-wider font-semibold mt-1">
                    FILTER PROBLEM DOMAINS IN REAL TIME
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 font-orbitron text-xs uppercase font-bold">
                  {[
                    { id: "all", label: "ALL" },
                    { id: "iiot", label: "IIOT" },
                    { id: "ai", label: "AI" },
                    { id: "blockchain", label: "BLOCKCHAIN" },
                    { id: "malware", label: "MALWARE" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveChallengeCategory(tab.id)}
                      className={`px-4 py-2 border-2 border-white transition-all font-extrabold ${activeChallengeCategory === tab.id
                        ? "bg-white text-black shadow-[3px_3px_0px_0px_#ffffff]"
                        : "bg-black text-white hover:bg-white hover:text-black"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredChallenges.slice(0, 4).map((prob, idx) => (
                  <div key={idx} className="border-2 border-white p-6 bg-black flex flex-col justify-between space-y-4 brutalist-card">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-orbitron text-xs font-black text-black bg-white px-2 py-0.5 uppercase">
                          PROBLEM #{prob.id || idx + 1}
                        </span>
                        <span className="font-mono text-xs text-white font-bold uppercase">{prob.category || "CYBER"}</span>
                      </div>
                      <h4 className="font-syncopate text-base font-black text-white uppercase">{prob.title || `CHALLENGE STATEMENT ${idx + 1}`}</h4>
                      <p className="font-space text-xs text-white mt-2 font-medium leading-relaxed">{prob.description || "Complex cybersecurity challenge vector designed for IntrusionX hackathon."}</p>
                    </div>
                    <div className="pt-2 border-t-2 border-white flex justify-between items-center text-xs font-orbitron font-bold">
                      <span className="text-white">DIFFICULTY: HARD</span>
                      <a href="/prob-statement-x" className="text-white hover:underline uppercase">DETAILS →</a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <a
                  href="/prob-statement-x"
                  className="brutalist-btn inline-block bg-white text-black font-orbitron font-black text-xs uppercase tracking-[0.25em] px-10 py-4 shadow-[6px_6px_0px_0px_#ffffff]"
                >
                  EXPLORE ALL {challengeProblems.length} PROBLEM STATEMENTS →
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 05: TEAMS & ALUMNI */}
          <section id="teams" className="scroll-mt-28 space-y-8">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>PARTICIPANTS</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">04</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 brutalist-card p-6 bg-black">
                <h3 className="font-syncopate text-lg font-black text-white uppercase tracking-wider mb-6 border-b-2 border-white pb-3">
                  TEAM GALLERY CAROUSEL
                </h3>
                <TeamCarousel images={teamImages} />
              </div>

              <div className="lg:col-span-5 brutalist-card p-6 bg-black space-y-6">
                <div>
                  <h3 className="font-syncopate text-base font-black text-white uppercase tracking-wider mb-4 border-b-2 border-white pb-2">
                    INSTITUTIONS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {participatingInstitutions.map((college, idx) => (
                      <span key={idx} className="px-3 py-1 border-2 border-white bg-black text-white font-orbitron text-xs font-bold uppercase tracking-wider">
                        {college}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-white">
                  <h3 className="font-syncopate text-base font-black text-white uppercase tracking-wider mb-4 border-b-2 border-white pb-2">
                    STATISTICS
                  </h3>
                  <div className="space-y-2 font-space text-xs font-bold">
                    <div className="flex justify-between py-1.5 border-b border-white">
                      <span className="text-white">Total Teams</span>
                      <span className="text-white font-mono font-black text-sm">25</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white">
                      <span className="text-white">External Teams</span>
                      <span className="text-white font-mono font-black text-sm">10</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white">
                      <span className="text-white">GLA Teams</span>
                      <span className="text-white font-mono font-black text-sm">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="brutalist-card p-8 bg-black">
              <h3 className="font-syncopate text-xl font-black text-white uppercase tracking-wider mb-6 border-b-2 border-white pb-3">
                CYBERONITES ALUMNI MENTORS
              </h3>
              <IntrusionCards
                list={teamWithAlumniImagesArr}
                variant="secondary"
                rounded="rounded-none"
                shadow="shadow-none"
              />
            </div>
          </section>

          {/* SECTION 06: JUDGES */}
          <section id="judges" className="scroll-mt-28 space-y-8">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>EXPERT PANEL</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">05</span>
            </div>

            <div className="brutalist-card p-6 bg-black">
              <JudgesGallery judges={guests} judgeImages={judgeImages} />
            </div>
          </section>

          {/* SECTION 07: EVALUATION PROCESS */}
          <section id="evaluation" className="scroll-mt-28 space-y-8">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>ASSESSMENT</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">06</span>
            </div>

            <div className="brutalist-card p-6 bg-black">
              <EvaluationCarousel />
            </div>
          </section>

          {/* SECTION 08: SPONSORS */}
          <section id="sponsors" className="scroll-mt-28 space-y-8">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>PARTNERS</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">07</span>
            </div>

            <div className="brutalist-card p-6 bg-black">
              <SponsorsSection />
            </div>
          </section>

          {/* SECTION 09: GALLERY */}
          <section id="gallery" className="scroll-mt-28 space-y-8">
            <div className="flex items-center justify-between font-orbitron text-xs tracking-[0.3em] text-white uppercase border-b-2 border-white pb-4 font-bold">
              <span>ARCHIVE</span>
              <span className="bg-white text-black px-2 py-0.5 font-extrabold">08</span>
            </div>

            <div className="brutalist-card p-6 bg-black">
              <GalleryCarousel images={teamImages} />
            </div>
          </section>

          {/* BOTTOM NAVIGATION ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t-2 border-white">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full sm:w-auto brutalist-btn bg-black text-white px-10 py-5 text-xs font-orbitron font-extrabold uppercase tracking-[0.25em] shadow-[6px_6px_0px_0px_#ffffff]"
            >
              RETURN TO TOP ↑
            </button>

            <button
              onClick={() => navigate("/intrusionx-Se")}
              className="w-full sm:w-auto brutalist-btn bg-white text-black px-10 py-5 text-xs font-orbitron font-extrabold uppercase tracking-[0.25em] shadow-[6px_6px_0px_0px_#ffffff]"
            >
              INTRUSION-X EDITION 2.0 →
            </button>
          </div>

        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default IntrusionX;



