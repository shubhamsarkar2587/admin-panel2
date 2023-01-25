import { pngAssets } from '../../assets/asset';

export const AddUser = ({ handleAddBtn }) => {
	return (
		<button
			className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black"
			onClick={() => handleAddBtn()}
		>
			<img className="mr-2" alt="Add_icon" src={pngAssets.reactTable.addUser} />
			<span>AddUser</span>
		</button>
	);
};
