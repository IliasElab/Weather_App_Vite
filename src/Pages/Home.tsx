import { useState } from "react";
import Contact from "../Components/Contact";
import Parameters from "../Components/Parameters";
import Animation from "../Components/Animation";
import Results from "../Components/Results";

const Home = () => {
  //const [animatedContacts, setAnimatedContacts] = useState(false);
  const [results, setResults] = useState(null);
  const [city, setCity] = useState("");

  function sendResults(data: any) {
    setResults(data);
  }

  function sendCity(city: string) {
    setCity(city);
  }

  /*function scrollReveal() {
    if (
      window.scrollY >
      0.2 * (document.documentElement.scrollHeight - window.innerHeight)
    ) {
      setAnimatedContacts(true);
      window.removeEventListener("scroll", scrollReveal);
    }
  }
  window.addEventListener("scroll", scrollReveal);*/

  return (
    <div className={""}>
      <section className="introPage">
        <div className="spaceBG"></div>
        <div>
          <div className="introInfo">
            <h1>Get weather informations of any city in the world</h1>
            <p>
              Type the name of the city and choose the parameters you are
              interested in and get real-time informations about the weather of
              the city you look for !
            </p>
          </div>

          <Parameters sendCity={sendCity} sendResults={sendResults} />
        </div>

        <div className="waveContainer">
          <Wave />
          <Wave2 />
        </div>
      </section>

      {city && (
        <section className="resultPage">
          <h1>{city}</h1>
          <div className="resultZone">
            <Animation results={results} />
            {results && <Results results={results} />}
          </div>
        </section>
      )}

      <section className="contactPage">
        <div className="contactTitles">
          <h2>
            Made by : <span>Ilias El-Abbassi</span>
          </h2>
          <h3>Software Engineer</h3>
        </div>

        <Contact />
      </section>
    </div>
  );
};

export default Home;

function Wave() {
  return (
    <svg
      className="waveAll wave1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 88.7"
      preserveAspectRatio="none"
    >
      <path d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z"></path>
    </svg>
  );
}

function Wave2() {
  return (
    <svg
      className="waveAll wave2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 88.7"
      preserveAspectRatio="none"
    >
      <path d="M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z"></path>
    </svg>
  );
}
