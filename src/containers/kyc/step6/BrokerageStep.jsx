import { Declaration } from './Declaration';
import { Checkbox } from '../../../components/common/Checkbox';
import { MainTitle } from '../../../components/common/MainTitle';
import { Transaction } from './Transaction';
import { Segment } from './Segment';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';
import { BrokerageScheme } from './BrokerageScheme';

export const BrokerageStep = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<div className="w-full mb-6 grid grid-cols-2 gap-7">
				<Transaction />
				<Segment />
			</div>
			<MainTitle title="Brokerage Details" />
			<div className="w-full mb-5 grid grid-cols-12 gap-5">
				<div className="w-full col-span-8">
					<SelectDropdown
						label="Brokerage Scheme"
						placeholder="Please select brokerage scheme"
					/>
				</div>
				<div className="w-full col-span-4">
					<SelectDropdown
						label="DP Tariff"
						placeholder="Please select dp tariff"
					/>
				</div>
			</div>
			<BrokerageScheme />
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
