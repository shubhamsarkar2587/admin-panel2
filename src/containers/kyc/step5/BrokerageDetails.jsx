import { pngAssets } from '../../../assets/asset';
import { SelectItem } from '../../../components/common/SelectItem';
import Declaration from './Declaration';
import Checkbox from '../../../components/common/Checkbox';
import MainTitle from '../../../components/common/MainTitle';

const BrokerageDetails = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Brokerage Details" />
			<div className="w-full mb-8 grid grid-cols-5 gap-7">
				<div className="w-full col-span-3 flex flex-col">
					<SelectItem
						icon={pngAssets.kyc.mobileNumber}
						label="Brokerage Scheme"
						isImportant={true}
						placeholder="Please select brokerage scheme"
					/>
				</div>
				<div className="w-full col-span-2 flex flex-col">
					<SelectItem
						icon={pngAssets.kyc.mobileNumber}
						label="DP Tariff"
						isImportant={true}
						placeholder="Please select dp tariff"
					/>
				</div>
			</div>
			<div>
				<MainTitle title="Declaration & Preferences" />
				<Declaration />
			</div>
			<div className="w-full mb-8 grid grid-cols-2 gap-7">
				<SelectItem
					placeholder="Physical"
				/>
				<SelectItem
					placeholder="As per SEBI"
				/>
			</div>
			<div className="">
				<MainTitle title="Terms & Conditions" />
				<Checkbox
					labelText="I have understood the information requirements of this form and hereby confirm and accept that the information provided by me on this
          form is true and correct and complete for the purpose of the demat debit and  pledge instruction."
					labelWidth="90%"
				/>
			</div>
		</div>
	);
};

export default BrokerageDetails;
