import { useState } from "react";
import cityToCoord from "../Json/cityToCoord.json";
import { buttons, parametersName } from "./Constants";
import { Search, Sun, Snow, Cloud } from "../Components/Icons";

type IProps = {
  sendResults: any;
  sendCity: any;
};

async function getRequest(city: string, selectedParams: boolean[]) {
  let requestArray = [];

  for (let i = 0; i < selectedParams.length; i++) {
    if (selectedParams[i] === true) {
      requestArray.push(parametersName[i]);
    }
  }

  requestArray.push(parametersName[4]);

  const params = {
    latitude: cityToCoord[city as keyof typeof cityToCoord].lat.toString(),
    longitude: cityToCoord[city as keyof typeof cityToCoord].lng.toString(),
    daily: requestArray.join(","),
    timezone: "Europe/London",
  };

  const requestParams = `latitude=${params.latitude}&longitude=${params.longitude}&daily=${params.daily}&timezone=${params.timezone}`;

  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?" + requestParams
  );

  return await response.json();
}

const Parameters = (props: IProps) => {
  const [parameters, setParameters] = useState([false, false, false, false]);
  const [city, setCity] = useState("");

  async function handleRequest() {
    const cityLowercase = city.toLowerCase();
    if (cityLowercase === "" || !(cityLowercase in cityToCoord)) {
      console.log("City Not Found");
    } else if (!parameters.includes(true)) {
      props.sendResults({});
      props.sendCity("");
      console.log("No Parameters selected");
    } else {
      const results = await getRequest(cityLowercase, parameters);
      const formattedResults = formatResults(results.daily);
      props.sendResults(formattedResults);
      props.sendCity(cityLowercase.toLowerCase());
    }
  }

  function handleChange(event: any) {
    setCity(event.target.value);
  }

  function renderButtons() {
    let arrayButtons: JSX.Element[] = [];

    for (let i = 0; i < buttons.length; i++) {
      arrayButtons.push(
        <button
          style={
            parameters[i]
              ? {}
              : {
                  animationIterationCount: 0,
                  opacity: 0.5,
                }
          }
          type="button"
          onClick={() => handleParameters(i)}
          key={i}
        >
          <i>{buttons[i].icon}</i>
          <p>{buttons[i].content}</p>
        </button>
      );
    }
    return arrayButtons;
  }

  function handleParameters(nParam: number) {
    let newParameters = [...parameters];
    newParameters[nParam] = !newParameters[nParam];
    setParameters(newParameters);
  }

  return (
    <div className="parametersZone">
      <div className="searchBar">
        <i>
          <Search />
        </i>
        <input
          className={""}
          placeholder="Choose a location"
          value={city}
          onChange={handleChange}
        />
      </div>

      <div className="parameters">{renderButtons()}</div>

      <button className="searchButton" onClick={handleRequest}>
        <div
          id="searchButtonAnimationDiv"
          onMouseLeave={() => {
            document
              .getElementById("searchButtonAnimationDiv")
              ?.classList.add("animationReverse");
          }}
        >
          <Cloud />
          Search
          <Sun />
        </div>
      </button>
    </div>
  );
};

export default Parameters;

function formatResults(results: any) {
  let newSunrise = [];
  let newSunset = [];

  for (let index = 0; index < results["sunrise"].length; index++) {
    newSunrise.push(results["sunrise"][index].split("T")[1]);
    newSunset.push(results["sunset"][index].split("T")[1]);
  }

  results["sunrise"] = [...newSunrise];
  results["sunset"] = [...newSunset];
  console.log(results);

  return results;
}
