import "./Style.css";
import { Button } from "semantic-ui-react";
import moment from "moment";
// import SpeechSynthesisComponent from "./SpeechSynthesis";

export function Weather({ weatherData }) {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="root">
      <div className="main"
        style={{ background: "white" }}>
        <div className="top" style={{ background: "white", fontWeight: "bold" }}>
          <p className="header">{weatherData?.name}</p>
          <Button
            className="button"
            inverted
            color="blue"
            circular
            icon="refresh"
            onClick={refresh}
          />
        </div>
        <div className="flex">
          <p className="day" style={{ color: "black", fontWeight: "bold" }}>
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <p className="description" style={{ color: "black", fontWeight: "bold" }}>{weatherData?.weather[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp" style={{ color: "black", fontWeight: "bold" }}>Temprature: {weatherData?.main?.temp} &deg;C</p>
          <p className="temp" style={{ color: "black", fontWeight: "bold" }}>Humidity: {weatherData?.main?.humidity} %</p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset" style={{ color: "black", fontWeight: "bold" }}>
            Sunrise:{" "}
            {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p className="sunrise-sunset" style={{ color: "black", fontWeight: "bold" }}>
            Sunset:{" "}
            {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
        </div>
        {/* <SpeechSynthesisComponent
          textToSpeak={`The weather data is as follows: Date is ${new Date(
            weatherData?.sys?.sunset * 1000
          ).toLocaleTimeString('en-IN')}, Temperature is ${weatherData?.main?.temp}, Humidity is ${weatherData?.main?.humidity}`}
        /> */}

      </div>
    </div>
  );
}
