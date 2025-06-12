import React, { useState } from "react";
import "./AlertNotification.css";

type Alert = {
  alert_id: number;
  timestamp: string;
  alert_level: "Low" | "Medium" | "High";
  anomaly_score: number;
  maintenance_due: boolean;
  incident_loss: boolean;
  management_reported: boolean;
  units_sold: number;
  units_remaining: number;
  equipment: {
    name: string;
    model: string;
    location: string;
  };
  responsible: {
    name: string;
    role: string;
  } | null;
};

const getBadgeLabel = (level: string) => {
  switch (level) {
    case "High": return "🔴 Critique";
    case "Medium": return "🟠 Moyenne";
    case "Low": return "🟢 Faible";
    default: return "ℹ️ Alerte";
  }
};

const AlertNotification = ({ alert }: { alert: Alert }) => {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(alert.timestamp).toLocaleString();

  return (
    <div className={`notification-card ${expanded ? "expanded" : ""}`}>
      <div className={`badge badge-${alert.alert_level.toLowerCase()}`}>
        {getBadgeLabel(alert.alert_level)}
      </div>

      <div className="notification-content">
        <p className="notification-title">
          Anomalie détectée sur {alert.equipment.name}
        </p>

        <p className="notification-desc">
          Score d'anomalie de {alert.anomaly_score} sur l’équipement{" "}
          {alert.equipment.model}, situé à {alert.equipment.location}.
        </p>

        <span className="notification-user">
          {alert.responsible ? alert.responsible.name : "Non assigné"}
        </span>

        {expanded && (
          <div className="extra-info">
            <p>
              📦 Unités vendues : {alert.units_sold} — restantes :{" "}
              {alert.units_remaining}
            </p>
            <p>
              🛠 Maintenance requise : {alert.maintenance_due ? "Oui" : "Non"}
            </p>
            <p>
              📊 Rapport direction : {alert.management_reported ? "Oui" : "Non"}
            </p>
            <p>
              ❗ Perte d’incident : {alert.incident_loss ? "Oui" : "Non"}
            </p>
            {alert.responsible && (
              <p>
                👤 Responsable : {alert.responsible.name} (
                {alert.responsible.role})
              </p>
            )}
          </div>
        )}

        <button
          className="toggle-btn"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? " Afficher moins ▲" : "Afficher plus ▼"}
        </button>
      </div>

      <div className="notification-time">
        <span className="clock-icon">🕒</span>
        {date}
      </div>
    </div>
  );
};

export default AlertNotification;
