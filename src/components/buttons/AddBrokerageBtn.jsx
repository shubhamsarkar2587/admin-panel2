import { pngAssets } from '../../assets/asset';

export const AddBrokerageBtn = ({ handleAddBrokerageBtn }) => {
	return (
		<button
			className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black"
			onClick={() => handleAddBrokerageBtn()}
		>
			<img className="mr-2" alt="Add_icon" src={pngAssets.reactTable.addUser} />
			<span>Add Brokerage</span>
		</button>
	);
};
