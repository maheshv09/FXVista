import React from "react";
import { Form } from "react-bootstrap";

const DurationSelector = ({
  durations,
  onSelectDuration,
  selectedDuration,
}) => {
  return (
    <Form.Group controlId="durationSelector">
      <Form.Label>Select Duration:</Form.Label>
      <Form.Control
        as="select"
        value={selectedDuration}
        onChange={(e) => onSelectDuration(e.target.value)}
      >
        {durations.map((duration) => (
          <option key={duration} value={duration}>
            {duration}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default DurationSelector;
