// App.js
import React, { useState, useEffect } from "react";
import CurrencyChart from "./Components/CurrencyChart.js";
import ExchangeRateDisplay from "./Components/ExchangeDisplay.js"; // Import ExchangeRateDisplay
import { Row, Col, Card, Container } from "react-bootstrap";
import CurrencySelector from "./Components/CurrencySelector";
import DurationSelector from "./Components/DurationSelector";
import BarGraph from "./Components/BarGraph.js";
import "./App.css";

import CurrencyConverter from "./Components/CurrencyConverter.jsx";

const currencies = ["USD", "EUR", "GBP", "JPY"];
const durations = ["Weekly", "Monthly", "Quarterly", "Yearly"];

const generateRandomData = (length) => {
  // Function to generate random data for testing
  return Array.from({ length }, (_, index) => ({
    label: `2023-11-${index + 1}`,
    value: Math.random() * 10 + 80,
  }));
};

const getChartDataForDuration = (duration) => {
  // Function to generate data based on selected duration
  switch (duration) {
    case "Weekly":
      return generateRandomData(7);
    case "Monthly":
      return generateRandomData(30);
    case "Quarterly":
      return generateRandomData(90);
    case "Yearly":
      return generateRandomData(365);
    default:
      return generateRandomData(7);
  }
};

const App = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [chartData, setChartData] = useState({
    labels: [],
    data: [],
  });
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("INR");
  const [selectedDuration, setSelectedDuration] = useState("Weekly");

  useEffect(() => {
    const fetchData = async () => {
      const rawData = getChartDataForDuration(selectedDuration);
      const filteredData = rawData.filter(
        (dataPoint) =>
          (!startDate || dataPoint.label >= startDate) &&
          (!endDate || dataPoint.label <= endDate)
      );

      const labels = filteredData.map((dataPoint) => dataPoint.label);
      const data = filteredData;

      setChartData({ labels, data });
    };

    fetchData();
  }, [selectedDuration, startDate, endDate]);

  return (
    <div className="dashboard">
      <div className="first_grid">
        <CurrencyConverter></CurrencyConverter>
      </div>
      <div className="second_grid">
        <div className="line_graph">
          <h1>Exchange Rate Dashboard</h1>
          <div className="currencies">
            <div className="currencies1">
              <CurrencySelector
                currencies={currencies}
                onSelectCurrency={setSecondCurrency}
                selectedCurrency={secondCurrency}
                selectorNumber={2}
              />
            </div>
            <div className="currencies1">
              <CurrencySelector
                currencies={currencies}
                onSelectCurrency={setSecondCurrency}
                selectedCurrency={secondCurrency}
                selectorNumber={2}
              />
            </div>
            <div className="currencies1">
              <DurationSelector
                durations={durations}
                onSelectDuration={setSelectedDuration}
                selectedDuration={selectedDuration}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
              />
            </div>
          </div>

          <p>Exchange Rate Chart Placeholder</p>
          <CurrencyChart
            labels={chartData.labels}
            data={chartData.data}
            currencyName={secondCurrency}
            startDate={startDate}
            endDate={endDate}
            selectedDuration={selectedDuration}
          />
          <ExchangeRateDisplay
            baseCurrency={firstCurrency}
            targetCurrency={secondCurrency}
          />
        </div>
        <div className="bar_graph">
          <h2>Bar Graph Placeholder</h2>
          <BarGraph data={chartData.data} />
          <ExchangeRateDisplay
            baseCurrency={firstCurrency}
            targetCurrency={secondCurrency}
          />
        </div>
      </div>
      <div className="third_grid">
        <CurrencyConverter></CurrencyConverter>
      </div>
    </div>
  );
};
export default App;
