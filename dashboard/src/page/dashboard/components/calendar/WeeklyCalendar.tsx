import React, { useState } from "react";
import { calendarData, Entry } from "./data";
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
  const [startDate, setStartDate] = useState(new Date("2025-06-11"));
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

  // Filtrer toutes les entrées correspondant au jour sélectionné
  const entriesForDate: Entry[] = selectedDate
    ? calendarData.data.filter(
        (e) =>
          new Date(e.timestamp).toDateString() === selectedDate.toDateString()
      )
    : [];

  return (
    <div className="calendar-container">
      {/* Navigation mois/année */}
      <div className="calendar-nav centered-nav">
        <button onClick={goToPreviousYear}>«</button>
        <button onClick={goToPreviousMonth}>‹</button>
        <div className="month-year">{getMonthYear(startDate)}</div>
        <button onClick={goToNextMonth}>›</button>
        <button onClick={goToNextYear}>»</button>
      </div>

      {/* Sélecteur de jours */}
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

      {/* Résultat du clic */}
      {selectedDate && (
        <div className="calendar-selection">
          <p>
            Vous avez cliqué sur :{" "}
            <strong>
              {getDayName(selectedDate)} {getDateText(selectedDate)}{" "}
              {getYear(selectedDate)}
            </strong>
          </p>

          {entriesForDate.length > 0 ? (
            <div className="equipment-list">
              {entriesForDate.map((entry) => (
                <div key={entry.id} className="equipment-card">
                  <h4>
                    {entry.equipment.name}{" "}
                    <strong style={{ fontSize: "10px" }}>
                      anomalie : {entry.anomaly_score}
                    </strong>{" "}
                  </h4>
                  <ul>
                    <li>
                      <strong>Modèle :</strong> {entry.equipment.model}
                    </li>
                    <li>
                      <strong>Emplacement :</strong> {entry.equipment.location}
                    </li>
                    <li>
                      <strong>Installé le :</strong>{" "}
                      {entry.equipment.installed_date}
                    </li>
                    <li>
                      <strong>Température :</strong> {entry.temperature_c} °C
                    </li>
                    <li>
                      <strong>Vibration :</strong> {entry.vibration_mm_s} mm/s
                    </li>
                    <li>
                      <strong>Pression :</strong> {entry.pressure_bar} bar
                    </li>
                    <li>
                      <strong>Courant :</strong> {entry.current_a} A
                    </li>
                    <li>
                      <strong>Runtime :</strong> {entry.runtime_hours} h
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun équipement trouvé pour cette date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WeeklyCalendar;
