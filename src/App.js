import "./styles.css";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
export default function App() {
  const [time, setTime] = useState(0);
  const [startTimer, setstartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);
  useEffect(() => {
    let intervalid = null;
    if (startTimer) {
      intervalid = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);

      setTimerId(intervalid);
    } else {
      clearInterval(timerId);
    }
    return () => {
      if (timerId != 0) {
        clearInterval(timerId);
      }
    };
  }, [startTimer]);

  return (
    <div className="App">
      <h1>Intelligent Game</h1>
      <div className="time">{time}</div>
      <div className="button-wrap">
        <button
          className={"button btn-start ${startTimer && 'disable'}"}
          onClick={() => setstartTimer(true)}
        >
          Start
        </button>
        <button
          className={"button btn-stop ${!startTimer && 'disable'}"}
          onClick={() => setstartTimer(false)}
        >
          Stop
        </button>
      </div>
      <Cards />
    </div>
  );
}
