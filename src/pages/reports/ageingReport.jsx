import { svgAssets } from '../../assets/asset';
import DatePickerInput from '../../components/common/DatePicker';
import { PageCount } from '../../components/reactTable/PageCount';
import { Pagination } from '../../components/reactTable/Pagination';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { SearchBar } from '../../components/searchbar/SearchBar';

const data = [
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', submitDate: '02-01-2023', verifyDate: '02-01-2023', eSignDate: '05-01-2023', sendToCCMDate: '06-01-2023', uccDate: '09-01-2023' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', submitDate: '02-01-2023', verifyDate: '02-01-2023', eSignDate: '05-01-2023', sendToCCMDate: '06-01-2023', uccDate: '09-01-2023' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', submitDate: '02-01-2023', verifyDate: '02-01-2023', eSignDate: '05-01-2023', sendToCCMDate: '06-01-2023', uccDate: '09-01-2023' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', submitDate: '02-01-2023', verifyDate: '02-01-2023', eSignDate: '05-01-2023', sendToCCMDate: '06-01-2023', uccDate: '09-01-2023' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', submitDate: '02-01-2023', verifyDate: '02-01-2023', eSignDate: '05-01-2023', sendToCCMDate: '06-01-2023', uccDate: '09-01-2023' }
];

export const AgeingReport = () => {
	const columns = [
		{ Header: 'LD Code', accessor: 'ldCode', minWidth: 120 },
		{ Header: 'Name', accessor: 'name', minWidth: 120 },
		{ Header: 'PAN', accessor: 'pan', minWidth: 120 },
		{
			Header: 'Equity',
			accessor: 'equity',
			minWidth: 100,
			Cell: ({ row }) => (
				<img className="inline-flex justify-center" alt='correct' src={svgAssets.verifyApplication.rightField} />
			)
		},
		{
			Header: 'Deroivatives',
			accessor: 'deroivatives',
			minWidth: 120,
			Cell: ({ row }) => (
				<img className="inline-flex justify-center" alt='correct' src={svgAssets.verifyApplication.rightField} />
			)
		},
		{
			Header: 'Commodity',
			accessor: 'commodity',
			minWidth: 120,
			Cell: ({ row }) => (
				<img className="inline-flex justify-center" alt='correct' src={svgAssets.verifyApplication.rightField} />
			)
		},
		{ Header: 'Submit Date', accessor: 'submitDate', minWidth: 120 },
		{ Header: 'Verify Date', accessor: 'verifyDate', minWidth: 120 },
		{ Header: 'E-Sign Date', accessor: 'eSignDate', minWidth: 120 },
		{ Header: 'Send to CCM Date', accessor: 'sendToCCMDate', minWidth: 120 },
		{ Header: 'UCC Date', accessor: 'uccDate', minWidth: 120 }
	];

	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Ageing Report"
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
					<ReactTable columns={columns} data={[...data, ...data]} displayBlock={true} />
					<Pagination columns={columns} data={data} />
				</div>
			</div>
		</>
	);
};
