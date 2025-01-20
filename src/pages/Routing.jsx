import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";


// Importing Pages Normally (No Lazy Loading)
import Home from "./Home";
import Rituals from "./Rituals";
import Venue from "./Venue";
import RSVPPage from "./RSVPPage";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Haldi from "./Haldi";
import Mehendi from "./Mehendi";
import Sangeet from "./Sangeet";

import WeddingCeremony from "./WeddingCeremony";
import Reception from "./Reception";
import Engagement from "./Engagement";


const AppRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rituals" element={<Rituals />} />
        <Route path="venue" element={<Venue />} />
        <Route path="rsvp" element={<RSVPPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="haldi" element={<Haldi />} />
        <Route path="mehendi" element={<Mehendi />} />
        <Route path="sangeet" element={<Sangeet />} />
        <Route path="weddingceremony" element={<WeddingCeremony />} />
        <Route path="reception" element={<Reception />} />
        <Route path="engagement" element={<Engagement />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default AppRoutes;
