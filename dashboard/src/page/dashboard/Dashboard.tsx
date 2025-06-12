import "./Dashboard.css";
import WeeklyCalendar from "./components/calendar/WeeklyCalendar";
import DashboardChart from "./components/graph/DashboardChart";
import GlobalDashboard from "./components/gobal/GlobalDashboard";
import EquipmentHistory from "../history/History";

export default () => {
  return (
    <div className="dashboard-container">
      <div className="left-dashboard">
        <WeeklyCalendar />
      </div>
      <div className="right-dashboard">
        <div className="top-right">
          <div className="graph-dashboard">
            <DashboardChart />
          </div>
          <div className="global-dashboard">
            <GlobalDashboard anomalyRate={27.3} />
          </div>
        </div>
        <div className="bottom-right">
          <EquipmentHistory />
        </div>
      </div>
    </div>
  );
};
