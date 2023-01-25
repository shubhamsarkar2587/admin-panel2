import { useState } from 'react';
import { AddUser } from '../components/buttons/AddUser';
import DatePickerInput from '../components/common/DatePicker';
import { VerifyAdminModal } from '../components/modal/VerifyAdminModal';
import { ReactTable } from '../components/reactTable/ReactTable';
import { ReactTableHeader } from '../components/reactTable/ReactTableHeader';
import { SearchBar } from '../components/searchbar/SearchBar';

const data = [
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square, Indore', status: 'active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' }
];

export const UserDetail = () => {
	const [isVerifyAdminModelOpen, setIsVerifyAdminModelOpen] = useState(false);

	const handleAddUser = () => {
		setIsVerifyAdminModelOpen(true);
	};

	const columns = [
		{ Header: 'User Name', accessor: 'userName', minWidth: 120 },
		{ Header: 'Designation', accessor: 'designation', minWidth: 140 },
		{ Header: 'Role', accessor: 'role', minWidth: 60 },
		{ Header: 'Email', accessor: 'email', minWidth: 120 },
		{ Header: 'Mobile No.', accessor: 'mobileNo', minWidth: 120 },
		{ Header: 'Branch', accessor: 'branch', minWidth: 150 },
		{ Header: 'Status', accessor: 'status', minWidth: 80 },
		{ Header: 'Created date', accessor: 'createdDate', minWidth: 120 },
		{ Header: 'Last updated At', accessor: 'lastUpdatedAt', minWidth: 120 },
		{ Header: 'Brokerage Mapped', accessor: 'brokerageMapped', minWidth: 110 }
	];

	return (
		<>
			<div className="w-full flex flex-col overflow-hidden">
				<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
					<div className="flex items-center justify-between mb-7">
						<ReactTableHeader
							title="User Detail"
						/>
						<AddUser handleAddBtn={handleAddUser} />
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
					<ReactTable columns={columns} data={[...data]} displayBlock={true} />
				</div>
			</div>
			<VerifyAdminModal
				isModalOpen={isVerifyAdminModelOpen}
				handleModel={() => setIsVerifyAdminModelOpen(false)}
			/>
		</>
	);
};
