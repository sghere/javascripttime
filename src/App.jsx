import { useLayoutEffect, useState } from "react";
import "./App.css";

// new Date().toLocaleString('en-us', { timeStyle:'full', dateStyle:'full'})

function App() {
  const [Time, setTime] = useState(
    new Date()
      .toLocaleString("en-us", {
        timeStyle: "full",
        dateStyle: "full",
      })
      .split(" ")
  );
  const FullDay = Time[0];
  const Month = Time[1];
  const Day = Time[2];
  const Year = Time[3];
  const Numbers = Time[5] ? Time[5].split(":") : 0;
  const Hour = Numbers[0];
  const Min = Numbers[1];
  const Sec = Numbers[2];

  useLayoutEffect(() => {
    const myInterval = setInterval(() => {
      setTime(
        new Date()
          .toLocaleString("en-us", {
            timeStyle: "full",
            dateStyle: "full",
          })
          .split(" ")
      );
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <div className="box">
        <span className="quot">{".datetime {"}</span>

        <p id="FullDay">
          <label htmlFor="FullDay">day</label>:{" "}
          <span className="value date">{FullDay}</span>
        </p>
        <p id="Day">
          <label htmlFor="Day">date</label>:{" "}
          <span className="value date">{Day}</span>
        </p>
        <p id="Month">
          <label htmlFor="Month">month</label>:{" "}
          <span className="value date">{Month},</span>
        </p>
        <p id="Year">
          <label htmlFor="Year">year</label>:{" "}
          <span className="value date">{Year},</span>
        </p>
        <p id="Hour">
          <label htmlFor="Hour">hour</label>:{" "}
          <span className="value time">{Hour},</span>
        </p>
        <p id="Min">
          <label htmlFor="Min">minutes</label>:{" "}
          <span className="value time">{Min},</span>
        </p>
        <p id="Sec">
          <label htmlFor="Sec">seconds</label>:{" "}
          <span className="value time">{Sec},</span>
        </p>
        <span className="quot">{"}"}</span>
      </div>
    </>
  );
}

export default App;
