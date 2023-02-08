import { svgAssets } from '../../assets/asset';
import { ViewAllBtn } from '../../components/buttons/ViewAllBtn';
import DatePickerInput from '../../components/common/DatePicker';
import { Pagination } from '../../components/reactTable/Pagination';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { SearchBar } from '../../components/searchbar/SearchBar';

const data = [
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', branch: 'Janzeerwala Square, Indore', openingDate: '02-01-2023', region: 'Mumbai' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', branch: 'Janzeerwala Square, Indore', openingDate: '02-01-2023', region: 'Mumbai' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', branch: 'Janzeerwala Square, Indore', openingDate: '02-01-2023', region: 'Mumbai' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', branch: 'Janzeerwala Square, Indore', openingDate: '02-01-2023', region: 'Mumbai' },
	{ ldCode: 'XYZ0145', name: 'Vikram Dubey', pan: 'MDF0145JH', equity: '', deroivatives: '', commodity: '', branch: 'Janzeerwala Square, Indore', openingDate: '02-01-2023', region: 'Mumbai' }
];

export const SalesReport = () => {
	const columns = [
		{ Header: 'LD Code', accessor: 'ldCode' },
		{ Header: 'Name', accessor: 'name' },
		{ Header: 'PAN', accessor: 'pan' },
		{
			Header: 'Equity',
			accessor: 'equity',
			Cell: ({ row }) => (
				<img className="inline-flex justify-center" alt='correct' src={svgAssets.verifyApplication.rightField} />
			)
		},
		{
			Header: 'Deroivatives',
			accessor: 'deroivatives',
			Cell: ({ row }) => (
				<img className="inline-flex justify-center" alt='correct' src={svgAssets.verifyApplication.rightField} />
			)
		},
		{
			Header: 'Commodity',
			accessor: 'commodity',
			Cell: ({ row }) => (
				<img className="inline-flex justify-center" alt='correct' src={svgAssets.verifyApplication.rightField} />
			)
		},
		{ Header: 'Branch', accessor: 'branch' },
		{ Header: 'Opening Date', accessor: 'openingDate' },
		{ Header: 'Region', accessor: 'region' }
	];

	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Sales Report"
						/>
						<ViewAllBtn />
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
