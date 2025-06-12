import AlertList from "../component/AlertList";
import alertsJson from "./alerts.json";


function Notification() {
  return (
    <AlertList alerts={alertsJson.data} />
  );
}

export default Notification;
