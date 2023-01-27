
export const Checkbox = ({ labelText, labelWidth, labelSize, labelWeight, labelFamily, marginBottom }) => {
	return (
		<label className={`inline-flex items-start
			${marginBottom || 'mb-6'}
		`}>
			<input
				type="checkbox"
				className="min-w-[20px] h-5 inline-flex items-center text-[#323232] rounded-full bg-white focus:ring-0"
			/>
			<span
				className={`
					ml-3 inline-block w-[${labelWidth || '100%'} text-[#323232]
					${labelSize || 'text-xs'}
					${labelWeight || ''}
					${labelFamily || 'font-poppinsRegular'}
				`}
			>
				{labelText}
			</span>
		</label>
	);
};
