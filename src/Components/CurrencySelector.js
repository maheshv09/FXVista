// CurrencySelector.js
import React from "react";
import { Form } from "react-bootstrap";

const CurrencySelector = ({
  currencies,
  onSelectCurrency,
  selectedCurrency,
  selectorNumber,
}) => {
  return (
    <Form.Group controlId={`currencySelector${selectorNumber}`}>
      <Form.Label>Select Currency:</Form.Label>
      <Form.Control
        as="select"
        value={selectedCurrency}
        onChange={(e) => onSelectCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CurrencySelector;
