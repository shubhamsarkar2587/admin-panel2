import DatePickerInput from '../components/common/DatePicker';
import { MyPopover } from '../components/popover/Popover';
import { PageCount } from '../components/reactTable/PageCount';
import { Pagination } from '../components/reactTable/Pagination';
import { ReactTable } from '../components/reactTable/ReactTable';
import { reactTableStatusValue } from '../components/reactTable/reactTableData';
import { ReactTableHeader } from '../components/reactTable/ReactTableHeader';
import { PopoverChildComp, PopoverParentComp } from '../components/reactTable/ReactTablePopupBtn';
import { SearchBar } from '../components/searchbar/SearchBar';

const data = [
	{ clientName: 'Ankit Singh', ldCode: 'BHK70128GT', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', eSignStatus: 'Pending', actions: '' },
	{ clientName: 'Ankit Singh', ldCode: 'BHK70128GT', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', eSignStatus: 'Done', actions: '' },
	{ clientName: 'Ankit Singh', ldCode: 'BHK70128GT', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', eSignStatus: 'Pending', actions: '' },
	{ clientName: 'Ankit Singh', ldCode: 'BHK70128GT', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', eSignStatus: 'Done', actions: '' },
	{ clientName: 'Ankit Singh', ldCode: 'BHK70128GT', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', eSignStatus: 'Pending', actions: '' },
	{ clientName: 'Ankit Singh', ldCode: 'BHK70128GT', mobileNumber: '7014587528', createdAt: '10 Dac 2022', updatedAt: '16 Dec 2022', eSignStatus: 'Done', actions: '' }
];

export const ESignReport = () => {
	const columns = [
		{ Header: 'Client Name', accessor: 'clientName', minWidth: 130 },
		{ Header: 'LD Code', accessor: 'ldCode', minWidth: 130 },
		{ Header: 'Mobile Number', accessor: 'mobileNumber', minWidth: 130 },
		{ Header: 'Created At', accessor: 'createdAt', minWidth: 130 },
		{ Header: 'Last Update At', accessor: 'updatedAt', minWidth: 130 },
		{
			Header: 'E-Sign Status',
			accessor: 'eSignStatus',
			minWidth: 130,
			Cell: ({ row }) => (
				<div
					className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppinsMedium"
					style={{
						backgroundColor: reactTableStatusValue[row.original.eSignStatus]?.bgColor
					}}
				>
					{row.original.eSignStatus}
				</div>
			)
		},
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
							title="E-Sign Report"
						/>
						<PageCount />
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
					<ReactTable columns={columns} data={[...data, ...data]} />
					<Pagination columns={columns} data={data} />
				</div>
			</div>
		</>
	);
};
