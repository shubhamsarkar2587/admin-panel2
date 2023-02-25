import { useState } from 'react';
import { AddBrokerageBtn } from '../../components/buttons/AddBrokerageBtn';
import CustomDatePicker from '../../components/inputs/CustomDatePicker';
import { AddBrokerage } from '../../components/modal/admin/addBrokerage/AddBrokerage';
import { PageCount } from '../../components/reactTable/PageCount';
import { Pagination } from '../../components/reactTable/Pagination';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { SearchBar } from '../../components/searchbar/SearchBar';

const data = [
	{ sNo: '1', planName: 'Low', segment: 'Equity Cash', brokerageType: 'Intraday', brokerageName: '030303', brokerageCode: '1557' },
	{ sNo: '2', planName: 'Low', segment: 'Equity Cash', brokerageType: 'Intraday', brokerageName: '030303', brokerageCode: '1557' },
	{ sNo: '3', planName: 'Low', segment: 'Equity Cash', brokerageType: 'Intraday', brokerageName: '030303', brokerageCode: '1557' }
];

export const BrokeragePlan = () => {
	const [isBrokerageModalOpen, setIsBrokerageModalOpen] = useState(false);

	const columns = [
		{ Header: 'S. No.', accessor: 'sNo' },
		{ Header: 'Plan Name', accessor: 'planName' },
		{ Header: 'Segment', accessor: 'segment' },
		{ Header: 'Brokerage Type', accessor: 'brokerageType' },
		{ Header: 'Brokerage Name', accessor: 'brokerageName' },
		{ Header: 'Brokerage Code', accessor: 'brokerageCode' }
	];

	return (
		<>
			<div className="w-full flex flex-col ">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="Brokerage Plans"
						/>
						<div className="flex">
							<div className="mr-[24px]">
								<PageCount />
							</div>
							<AddBrokerageBtn
								handleAddBrokerageBtn={() => setIsBrokerageModalOpen(true)}
							/>
						</div>
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
			<AddBrokerage
				isModalOpen={isBrokerageModalOpen}
				closeModal={() => setIsBrokerageModalOpen(false)}
				title="Add brokerage"
			/>
		</>
	);
};
