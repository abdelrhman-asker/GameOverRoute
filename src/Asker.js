import axios from "axios";
import { React, useEffect, useState } from "react";

const Asker = () => {
  const data = [
    {
      num: 1,
      text: "learn React",
    },
    {
      num: 2,
      text: "Apply for Jobs",
    },
    {
      num: 3,
      text: "Invest your new Income",
    },
    {
      num: 4,
      text: "Invest 44 your new Income",
    },
    {
      num: 5,
      text: "Sign Up",
    },
  ];

  const [step, setStep] = useState(1);
  // console.log(data[step - 1]);

  return (
    <div className="MainBox">
      <div className="MainNubmers">
        {data.map((data, index) => {
          {
            /* // console.log("my console", data, index); */
          }
          return (
            <div
              key={index}
              className="MainDiv"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div>
                <h3 className={data.num <= step ? "active" : ""}>{data.num}</h3>
              </div>
              {/* <div key={index}>
                <h3>{data.num === step ? data.text : null}</h3>
              </div> */}
            </div>
          );
        })}
      </div>
      <div className="MainText">
        {data[step - 1] ? data[step - 1].text : null} &#128508;
      </div>
      <div className="MainBut">
        <h4 onClick={() => (data[step - 2] ? setStep(step - 1) : "")}>Prev.</h4>
        <h4 onClick={() => (data[step] ? setStep(step + 1) : "")}>Next</h4>
      </div>
    </div>
  );
};

export default Asker;
