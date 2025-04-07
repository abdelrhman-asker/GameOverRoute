import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import { dataContext } from "./context/Store";
const BasicTable = () => {
  const { dataAll } = useContext(dataContext);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dataAll, []);
  const tableHandling = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableHandling;
  const { globalFilter } = state;
  // console.log(page);

  // // console.log(
  //   "rows",
  //   getId.map((e) => e.original.Emoji)
  // );
  const [getId, setGetId] = useState(page);

  return (
    <div>
      <input
        type="search"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, e) => {
                  row.values.title === "Tarisland" && (row.values.Emoji = "🗑️");

                  // console.log("onMaping", row.values.STATUS, row.values.Emoji);
                  return (
                    <td
                      className={
                        cell.value === "View Details"
                          ? "Action-Items"
                          : cell.value === "Rejected"
                          ? "RejectedItem"
                          : cell.value === "Approved"
                          ? "ApprovedItem"
                          : cell.value === "Pending"
                          ? "PendingItem"
                          : null
                      }
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <>
        <button onClick={() => previousPage()}>Previous</button>
        <button onClick={() => nextPage()}>Next</button>
      </>
    </div>
  );
};

export default BasicTable;
