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
declare const AlertNotification: ({ alert }: {
    alert: Alert;
}) => import("react/jsx-runtime").JSX.Element;
export default AlertNotification;
