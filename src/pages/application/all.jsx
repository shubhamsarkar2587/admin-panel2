import { useState } from 'react';
import { ViewAllBtn } from '../../components/buttons/ViewAllBtn';
import DatePickerInput from '../../components/common/DatePicker';
import { MyPopover } from '../../components/popover/Popover';
import { StepProgressBar } from '../../components/progressBar/ProgressBar';
import { Pagination } from '../../components/reactTable/Pagination';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { PopoverChildComp, PopoverParentComp } from '../../components/reactTable/ReactTablePopupBtn';
import { SearchBar } from '../../components/searchbar/SearchBar';
import { verificationSteps } from '../../containers/kyc/kycData';

const singleData = {
	clientName: 'Ankit Singh',
	mobileNumber: '7014587528',
	createdAt: '10 Dac 2022',
	updatedAt: '16 Dec 2022',
	status: 'Incomplete',
	steps: 'dfdfdf0',
	source: '',
	rm: 'AK Singh',
	verifier: 'VK Bansal',
	actions: 'dd'
};

const data = [singleData, singleData, singleData];

export const AllApplication = () => {
	const [steps, setSteps] = useState(verificationSteps || []);

	const columns = [
		{ Header: 'Client Name', accessor: 'clientName', minWidth: 130 },
		{ Header: 'Mobile Number', accessor: 'mobileNumber', minWidth: 130 },
		{ Header: 'Created At', accessor: 'createdAt', minWidth: 130 },
		{ Header: 'Updated At', accessor: 'updatedAt', minWidth: 130 },
		{ Header: 'Status', accessor: 'status', minWidth: 130 },
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
					lineDim="h-[2px]"
				/>
			)
		},
		{ Header: 'Source', accessor: 'source', minWidth: 90 },
		{ Header: 'Source', accessor: 'rm', minWidth: 100 },
		{ Header: 'Verifier', accessor: 'verifier', minWidth: 100 },
		{
			Header: 'Actions',
			accessor: 'actions',
			minWidth: 60,
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
							title="All Applications"
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
					<ReactTable columns={columns} data={[...data, ...data]} displayBlock={true} />
					<Pagination columns={columns} data={data} />
				</div>
			</div>
		</>
	);
};
