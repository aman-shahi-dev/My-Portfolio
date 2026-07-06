import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";

import { Contact } from "./pages/Contact";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";
import { ParticleBackground } from "./components/ParticleBackground";

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Analytics />
        <ParticleBackground />
        {/* <SplashCursor
          SPLAT_RADIUS={0.12}
          SPLAT_FORCE={2000}
          DENSITY_DISSIPATION={6}
          VELOCITY_DISSIPATION={4}
          CURL={1.5}
          TRANSPARENT={true}
        />*/}
        <div className="relative z-10 font-inter bg-fixed text-black transition-colors duration-300 dark:text-neutral-100">
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
