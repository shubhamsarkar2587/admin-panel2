import { ViewAllBtn } from '../components/buttons/ViewAllBtn';
import DatePickerInput from '../components/common/DatePicker';
import { Pagination } from '../components/reactTable/Pagination';
import { ReactTable } from '../components/reactTable/ReactTable';
import { ReactTableHeader } from '../components/reactTable/ReactTableHeader';
import { SearchBar } from '../components/searchbar/SearchBar';

const columns = [
	{ Header: 'Client Name', accessor: 'clientName', width: 130 },
	{ Header: 'Pan', accessor: 'pan', width: 130 },
	{ Header: 'Mobile Number', accessor: 'mobileNumber', width: 130 },
	{ Header: 'Application type', accessor: 'applicationType', width: 130 },
	{ Header: 'Status', accessor: 'status', width: 130 },
	{ Header: 'Created At', accessor: 'createdAt', width: 130 },
	{ Header: 'Last updatedAt', accessor: 'lastUpdatedAt', width: 130 },
	{ Header: 'Verifier Name', accessor: 'verifierName', width: 130 }
];

const data = [
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' },
	{ clientName: 'Last updatedAt', pan: 'BHD2587N', mobileNumber: '9988774455', applicationType: 'New', status: 'Pending Verification', createdAt: '02-01-2023', lastUpdatedAt: '02-01-2023', verifierName: 'Verifier Name' }
];

export const ReassignmentReport = () => {
	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Reassignment Report"
							numberOfApplications={450}
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
