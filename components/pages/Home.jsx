import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/KafkaViewLogo.png";

function Home() {
  const [ip, setIP] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const routeChange = (el) => {
    //prevents default form submissions so page doesnt re-render after setErrorMsg updates
    el.preventDefault();

    // To be added: logic to handle valid ips
    if (ip.length > 5) navigate(`/visualizer`, { state: { id: ip } });
    else {
      setError(false);
      setErrorMsg("Please enter valid IP");
    }
  };

  const routeChangeDemo = () => {
    navigate(`/visualizer`, { state: { id: "demo" } });
  };

  return (
    <div id="homeDiv">
      {/* <h1>Welcome to Kafka View!</h1> */}
      <div id="homeDescription">
        {/* <img id="icon1" src={icon}/> */}
        <p>
          Kafka View is a Kafka visualizer and data monitoring tool aimed to
          demystify your Kafka project. Simply import your project's IP to begin
          monitoring your project's real-time data. Developers can have
          confidence in their project's upkeep with Kafka View.
        </p>
      </div>
      <div id="homeInput">
        <video width="480" height="320" controls>
          <source src="../../assets/test.mp4" type="video/mp4"></source>
        </video>
        <h2>Try our interactive Demo:</h2>
        <button id="homeBtn" onClick={routeChangeDemo}>
          Demo
        </button>
      </div>
      <hr />
      <div id="homeDemo">
        <h1>Demo</h1>
      </div>

      <hr />
      <div id="homeContact">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Home;
