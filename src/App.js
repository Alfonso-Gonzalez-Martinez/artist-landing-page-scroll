import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext.js";
import Alert from "./components/Alert.js";

import Header from "./components/Header.js";
import LandingSection from "./components/LandingSection.js";
import ProjectsSection from "./components/ProjectsSection.js";
import ContactMeSection from "./components/ContactMeSection.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;


// Texts
// Links Photos and Icons
// Double check form