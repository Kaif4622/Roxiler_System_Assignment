// Statistics.jsx
import React, { useEffect, useState } from "react";

const DataStats = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(
          `https://roxiler-assignment-backend.vercel.app/api/statistics?month=${selectedMonth}`
        );
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-purple-700">
          Statistics Overview - {selectedMonth}
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Summary of sales and item statuses for the selected month.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Total Sale Amount
          </h3>
          <p className="text-2xl font-extrabold text-green-500">
            ${statistics.totalSaleAmount}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Total Sold Items
          </h3>
          <p className="text-2xl font-extrabold text-blue-500">
            {statistics.totalSoldItems}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Total Not Sold Items
          </h3>
          <p className="text-2xl font-extrabold text-red-500">
            {statistics.totalNotSoldItems}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataStats;
