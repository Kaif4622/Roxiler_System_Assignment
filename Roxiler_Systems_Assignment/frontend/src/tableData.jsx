import React from "react";
import "./App.css";
import Pages from "./pages";

const TableData = ({
  transactions,
  onNextPage,
  onPrevPage,
  page,
  selectedPerPage,
  onChange,
}) => {
  return (
    <div className="m-5">
      <div className="overflow-x-auto flex flex-col container max-w-full bg-[#f1f1f1] rounded-xl shadow-lg p-5 my-10">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="bg-[#5f3dc4] text-white">
                  <tr>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Sold
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Image
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr className="border-b hover:bg-[#f5f5f5]" key={index}>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {transaction._id}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal">
                        {transaction.title}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-normal">
                        {transaction.description}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {transaction.price}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        NA
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        YES
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        Not Available
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row justify-between font-semibold mx-5 my-10">
        <div className="text-lg text-[#5f3dc4]">
          <span>Page No: {page}</span>
        </div>

        {/* Pagination buttons */}
        <div className="space-x-3 my-3 sm:my-0">
          <button
            onClick={onPrevPage}
            className="px-6 py-2 text-white bg-[#5f3dc4] rounded-md hover:bg-[#5f3dc4]/90 transition-all duration-300"
          >
            Previous
          </button>
          <span className="text-xl">-</span>
          <button
            onClick={onNextPage}
            className="px-6 py-2 text-white bg-[#5f3dc4] rounded-md hover:bg-[#5f3dc4]/90 transition-all duration-300"
          >
            Next
          </button>
        </div>

        {/* Items Per Page Component */}
        <div>
          <Pages selectedPerPage={selectedPerPage} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default TableData;
