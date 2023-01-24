import { Link } from 'react-router-dom';

export const PopoverParentComp = ({ isPopoverOpen, setIsPopoverOpen }) => (
	<button
		className="w-full flex items-center justify-center"
		onClick={() => setIsPopoverOpen(!isPopoverOpen)}
	>
		<span className={`w-[6px] h-[6px] rounded-full mx-0.5 ${isPopoverOpen ? 'bg-[#5367FC]' : 'bg-black'}`}></span>
		<span className={`w-[6px] h-[6px] rounded-full mx-0.5 ${isPopoverOpen ? 'bg-[#5367FC]' : 'bg-black'}`}></span>
		<span className={`w-[6px] h-[6px] rounded-full mx-0.5 ${isPopoverOpen ? 'bg-[#5367FC]' : 'bg-black'}`}></span>
	</button>
);

export const PopoverChildComp = ({ handleModal }) => (
	<div
		className="my-component-popover-content w-32 px-4 py-2 rounded-[10px] flex flex-col border-solid border-[#ECECEC] bg-white"
	>
		<Link
			to="/application/pending/verify"
			className="mb-1"
		>
			<span className="cursor-pointer hover:text-[#5367FC]">Verify</span>
		</Link>
		<span className="cursor-pointer hover:text-[#5367FC]">View</span>
		{
			handleModal && (
				<span
					className="cursor-pointer hover:text-[#5367FC]"
					onClick={() => handleModal(true)}
				>
          Re-assign
				</span>
			)
		}
	</div>
);
