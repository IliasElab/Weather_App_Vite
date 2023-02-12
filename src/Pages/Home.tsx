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
        </div>
      </section>

      {city && (
        <section className="resultPage">
          <h1>{city}</h1>
          <div className="resultZone"></div>
        </section>
      )}

      <section className="contactPage">
        <div className="contactTitles">
          <h2>
            Made by : <span>Ilias El-Abbassi</span>
          </h2>
          <h3>Software Engineer</h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
