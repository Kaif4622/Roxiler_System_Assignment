import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const DataChart = ({ selectedMonth }) => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Items Sold Based on Price Range",
        backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#F472B6", "#818CF8"],
        hoverBackgroundColor: "#059669",
        borderColor: "#4B5563",
        borderWidth: 2,
        borderRadius: 10,
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await fetch(
          `https://roxiler-assignment-backend.vercel.app/api/barChart?month=${selectedMonth}`
        );
        const data = await response.json();

        const labels = data.map((item) => item.range);
        const counts = data.map((item) => item.count);

        setBarChartData({
          labels,
          datasets: [
            {
              ...barChartData.datasets[0],
              data: counts,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth, barChartData]);

  return (
    <div className="p-6 md:p-10 lg:p-16 bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-purple-700">
          Bar Chart Overview - {selectedMonth}
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          This chart shows the number of items sold for different price ranges.
        </p>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        {barChartData.labels.length > 0 ? (
          <div className="h-96 md:h-[500px] lg:h-[600px]">
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                    labels: {
                      color: "#4B5563",
                      font: {
                        size: 16,
                        weight: "bold",
                      },
                    },
                  },
                  tooltip: {
                    backgroundColor: "#6D28D9",
                    titleFont: { size: 16 },
                    bodyFont: { size: 14 },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: "rgba(156,163,175,0.2)",
                    },
                    title: {
                      display: true,
                      text: "Price Range",
                      color: "#4B5563",
                      font: {
                        size: 16,
                        weight: "bold",
                      },
                    },
                  },
                  y: {
                    grid: {
                      color: "rgba(156,163,175,0.2)",
                    },
                    title: {
                      display: true,
                      text: "Number of Items Sold",
                      color: "#4B5563",
                      font: {
                        size: 16,
                        weight: "bold",
                      },
                    },
                  },
                },
              }}
            />
          </div>
        ) : (
          <div className="text-purple-700 text-center text-lg">Loading data...</div>
        )}
      </div>
    </div>
  );
};

export default DataChart;
