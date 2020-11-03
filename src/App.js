import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

import Data from "./assets/data.json";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Section data={Data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
