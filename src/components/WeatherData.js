import React from "react";

const WetherData = ({ data }) => {
  return (
    <>
      <table>
        <thead>Weather</thead>
        <tbody>
          {data.map((el) => (
            <>
              <tr>
                <td>Morning</td>
                <td key={el.temp["morn"]}>{`${Math.round(
                  el.temp["morn"]
                )} °C`}</td>
              </tr>
              <tr>
                <td>Day</td>
                <td key={el.temp["day"]}>{`${Math.round(
                  el.temp["day"]
                )} °C`}</td>
              </tr>
              <tr>
                <td>Evening</td>
                <td key={el.temp["eve"]}>{`${Math.round(
                  el.temp["eve"]
                )} °C`}</td>
              </tr>
              <tr>
                <td>Night</td>
                <td key={el.temp["night"]}>{`${Math.round(
                  el.temp["night"]
                )} °C`}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WetherData;
