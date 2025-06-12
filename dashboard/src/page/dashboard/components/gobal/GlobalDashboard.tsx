import React from "react";
import "./GlobalDashboard.css";

type GlobalDashboardProps = {
  anomalyRate: number; // taux d'anomalie en pourcentage (ex: 27.5)
};

const GlobalDashboard: React.FC<GlobalDashboardProps> = ({ anomalyRate }) => {
  return (
    <div className="global-container">
      <h2 className="global-title">Taux global d'anomalies</h2>
      <div className="anomaly-circle">
        <span className="anomaly-text">{anomalyRate.toFixed(1)}%</span>
      </div>
      <div className="ia-comments">
        <p>
          L'équipement 2 présente un score élevé, ce qui suggère une bonne
          performance, mais nécessite un suivi régulier pour maintenir cette
          efficacité.
        </p>
      </div>
    </div>
  );
};

export default GlobalDashboard;
