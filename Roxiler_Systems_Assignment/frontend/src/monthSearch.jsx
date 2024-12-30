import React from "react";

const MonthSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-between m-5">
      {/* Month Changer */}
      <div className="w-full sm:w-auto p-3 shadow-lg">
        <select
          className="font-semibold p-3 w-full focus:outline-none shadow-md"
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Search Box */}
      <div className="w-full sm:w-auto flex items-center gap-3 p-3 shadow-lg relative">
        <input
          className="p-3 w-full focus:outline-none shadow-md pr-10" // Added padding to right for icon
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search transactions..."
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
          onClick={onClear}
        >
          {/* Cross Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-8 h-8 pr-2 text-black" // Increased size of the icon
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MonthSearch;
