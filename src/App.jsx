import { useState } from "react";
import "./styles/App.css";
import About from "./layouts/About";
import Header from "./layouts/Header";
import Interest from "./layouts/Interests";
import Footer from "./layouts/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <Interest />
      <Footer />
    </>
  );
}

export default App;
