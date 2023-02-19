import {
  Temperature,
  TemperatureMin,
  TemperatureMax,
  Precipitation,
  Wind,
  Rain,
  Mail,
  Github,
  LinkedIn,
  Sunrise,
  Moon,
  Search,
  Sun,
  Snow,
  Cloud,
  RainResult,
  TemperatureMinResult,
  TemperatureMaxResult,
  WindResult,
  DropletResult,
} from "./Icons";

interface IButtons {
  content: string;
  icon: JSX.Element;
}

const buttons: IButtons[] = [
  {
    content: "Temperature",
    icon: <Temperature />,
  },
  {
    content: "Precipitaion",
    icon: <Precipitation />,
  },
  {
    content: "Rain",
    icon: <Rain />,
  },
  {
    content: "Wind",
    icon: <Wind />,
  },
];

const results: any = {
  precipitation_sum: <DropletResult />,
  rain_sum: <RainResult />,
  windspeed_10m_max: <WindResult />,
  sunrise: <Sun />,
  sunset: <Moon />,
  temperature_2m_min: <TemperatureMinResult />,
  temperature_2m_max: <TemperatureMaxResult />,
};

const parametersName: string[] = [
  "temperature_2m_max,temperature_2m_min",
  "precipitation_sum",
  "rain_sum",
  "windspeed_10m_max",
  "sunrise,sunset",
];

const contacts = {
  mail: {
    id: "contact_1",
    link: "mailto:elab.ilias@gmail.com",
    icon: <Mail />,
    content: "My Mail",
  },

  linkedin: {
    id: "contact_2",
    link: "https://www.linkedin.com/in/ilias-el-abbassi-a161131b5/",
    icon: <LinkedIn />,
    content: "My LinkedIn",
  },

  github: {
    id: "contact_3",
    link: "https://github.com/IliasElab",
    icon: <Github />,
    content: "My Github",
  },
};

const units: any = {
  precipitation_sum: "mm",
  rain_sum: "mm",
  windspeed_10m_max: "km/h",
  sunrise: "",
  sunset: "",
  temperature_2m_min: "°C",
  temperature_2m_max: "°C",
};

export { buttons, parametersName, contacts, results, units };
