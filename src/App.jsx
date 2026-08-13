import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ScrollToTop from "./components/scripts/ScrollToTop";
import Team2024 from "./components/team-2024/Team2024";
import Team2025 from "./components/team-2025/Team2025";
import Team2026 from "./components/team-2026/Team2026";
import InternalEvents from "./components/Eventdashboards/InternalEvents";
import Externalevents from "./components/Eventdashboards/Externalevents";
import IntrusionXse from "./pages/Events/IntrusionX2-Overview/Intrusionxse";
import EscalateXv2 from "./pages/Events/Escalatexv2/Escalatexv2";
import Escalatex from "./pages/Events/Escalatex/Escalatex";
import Hackops from "./pages/Events/Hackops/Hackops";
import IntrusionX from "./pages/Events/IntrusionX/IntrusionX";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team2024" element={<Team2024 />} />
        <Route path="/team2025" element={<Team2025 />} />
        <Route path="/team2026" element={<Team2026 />} />
        <Route path="/internal-events" element={<InternalEvents />} />
        <Route path="/external-events" element={<Externalevents />} />
        <Route path="/intrusionx" element={<IntrusionX />} />
        <Route path="/intrusionx-Se" element={<IntrusionXse />} />
        <Route path="/escalatexv2" element={<EscalateXv2 />} />
        <Route path="/escalatex" element={<Escalatex />} />
        <Route path="/hackops" element={<Hackops />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;