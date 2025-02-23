"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ViolationChart({ zipCode }) {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!zipCode) return;

    async function fetchViolations() {
      try {
        const res = await fetch(`/api/violations?zip=${zipCode}`);
        const data = await res.json();

        if (data.error) {
          setError(data.error);
          setChartData(null);
          return;
        }

        // Prepare data for Chart.js
        const labels = data.violations.map((v) => v[0]);
        const counts = data.violations.map((v) => v[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: "Violation Frequency",
              data: counts,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
        });

        setError(null);
      } catch (err) {
        setError("Failed to load data");
      }
    }

    fetchViolations();
  }, [zipCode]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!chartData) return <p>Loading...</p>;

  return <Bar data={chartData} options={{ responsive: true }} />;
}