import { ReactTable } from '../../components/reactTable/ReactTable';
import Applications from '../../components/widgets/Applications';
import Date from '../../components/widgets/Date';

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
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' }
];

export const RMDashboard = () => {
	return (
		<>
			<div className="mb-[30px] flex">
				<Date />
				<Date />
				<Date />
			</div>
			<div className="mb-[30px] grid grid-cols-3 gap-x-9">
				<Applications />
				<Applications />
				<Applications />
			</div>
			<div>
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<div className="flex items-center">
							<h6 className="font-semibold text-[22px] leading-[33px] mr-2.5">All Applications</h6>
							<span className="px-3 py-[1px] rounded-md	flex items-center font-semibold bg-[#FFF1D7]">500</span>
						</div>
						<button className="px-3 py-[1px] rounded-md	flex items-center font-semibold bg-[#EBFFFA] shadow-[0px_3px_16px_rgba(171,171,171,0.25)]">View All</button>
					</div>
					<ReactTable columns={columns} data={[...data, ...data]} />
				</div>
			</div>
		</>
	);
};
