import React from "react";
import "./EquipmentHistory.css";

type EquipmentStatus = "bien" | "anormal" | "mauvais";

interface EquipmentCheck {
  name: string;
  checkDate: string;
  status: EquipmentStatus;
}
const fakeData: EquipmentCheck[] = [
  { name: "Générateur A", checkDate: "2025-06-10", status: "bien" },
  { name: "Pompe B", checkDate: "2025-06-09", status: "anormal" },
  { name: "Valve C", checkDate: "2025-06-08", status: "mauvais" },
  { name: "Capteur D", checkDate: "2025-06-07", status: "bien" },
  { name: "Moteur E", checkDate: "2025-06-06", status: "anormal" },
  { name: "Module K", checkDate: "2025-05-31", status: "mauvais" },
];

const EquipmentHistory: React.FC = () => {
  return (
    <div className="equipment-history">
      <h3 className="history-title">Historique des checking</h3>
      <div className="history-list">
        {fakeData.map((item, index) => (
          <div key={index} className="history-row">
            <span className="history-name">{item.name}</span>
            <span className="history-date">{item.checkDate}</span>
            <span className="history-status">
              <span
                className={`status-circle ${item.status}`}
                title={item.status}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentHistory;
