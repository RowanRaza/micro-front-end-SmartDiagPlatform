import AlertNotification from "./AlertNotification";

const AlertList = ({ alerts }: { alerts: any[] }) => {
  return (
    <div style={{padding: 10, paddingBottom: 100}}>
      {alerts.map((alert) => (
        <AlertNotification key={alert.alert_id} alert={alert} />
      ))}
    </div>
  );
};

export default AlertList;
