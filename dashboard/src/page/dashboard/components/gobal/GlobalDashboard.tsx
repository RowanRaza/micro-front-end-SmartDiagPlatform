import React from "react";
import "./GlobalDashboard.css";

type GlobalDashboardProps = {
  anomalyRate: number; // taux d'anomalie en pourcentage (ex: 27.5)
};

const GlobalDashboard: React.FC<GlobalDashboardProps> = ({ anomalyRate }) => {
  return (
    <div className="global-dashboard-container">
      {/* Texte au dessus */}
      <div className="text-top">État Global</div>

      {/* Texte à gauche */}
      <div className="text-left">ANOMALIE</div>

      {/* Texte en haut à droite */}
      <div className="text-top-right">Analyse</div>

      {/* Pourcentage grand en bas à droite */}
      <div className="percentage">{anomalyRate.toFixed(1)}%</div>
    </div>
  );
};

export default GlobalDashboard;
