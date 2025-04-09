import { useContext } from "react";
import { ThemeContext } from "/src/contexts/ThemeContext.jsx";
import Header from "/src/components/sections/Header";
import Home from "/src/components/sections/Home";
import Projects from "/src/components/sections/Projects";
import Experience from "/src/components/sections/Experience";
import Stack from "/src/components/sections/Stack";
import Contact from "/src/components/sections/Contact";
import Footer from "/src/components/sections/Footer";
import ScrollToTop from "/src/components/elements/ScrollToTop";
import FadeIn from "/src/hoc/fadein";
import "/src/App.css";
import "/src/stylesheets/theme/theme.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" id="top" data-theme={theme}>
      <FadeIn duration={800}>
        <Header />
      </FadeIn>

      <FadeIn duration={800}>
        <Home />
      </FadeIn>

      <FadeIn duration={1500}>
        <Projects />
      </FadeIn>

      <FadeIn duration={1700}>
        <Experience />
      </FadeIn>

      <FadeIn duration={2100}>
        <Stack />
      </FadeIn>

      <FadeIn duration={2500}>
        <Contact />
      </FadeIn>

      <FadeIn duration={2900}>
        <Footer />
      </FadeIn>

      <ScrollToTop />
    </div>
  );
}

export default App;
