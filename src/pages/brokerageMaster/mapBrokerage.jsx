import CustomDatePicker from '../../components/inputs/CustomDatePicker';
import { PageCount } from '../../components/reactTable/PageCount';
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

export const MapBrokerage = () => {
	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Map Brokerage"
						/>
						<PageCount />
					</div>
					<div className="mb-6 flex items-center justify-between">
						<SearchBar border={'border'} />
						<div className="flex items-center">
							<span className="text-[#787878] mr-3 font-medium font-poppinsMedium">Select Date</span>
							<div className="mr-3">
								<CustomDatePicker placeholder="From" />
							</div>
							<div>
								<CustomDatePicker placeholder="To" />
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
