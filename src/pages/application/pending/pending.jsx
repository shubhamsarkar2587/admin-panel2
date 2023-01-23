import { Link } from 'react-router-dom';
import { ViewAllBtn } from '../../../components/buttons/ViewAllBtn';
import DatePickerInput from '../../../components/common/DatePicker';
import MyPopover from '../../../components/popover/Popover';
import Pagination from '../../../components/reactTable/Pagination';
import ReactTable from '../../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../../components/reactTable/ReactTableHeader';
import SearchBar from '../../../components/searchbar/SearchBar';

const data = [
	{ clientName: 'Tony Stark', pan: 434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: '' },
	{ clientName: 'Tony Stark', pan: 434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: '' },
	{ clientName: 'Tony Stark', pan: 434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: '' },
	{ clientName: 'Tony Stark', pan: 434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: '' },
	{ clientName: 'Tony Stark', pan: 434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: '' },
	{ clientName: 'Tony Stark', pan: 434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: '' }
];

const PendingApplication = () => {
	const PopoverParentComp = () => (
		<button
			className="w-full flex items-center justify-center"
		>
			<span className="w-[6px] h-[6px] bg-black rounded-full mx-0.5"></span>
			<span className="w-[6px] h-[6px] bg-black rounded-full mx-0.5"></span>
			<span className="w-[6px] h-[6px] bg-black rounded-full mx-0.5"></span>
		</button>
	);

	const PopoverChildComp = () => (
		<div
			className="my-component-popover-content w-32 px-4 py-2 rounded-[10px] flex flex-col border-solid border-[#ECECEC] bg-white"
		>
			<Link to="/application/pending/verify">
				<span className="cursor-pointer hover:text-[#5367FC] mb-0.5">Verify</span>
			</Link>
			<span className="cursor-pointer hover:text-[#5367FC]">View</span>
		</div>
	);

	const columns = [
		{ Header: 'Client Name', accessor: 'clientName' },
		{ Header: 'Pan', accessor: 'pan' },
		{ Header: 'Mobile Number', accessor: 'mobileNumber' },
		{ Header: 'Steps', accessor: 'steps' },
		{ Header: 'Created At', accessor: 'createdAt' },
		{ Header: 'Updated At', accessor: 'updatedAt' },
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
							title="Pending Verification"
							numberOfApplications={1500}
						/>
						<ViewAllBtn />
					</div>
					<div className="mb-6 flex items-center justify-between">
						<SearchBar border={'border'} />
						<div className="flex items-center">
							<span className="text-[#787878] mr-3">Select Date</span>
							<div className="mr-3">
								<DatePickerInput placeholder="From" />
							</div>
							<div>
								<DatePickerInput placeholder="To" />
							</div>
						</div>
					</div>
					<ReactTable columns={columns} data={[...data, ...data]} />
					<Pagination columns={columns} data={data} />
				</div>
			</div>
		</>
	);
};

export default PendingApplication;
