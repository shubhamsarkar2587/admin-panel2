import { useState } from 'react';
import { AddUser } from '../components/buttons/AddUser';
import DatePickerInput from '../components/common/DatePicker';
import { AddUserModal } from '../components/modal/admin/AddUserModel';
import { VerifyAdminModal } from '../components/modal/admin/VerifyAdminModal';
import { ReactTable } from '../components/reactTable/ReactTable';
import { reactTableStatusValue } from '../components/reactTable/reactTableData';
import { ReactTableHeader } from '../components/reactTable/ReactTableHeader';
import { SearchBar } from '../components/searchbar/SearchBar';

const data = [
	{ name: 'Vikas', userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square', status: 'Active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ name: 'Vikas', userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square', status: 'InActive', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ name: 'Vikas', userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square', status: 'Active', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' },
	{ name: 'Vikas', userName: 'Vikas_dy', designation: 'Branch Manager', role: 'RM', email: 'vi@bigul.co', mobileNo: '9988774455', branch: 'Janzeerwala Square', status: 'InActive', createdDate: '02-01-2023', lastUpdatedAt: '02-01-2023', brokerageMapped: 'Low' }
];

export const UserDetail = () => {
	const [isVerifyAdminModelOpen, setIsVerifyAdminModelOpen] = useState(false);
	const [isAddUserModelOpen, setIsAddUserModelOpen] = useState(false);

	const handleAddUser = () => {
		setIsVerifyAdminModelOpen(true);
	};

	const handleVerifyAdmin = () => {
		setIsVerifyAdminModelOpen(false);
		setTimeout(() => {
			setIsAddUserModelOpen(true);
		}, 800);
	};

	const columns = [
		{ Header: 'Name', accessor: 'name', minWidth: 120 },
		{ Header: 'User Name', accessor: 'userName', minWidth: 120 },
		{ Header: 'Designation', accessor: 'designation', minWidth: 140 },
		{ Header: 'Role', accessor: 'role', minWidth: 60 },
		{ Header: 'Email', accessor: 'email', minWidth: 120 },
		{ Header: 'Mobile No.', accessor: 'mobileNo', minWidth: 120 },
		{ Header: 'Branch', accessor: 'branch', minWidth: 150 },
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
							title="Users Detail"
						/>
						<AddUser handleAddBtn={handleAddUser} />
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
					<ReactTable columns={columns} data={[...data]} displayBlock={true} />
				</div>
			</div>
			<VerifyAdminModal
				isModalOpen={isVerifyAdminModelOpen}
				closeModal={() => setIsVerifyAdminModelOpen(false)}
				handleModal={handleVerifyAdmin}
			/>
			<AddUserModal
				title="Add User"
				isModalOpen={isAddUserModelOpen}
				closeModal={() => setIsAddUserModelOpen(false)}
				handleModal={() => setIsVerifyAdminModelOpen(false)}
			/>
		</>
	);
};
