// WeeklyCalendar.tsx
import React, { useState } from "react";
import "./WeeklyCalendar.css";

const getDayName = (date: Date) =>
  date.toLocaleDateString("fr-FR", { weekday: "long" });

const getDateText = (date: Date) =>
  date.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });

const getMonthYear = (date: Date) =>
  date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

const getYear = (date: Date) => date.getFullYear();

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const WeeklyCalendar: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const goToPreviousDays = () => setStartDate(addDays(startDate, -3));
  const goToNextDays = () => setStartDate(addDays(startDate, 3));
  const goToPreviousMonth = () => {
    const newDate = new Date(startDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setStartDate(newDate);
  };
  const goToNextMonth = () => {
    const newDate = new Date(startDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setStartDate(newDate);
  };
  const goToPreviousYear = () => {
    const newDate = new Date(startDate);
    newDate.setFullYear(newDate.getFullYear() - 1);
    setStartDate(newDate);
  };
  const goToNextYear = () => {
    const newDate = new Date(startDate);
    newDate.setFullYear(newDate.getFullYear() + 1);
    setStartDate(newDate);
  };

  const daysToDisplay = [0, 1, 2].map((offset) => addDays(startDate, offset));

  return (
    <div className="calendar-container">
      <div className="calendar-nav centered-nav">
        <button onClick={goToPreviousYear}>«</button>
        <button onClick={goToPreviousMonth}>‹</button>
        <div className="month-year">{getMonthYear(startDate)}</div>
        <button onClick={goToNextMonth}>›</button>
        <button onClick={goToNextYear}>»</button>
      </div>

      <div className="calendar-main">
        <button className="arrow-button" onClick={goToPreviousDays}>
          ←
        </button>

        <div className="calendar-days">
          {daysToDisplay.map((day, index) => (
            <div
              key={day.toDateString()}
              className={`calendar-day ${
                selectedDate?.toDateString() === day.toDateString()
                  ? "selected"
                  : ""
              } ${index === 1 ? "center-day" : ""}`}
              onClick={() => setSelectedDate(day)}
            >
              <div className="day-name">{getDayName(day)}</div>
              <div className="day-date">{getDateText(day)}</div>
              <div className="day-year">{getYear(day)}</div>
            </div>
          ))}
        </div>

        <button className="arrow-button" onClick={goToNextDays}>
          →
        </button>
      </div>

      {selectedDate && (
        <p className="calendar-selection">
          Vous avez cliqué sur :{" "}
          <strong>
            {getDayName(selectedDate)} {getDateText(selectedDate)}{" "}
            {getYear(selectedDate)}
          </strong>
        </p>
      )}
    </div>
  );
};

export default WeeklyCalendar;
