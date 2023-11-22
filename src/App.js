// App.js
import React, { useState, useEffect } from "react";
import CurrencyChart from "./Components/CurrencyChart.js";
import ExchangeRateDisplay from "./Components/ExchangeDisplay.js"; // Import ExchangeRateDisplay
import { Container, Row, Col, Card } from "react-bootstrap";
import CurrencySelector from "./Components/CurrencySelector";
import DurationSelector from "./Components/DurationSelector";
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
  const [chartData, setChartData] = useState({
    labels: [],
    data: [],
  });
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("INR");
  const [selectedDuration, setSelectedDuration] = useState("Weekly");

  useEffect(() => {
    const fetchData = async () => {
      const labels = getChartDataForDuration(selectedDuration).map(
        (dataPoint) => dataPoint.label
      );
      const data = getChartDataForDuration(selectedDuration);

      setChartData({ labels, data });
    };

    fetchData();
  }, [selectedDuration]);

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
              />
            </div>
          </div>

          <p>Exchange Rate Chart Placeholder</p>
          <CurrencyChart
            labels={chartData.labels}
            data={chartData.data}
            currencyName={secondCurrency}
          />
          <ExchangeRateDisplay
            baseCurrency={firstCurrency}
            targetCurrency={secondCurrency}
          />
        </div>
        <div className="bar_graph">
        <p>Exchange Rate Chart Placeholder</p>
          <CurrencyChart
            labels={chartData.labels}
            data={chartData.data}
            currencyName={secondCurrency}
          />
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
