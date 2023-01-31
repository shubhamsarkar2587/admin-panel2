import { MainTitle } from '../../components/common/MainTitle';
import { BankDetail } from '../../containers/review/BankDetail';
import { ClientDetail } from '../../containers/review/ClientDetail';
import { MobileEmailDetail } from '../../containers/review/MobileEmailDetail';
import { OccupationalDetail } from '../../containers/review/OccupationalDetail';
import { PanDetail } from '../../containers/review/PanDetail';
import { PersonalDetail } from '../../containers/review/PersonalDetail';

export const ReviewApplication = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<div className="flex items-center justify-between">
				<MainTitle title="Review Application Details"/>
				<div className="text-[#848484] font-medium font-poppinsMedium">Client of</div>
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<ClientDetail />
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<MobileEmailDetail />
				<PanDetail />
				<BankDetail />
				<PersonalDetail />
				<OccupationalDetail />
			</div>
		</div>
	);
};
