import React from "react";
import { results, units } from "../Components/Constants";

type IProps = {
  results: any;
};

function Results(props: IProps) {
  function renderResults() {
    const resultsItems = { ...props.results };
    delete resultsItems["time"];
    const size = Object.keys(resultsItems).length;
    console.log(resultsItems);
    let resultsArray = [];

    if (size > 0) {
      for (const key in resultsItems) {
        let dataItems = [];
        for (const data of resultsItems[key]) {
          if (key !== "sunrise" && key !== "sunset") {
            dataItems.push(
              <div className="dataItem">
                <span>{data}</span>
                <span className="unit">{units[key]}</span>
              </div>
            );
          } else {
            dataItems.push(
              <div className="dataItem">
                <span>{data}</span>
              </div>
            );
          }
        }
        resultsArray.push(
          <>
            <i>{results[key]}</i>
            {dataItems}
          </>
        );
      }
    }
    return resultsArray;
  }

  return <div className="listOfResult">{renderResults()}</div>;
}

export default Results;
