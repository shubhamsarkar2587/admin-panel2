
export const MainTitle = ({ title, marginBottom }) => {
	return (
		<div className={`text-lg leading-[27px] font-medium font-poppinsMedium
			${marginBottom || 'mb-[22px]'}
		`}>
			{title}
		</div>
	);
};
