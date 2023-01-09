import React from 'react';
import { useTable } from 'react-table';

function ReactTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="w-full overflow-auto py-5 px-[25px] rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center">
          <h6 className="font-semibold text-[22px] leading-[33px] mr-2.5">Rejected Applications</h6>
          <span className="px-3 py-[1px] rounded-md	flex items-center font-semibold bg-[#FFF1D7]">500</span>
        </div>
        <button className="px-3 py-[1px] rounded-md	flex items-center font-semibold bg-[#EBFFFA] shadow-[0px_3px_16px_rgba(171,171,171,0.25)]">View All</button>
      </div>
      <table className="table-auto w-full h-full text-center" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 text-[15px] text-[#9A9A9A] font-normal"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`${row.cells.length - 1 !== i && 'border-b'}`}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`pt-2 pb-7 text-gray-700 `}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ReactTable;
