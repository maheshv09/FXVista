// App.js
import React, { useState, useEffect } from "react";
import CurrencyChart from "./Components/CurrencyChart.js";
import ExchangeRateDisplay from "./Components/ExchangeDisplay.js"; // Import ExchangeRateDisplay
import { Container, Row, Col, Card } from "react-bootstrap";
import CurrencySelector from "./Components/CurrencySelector";
import DurationSelector from "./Components/DurationSelector";
import "./App.css";

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
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4">Exchange Rate Dashboard</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <CurrencySelector
            currencies={currencies}
            onSelectCurrency={setFirstCurrency}
            selectedCurrency={firstCurrency}
            selectorNumber={1}
          />
        </Col>
        <Col md={6}>
          <CurrencySelector
            currencies={currencies}
            onSelectCurrency={setSecondCurrency}
            selectedCurrency={secondCurrency}
            selectorNumber={2}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <DurationSelector
            durations={durations}
            onSelectDuration={setSelectedDuration}
            selectedDuration={selectedDuration}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <div className="text-center">
                <p className="mb-0">Exchange Rate Chart Placeholder</p>
                <CurrencyChart
                  labels={chartData.labels}
                  data={chartData.data}
                  currencyName={secondCurrency}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* Render ExchangeRateDisplay component */}
          <ExchangeRateDisplay
            baseCurrency={firstCurrency}
            targetCurrency={secondCurrency}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
