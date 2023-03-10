import CustomDatePicker from '../components/inputs/CustomDatePicker';
import { PageCount } from '../components/reactTable/PageCount';
import { Pagination } from '../components/reactTable/Pagination';
import { ReactTable } from '../components/reactTable/ReactTable';
import { ReactTableHeader } from '../components/reactTable/ReactTableHeader';
import { SearchBar } from '../components/searchbar/SearchBar';

const data = [
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh', reAssignedTo: 'Puneet Gaur', reAssignedDateTime: '05-01-2023, 02:15 PM' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh', reAssignedTo: 'Puneet Gaur', reAssignedDateTime: '05-01-2023, 02:15 PM' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh', reAssignedTo: 'Puneet Gaur', reAssignedDateTime: '05-01-2023, 02:15 PM' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh', reAssignedTo: 'Puneet Gaur', reAssignedDateTime: '05-01-2023, 02:15 PM' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh', reAssignedTo: 'Puneet Gaur', reAssignedDateTime: '05-01-2023, 02:15 PM' }
];

export const ReassignmentReport = () => {
	const columns = [
		{ Header: 'Client Name', accessor: 'clientName' },
		{ Header: 'PAN', accessor: 'pan' },
		{ Header: 'Mobile Number', accessor: 'mobileNumber' },
		{ Header: 'Created At', accessor: 'createdAt' },
		{ Header: 'Last Updated At', accessor: 'updatedAt' },
		{ Header: 'RM', accessor: 'rm' },
		{ Header: 'Re-assigned To', accessor: 'reAssignedTo' },
		{ Header: 'Re-assigned date & time', accessor: 'reAssignedDateTime', width: 120 }
	];

	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Reassignment Report"
							numberOfApplications={450}
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
