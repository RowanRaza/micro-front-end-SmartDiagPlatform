import "./Dashboard.css";
import WeeklyCalendar from "./components/calendar/WeeklyCalendar";
import DashboardChart from "./components/graph/DashboardChart";
import GlobalDashboard from "./components/gobal/GlobalDashboard";
import EquipmentHistory from "../history/History";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <WeeklyCalendar />
      </div>

      <div className="dashboard-right">
        <div className="dashboard-top">
          <div className="dashboard-graph">
            <DashboardChart />
          </div>
          <div className="dashboard-global">
            <GlobalDashboard anomalyRate={27.3} />
          </div>
        </div>
        <div className="dashboard-bottom">
          <EquipmentHistory />
        </div>
      </div>
    </div>
  );
}
