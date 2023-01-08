import React from 'react';
import { useTable } from 'react-table';

function ReactTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className="w-full py-5 px-[25px] rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
      <table className="table-auto w-full h-full text-left" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 font-bold uppercase text-sm text-gray-700"
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
                className={`${row.cells.length -1 !== i && 'border-b'}`}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`pt-2 pb-7 text-gray-700`}
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
