import { pngAssets } from '../../../assets/asset';
import { Declaration } from './Declaration';
import { Checkbox } from '../../../components/common/Checkbox';
import { MainTitle } from '../../../components/common/MainTitle';
import { Transaction } from './Transaction';
import { Segment } from './Segment';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';

export const BrokerageStep = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<div className="w-full mb-6 grid grid-cols-2 gap-7">
				<Transaction />
				<Segment />
			</div>
			<MainTitle title="Brokerage Details" />
			<div className="w-full mb-8 grid grid-cols-5 gap-7">
				<div className="w-full col-span-3 flex flex-col">
					<SelectDropdown
						icon={pngAssets.kyc.mobileNumber}
						label="Brokerage Scheme"
						isImportant={true}
						placeholder="Please select brokerage scheme"
					/>
				</div>
				<div className="w-full col-span-2 flex flex-col">
					<SelectDropdown
						icon={pngAssets.kyc.mobileNumber}
						label="Brokerage Scheme"
						isImportant={true}
						placeholder="Please select brokerage scheme"
					/>
				</div>
			</div>
			<div>
				<MainTitle title="Declaration & Preferences" />
				<Declaration />
			</div>
			<div className="w-full mb-8 grid grid-cols-2 gap-7">
				<SelectDropdown
					placeholder="Please select brokerage scheme"
				/>
				<SelectDropdown
					placeholder="Please select brokerage scheme"
				/>
			</div>
			<div className="">
				<MainTitle title="Terms & Conditions" />
				<Checkbox
					labelText="I have understood the information requirements of this form and hereby confirm and accept that the information provided by me on this
          form is true and correct and complete for the purpose of the demat debit and  pledge instruction."
					labelWidth="w-[90%]"
					labelSize="14px"
					labelTextColor="text-[#7C7C7C]"
				/>
			</div>
		</div>
	);
};
