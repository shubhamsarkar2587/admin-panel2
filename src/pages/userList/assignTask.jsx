import { useState } from 'react';
import CustomDatePicker from '../../components/inputs/CustomDatePicker';
import { StepProgressBar } from '../../components/progressBar/ProgressBar';
import { PageCount } from '../../components/reactTable/PageCount';
import { Pagination } from '../../components/reactTable/Pagination';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { reactTableStatusValue } from '../../components/reactTable/reactTableData';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { SearchBar } from '../../components/searchbar/SearchBar';
import { verificationSteps } from '../../containers/kyc/kycData';

const data = [
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', applicationType: 'Modification', mobileNumber: '7014587528', status: 'Incomplete', steps: 'dfdfdf0', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', applicationType: 'Modification', mobileNumber: '7014587528', status: 'Incomplete', steps: 'dfdfdf0', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', applicationType: 'Modification', mobileNumber: '7014587528', status: 'Incomplete', steps: 'dfdfdf0', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', applicationType: 'Modification', mobileNumber: '7014587528', status: 'Incomplete', steps: 'dfdfdf0', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh' },
	{ clientName: 'Ankit Singh', pan: 'BHD2587N', applicationType: 'Modification', mobileNumber: '7014587528', status: 'Incomplete', steps: 'dfdfdf0', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', rm: 'AK Singh' }
];

export const AssignTask = () => {
	const [steps, setSteps] = useState(verificationSteps || []);

	const columns = [
		{ Header: 'Client Name', accessor: 'clientName', minWidth: 130 },
		{ Header: 'Mobile Number', accessor: 'mobileNumber', minWidth: 130 },
		{ Header: 'PAN', accessor: 'pan', minWidth: 130 },
		{ Header: 'Application type', accessor: 'applicationType', minWidth: 130 },
		{
			Header: 'Status',
			accessor: 'status',
			minWidth: 150,
			Cell: ({ row }) => (
				<div
					className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppinsMedium"
					style={{
						backgroundColor: reactTableStatusValue[row.original.status]?.bgColor
					}}
				>
					{row.original.status}
				</div>
			)
		},
		{
			Header: 'Steps',
			accessor: 'steps',
			minWidth: 150,
			Cell: ({ row }) => (
				<StepProgressBar
					selectedStep={7}
					steps={steps || []}
					setSteps={setSteps}
					width="w-full"
					circleDim="10px"
					circleRadius="1px"
					lineDim="h-[2px]"
				/>
			)
		},
		{ Header: 'Created At', accessor: 'createdAt', minWidth: 130 },
		{ Header: 'Last Updated At', accessor: 'updatedAt', minWidth: 130 },
		{ Header: 'RM', accessor: 'rm', minWidth: 100 }
	];

	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Assign Tasks"
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
					<ReactTable columns={columns} data={[...data, ...data]} displayBlock={true} />
					<Pagination columns={columns} data={data} />
				</div>
			</div>
		</>
	);
};
