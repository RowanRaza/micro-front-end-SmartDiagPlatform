import AlertNotification from "./AlertNotification";

const AlertList = ({ alerts }: { alerts: any[] }) => {
  return (
    <div className="p-4">
      {alerts.map((alert) => (
        <AlertNotification key={alert.alert_id} alert={alert} />
      ))}
    </div>
  );
};

export default AlertList;
