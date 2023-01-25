import { ViewAllBtn } from '../../components/buttons/ViewAllBtn';
import DatePickerInput from '../../components/common/DatePicker';
import { Pagination } from '../../components/reactTable/Pagination';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { SearchBar } from '../../components/searchbar/SearchBar';

const columns = [
	{ Header: 'Client Name', accessor: 'clientName' },
	{ Header: 'Pan', accessor: 'pan' },
	{ Header: 'Mobile Number', accessor: 'mobileNumber' },
	{ Header: 'Steps', accessor: 'steps' },
	{ Header: 'Created At', accessor: 'createdAt' },
	{ Header: 'Updated At', accessor: 'updatedAt' },
	{ Header: 'Actions', accessor: 'actions' }
];

const data = [
	{ clientName: 'Tony Stark', pan: 34342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 34342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 34342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 34342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 34342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 34342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' }
];

export const MonthlyReport = () => {
	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Monthly Report"
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
