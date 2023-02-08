import { Link } from 'react-router-dom';
import { ViewAllBtn } from '../../components/buttons/ViewAllBtn';
import DatePickerInput from '../../components/common/DatePicker';
import { MyPopover } from '../../components/popover/Popover';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { PopoverParentComp } from '../../components/reactTable/ReactTablePopupBtn';
import { SearchBar } from '../../components/searchbar/SearchBar';

const data = [
	{ rmName: 'V.K. Singh', employeeCode: 34342232334, branch: 'fdf3343', actions: '' },
	{ rmName: 'V.K. Singh', employeeCode: 34342232334, branch: 'fdf3343', actions: '' },
	{ rmName: 'V.K. Singh', employeeCode: 34342232334, branch: 'fdf3343', actions: '' },
	{ rmName: 'V.K. Singh', employeeCode: 34342232334, branch: 'fdf3343', actions: '' }
];

export const UserList = () => {
	const PopoverChildComp = () => (
		<div
			className="my-component-popover-content w-32 px-4 py-2 rounded-[10px] flex flex-col border-solid border-[#ECECEC] bg-white"
		>
			<Link to="/user-list/assign-task" className="mb-1">
				<span className="cursor-pointer hover:text-[#5367FC]">Selected Task</span>
			</Link>
		</div>
	);

	const columns = [
		{ Header: 'RM Name', accessor: 'rmName' },
		{ Header: 'Employee code', accessor: 'employeeCode' },
		{ Header: 'Branch', accessor: 'branch' },
		{
			Header: 'Actions',
			accessor: 'actions',
			Cell: ({ row }) => (
				<MyPopover
					PopoverParentComp={PopoverParentComp}
					PopoverChildComp={PopoverChildComp}
				/>
			)
		}
	];

	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Users List"
						/>
						<ViewAllBtn />
					</div>
					<div className="mb-6 flex items-center justify-between">
						<SearchBar border={'border'} />
						<div className="flex items-center">
							<span className="text-[#787878] mr-3 font-medium font-poppinsMedium">Select Date</span>
							<div className="mr-3">
								<DatePickerInput placeholder="From" />
							</div>
							<div>
								<DatePickerInput placeholder="To" />
							</div>
						</div>
					</div>
					<ReactTable columns={columns} data={[...data]} />
				</div>
			</div>
		</>
	);
};
