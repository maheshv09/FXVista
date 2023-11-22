import React from "react";
import "./DurationSelector.css"; // Import the corresponding CSS file

const DurationSelector = ({
  durations,
  onSelectDuration,
  selectedDuration,
  startDate, // Add startDate prop
  endDate,   // Add endDate prop
  onStartDateChange, // Add onStartDateChange prop
  onEndDateChange,   // Add onEndDateChange prop
}) => {
  return (
    <div className="duration-selector-container">
      <label className="duration-label" htmlFor="durationSelector">
        Select Duration:
      </label>
      <select
        id="durationSelector"
        value={selectedDuration}
        onChange={(e) => onSelectDuration(e.target.value)}
        className="duration-select"
      >
        {durations.map((duration) => (
          <option key={duration} value={duration}>
            {duration}
          </option>
        ))}
      </select>

      {/* Render start and end date inputs */}
      {selectedDuration === "Weekly" && (
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default DurationSelector;
