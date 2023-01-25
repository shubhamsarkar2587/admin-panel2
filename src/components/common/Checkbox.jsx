
export const Checkbox = ({ labelText, labelWidth }) => {
	return (
		<label className="mb-6 inline-flex items-start">
			<input
				type="checkbox"
				className="min-w-[20px] h-5 mt-[3px] inline-flex items-center text-[#323232] rounded-full bg-white font-poppinsRegular focus:ring-0"
			/>
			<span
				className={`ml-2 inline-block w-[${labelWidth || '100%'} text-[#323232]`}
			>
				{labelText}
			</span>
		</label>
	);
};
