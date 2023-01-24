import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../../components/buttons/SubmitBtn';
import { ViewAllBtn } from '../../components/buttons/ViewAllBtn';
import { SelectItem } from '../../components/common/SelectItem';
import { MyModal } from '../../components/modal/Modal';
import { MyPopover } from '../../components/popover/Popover';
import { ReactTable } from '../../components/reactTable/ReactTable';
import { ReactTableHeader } from '../../components/reactTable/ReactTableHeader';
import { PopoverChildComp, PopoverParentComp } from '../../components/reactTable/ReactTablePopupBtn';
import Applications from '../../components/widgets/Applications';
import Date from '../../components/widgets/Date';

const data = [
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' },
	{ clientName: 'Tony Stark', pan: 43434342232334, mobileNumber: 'fdf3343', steps: 'dfdfdf0', createdAt: 'sdsd', updatedAt: 'ddfdf', actions: 'dd' }
];

export const RMSupervisorDashboard = () => {
	const navigate = useNavigate();
	const [isReassignPopupOpen, setIsReassignPopupOpen] = useState(false);

	const handleModal = (state) => {
		setIsReassignPopupOpen(state);
	};

	const handleSubmitBtn = () => {
		navigate('/user-list');
	};

	const columns = [
		{ Header: 'Client Name', accessor: 'clientName' },
		{ Header: 'Pan', accessor: 'pan' },
		{ Header: 'Mobile Number', accessor: 'mobileNumber' },
		{ Header: 'Steps', accessor: 'steps' },
		{ Header: 'Created At', accessor: 'createdAt' },
		{ Header: 'Updated At', accessor: 'updatedAt' },
		{
			Header: 'Actions',
			accessor: 'actions',
			Cell: ({ row }) => (
				<MyPopover
					PopoverParentComp={PopoverParentComp}
					PopoverChildComp={PopoverChildComp}
					handleModal={handleModal}
				/>
			)
		}
	];

	return (
		<>
			<div className="mb-[30px] flex">
				<Date />
				<Date />
				<Date />
			</div>
			<div className="mb-[30px] grid grid-cols-3 gap-x-9">
				<Applications />
				<Applications />
				<Applications />
			</div>
			<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
				<div className="flex items-center justify-between mb-7">
					<ReactTableHeader
						title="Rejected Applications"
						numberOfApplications={1500}
					/>
					<ViewAllBtn />
				</div>
				<ReactTable columns={columns} data={[...data]} />
			</div>
			<div className="w-full py-5 px-[25px] mb-[30px] overflow-auto rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)] ">
				<div className="flex items-center justify-between mb-7">
					<ReactTableHeader
						title="Incomplete Applications"
						numberOfApplications={1500}
					/>
					<ViewAllBtn />
				</div>
				<ReactTable columns={columns} data={[...data]} />
			</div>
			<MyModal
				isModalOpen={isReassignPopupOpen}
				handleModal={handleModal}
				title=""
				centered={false}
				width={590}
				height={200}
			>
				<div className="h-40">
					<h6 className="mb-4 text-lg font-medium">Re-assign Tasks</h6>
					<SelectItem />
					<div className="h-full flex items-center justify-center">
						<SubmitBtn
							handleSubmitBtn={handleSubmitBtn}
						/>
					</div>
				</div>
			</MyModal >
		</>
	);
};
