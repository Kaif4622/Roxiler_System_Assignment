import React from "react";

const Pages = ({ selectedPerPage, onChange }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30];

  return (
    <div className="p-6 rounded-2xl shadow-lg max-w-xs mx-auto mt-8 sm:ml-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <span className="text-2xl font-semibold text-[#1e3d58]">Items Per Page</span>
        <select
          value={selectedPerPage}
          onChange={onChange}
          className="border-2 border-transparent rounded-lg p-3 text-lg text-[#1e3d58] focus:outline-none focus:ring-2 focus:ring-[#5ad0c7] transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]"
        >
          {pages.map((page, index) => (
            <option key={index} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pages;
