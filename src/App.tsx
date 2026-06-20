import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Features } from "./components/Features";
import { Workflow } from "./components/Workflow";
import { Testimonial } from "./components/Testimonial";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box bg="slate.950" color="slate.200" minH="100vh" overflowX="hidden">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Workflow />
      <Testimonial />
      <CTA />
      <Footer />
    </Box>
  );
}

export default App;
