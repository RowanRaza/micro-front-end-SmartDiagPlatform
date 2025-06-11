import { useEffect, useRef } from "react";
import uPlot from "uplot";
import "uplot/dist/uPlot.min.css";
import "./DashboardChart.css";

function smoothData(data: number[], windowSize = 3): number[] {
  const smoothed = [];
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - Math.floor(windowSize / 2));
    const end = Math.min(data.length - 1, i + Math.floor(windowSize / 2));
    const subset = data.slice(start, end + 1);
    const avg = subset.reduce((a, b) => a + b, 0) / subset.length;
    smoothed.push(avg);
  }
  return smoothed;
}

const DashboardChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const uplotInstance = useRef<uPlot | null>(null);

  const drawChart = () => {
    if (!chartRef.current) return;

    // Si un graphique existe déjà, on le détruit
    if (uplotInstance.current) {
      uplotInstance.current.destroy();
      uplotInstance.current = null;
    }

    const normale = [30, 35, 32, 38, 40, 45, 50];
    const actuel = [25, 40, 28, 36, 42, 50, 47];

    const data: uPlot.AlignedData = [
      Float64Array.from([0, 1, 2, 3, 4, 5, 6]), // jours indexés
      Float64Array.from(smoothData(normale)),
      Float64Array.from(smoothData(actuel)),
    ];

    uplotInstance.current = new uPlot(
      {
        width: chartRef.current.offsetWidth,
        height: 200,
        series: [
          {},
          { label: "Normale", stroke: "#bb8271", width: 3 },
          { label: "Actuel", stroke: "#d67454", width: 3 },
        ],
        axes: [{}, {}],
        cursor: {
          show: true,
          x: true,
          y: true,
        },
        legend: {
          show: true,
          live: true,
        },
      },
      data,
      chartRef.current
    );
  };

  useEffect(() => {
    drawChart();

    // Redessine le graphique au resize de la fenêtre
    window.addEventListener("resize", drawChart);

    return () => {
      window.removeEventListener("resize", drawChart);
      uplotInstance.current?.destroy();
      uplotInstance.current = null;
    };
  }, []);

  return (
    <div className="dashboard-chart-container">
      <div ref={chartRef} />
    </div>
  );
};

export default DashboardChart;
