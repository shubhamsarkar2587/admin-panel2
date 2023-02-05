import { MainTitle } from '../../../components/common/MainTitle';
import { Declaration } from './Declaration';
import { Segment } from './Segment';
import { Transaction } from './Transaction';
import { SingleDetail } from '../SingleDetail2';
import { Checkbox } from '../../../components/common/Checkbox';
import { BrokerageScheme } from './BrokerageScheme';

const DisplayTab = ({ label }) => (
	<div className="mb-[15px] px-[18px] py-[11px] flex items-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
		<div className="text-[#90A5B5] font-poppinsRegular">{label}</div>
	</div>
);

export const BrokerageStep = () => {
	return (
		<div className="w-full pb-2.5 flex flex-col border-b border-solid border-[#D9D9D9]">
			<div className="mb-5">
				<Transaction />
			</div>
			<div className="mb-5">
				<Segment />
			</div>
			<MainTitle title="Brokerage Details" />
			<div className="w-full mb-2 grid grid-cols-12 gap-5">
				<div className="col-span-8">
					<SingleDetail label="Brokerage Scheme" value="High" />
				</div>
				<div className="col-span-4">
					<DisplayTab label="DP Tariff" />
				</div>
			</div>
			<BrokerageScheme />
			<div>
				<MainTitle title="Declaration & Preferences" />
				<Declaration />
			</div>
			<div className="w-full grid grid-cols-12 gap-10">
				<div className="col-span-6">
					<DisplayTab label="As per SEBI" />
				</div>
				<div className="col-span-6">
					<DisplayTab label="Physical" />
				</div>
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
