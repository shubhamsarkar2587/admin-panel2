import { MainTitle } from '../../../components/common/MainTitle';
import { Declaration } from './Declaration';
import { Segment } from './Segment';
import { Transaction } from './Transaction';
import { SingleDetail } from '../SingleDetail2';

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
			<div className="w-full mb-2 grid grid-cols-12 gap-10">
				<div className="col-span-8">
					<SingleDetail label="Brokerage Scheme" value="High" />
				</div>
				<div className="col-span-4">
					<DisplayTab label="DP Tariff" />
				</div>
			</div>
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
		</div>
	);
};
