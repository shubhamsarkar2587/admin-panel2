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
	{ customerName: 'Ankit Singh', ldCode: 'BHK70128GT', kycSource: '', rmName: 'V.K. Singh', verifier: 'M.K. Bansal', teleCallerName: 'Sumit Soni', acCreatedDate: '16 Dec 2022', acStatus: 'Active', actions: '' },
	{ customerName: 'Ankit Singh', ldCode: 'BHK70128GT', kycSource: '', rmName: 'V.K. Singh', verifier: 'M.K. Bansal', teleCallerName: 'Sumit Soni', acCreatedDate: '16 Dec 2022', acStatus: 'InActive', actions: '' },
	{ customerName: 'Ankit Singh', ldCode: 'BHK70128GT', kycSource: '', rmName: 'V.K. Singh', verifier: 'M.K. Bansal', teleCallerName: 'Sumit Soni', acCreatedDate: '16 Dec 2022', acStatus: 'Closed', actions: '' },
	{ customerName: 'Ankit Singh', ldCode: 'BHK70128GT', kycSource: '', rmName: 'V.K. Singh', verifier: 'M.K. Bansal', teleCallerName: 'Sumit Soni', acCreatedDate: '16 Dec 2022', acStatus: 'Dormant', actions: '' },
	{ customerName: 'Ankit Singh', ldCode: 'BHK70128GT', kycSource: '', rmName: 'V.K. Singh', verifier: 'M.K. Bansal', teleCallerName: 'Sumit Soni', acCreatedDate: '16 Dec 2022', acStatus: 'Suspended', actions: '' }
];

export const AccountList = () => {
	const columns = [
		{ Header: 'Customer Name', accessor: 'customerName', minWidth: 130 },
		{ Header: 'LD Code', accessor: 'ldCode', minWidth: 130 },
		{ Header: 'KYC Source', accessor: 'kycSource', minWidth: 130 },
		{ Header: 'RM Name', accessor: 'rmName', minWidth: 130 },
		{ Header: 'Verifier', accessor: 'verifier', minWidth: 130 },
		{ Header: 'Telecaller Name', accessor: 'teleCallerName', minWidth: 130 },
		{ Header: 'A/C Created Date', accessor: 'acCreatedDate', minWidth: 130 },
		{
			Header: 'A/C Created Date',
			accessor: 'acStatus',
			minWidth: 130,
			Cell: ({ row }) => (
				<div
					className="min-w-[95px] px-3 py-1 inline-flex justify-center rounded-[6px] text-xs font-medium font-poppinsMedium"
					style={{
						backgroundColor: reactTableStatusValue[row.original.acStatus]?.bgColor
					}}
				>
					{row.original.acStatus}
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
							title="Account List"
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
