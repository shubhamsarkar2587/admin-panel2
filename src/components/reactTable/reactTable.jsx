import { useTable } from 'react-table';

export const ReactTable = ({ columns, data, displayBlock }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

	return (
		<div className="w-full grid">
			<table
				{...getTableProps()}
				className="table-auto text-center h-full w-full overflow-x-auto"
				style={{
					display: displayBlock && 'block'
				}}
			>
				<thead>
					{headerGroups.map((headerGroup, i1) => (
						<tr key={`head_group_${i1}`} {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, i2) => (
								<th
									key={`head_group_header_${i2}`}
									{...column.getHeaderProps()}
									className="pt-2 py-4 text-[15px] text-[#9A9A9A] tracking-wide leading-[22px] font-medium font-poppinsMedium"
									style={{
										minWidth: column.minWidth
									}}
								>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i1) => {
						prepareRow(row);
						return (
							<tr
								key={`row_${i1}`}
								{...row.getRowProps()}
								className={`${row.cells.length - 1 !== i1 && 'border-b'}`}
							>
								{row.cells.map((cell, i2) => {
									return (
										<td
											key={`row_cell_${i2}`}
											{...cell.getCellProps()}
											className="py-4 text-[15px] whitespace-nowrap leading-[22px] font-medium font-poppinsMedium"
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
};
