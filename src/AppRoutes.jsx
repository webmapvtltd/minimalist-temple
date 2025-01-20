import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy Loading Pages
const Home = lazy(() => import("./pages/Home"));
const Rituals = lazy(() => import("./pages/Rituals"));
const Venue = lazy(() => import("./pages/Venue"));
const RSVPPage = lazy(() => import("./pages/RSVPPage"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy Loading Rituals Components
const Haldi = lazy(() => import("./components/Rituals/Haldi"));
const Mehendi = lazy(() => import("./components/Rituals/Mehendi"));
const Sangeet = lazy(() => import("./components/Rituals/Sangeet"));
const WeddingCeremony = lazy(() => import("./components/Rituals/WeddingCeremony"));
const Reception = lazy(() => import("./components/Rituals/Reception"));

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rituals" element={<Rituals />}>
              {/* Nested Routes for Rituals */}
              <Route path="haldi" element={<Haldi />} />
              <Route path="mehendi" element={<Mehendi />} />
              <Route path="sangeet" element={<Sangeet />} />
              <Route path="weddingceremony" element={<WeddingCeremony />} />
              <Route path="reception" element={<Reception />} />
            </Route>
            <Route path="/venue" element={<Venue />} />
            <Route path="/rsvp" element={<RSVPPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
