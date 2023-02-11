import AboutUsPage from "./components/AboutUsPage";
import MainPage from "./components/MainPage";
import "@fontsource/open-sans";
import "@fontsource/poppins";
import "@fontsource/source-sans-pro";
import "@fontsource/roboto";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import { ChakraProvider, theme } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <MainPage />
        <AboutUsPage />
        <Articles />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
