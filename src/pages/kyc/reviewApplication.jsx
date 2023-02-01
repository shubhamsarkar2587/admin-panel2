import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainTitle } from '../../components/common/MainTitle';
import { BankDetail } from '../../containers/review/BankDetail';
import { ClientDetail } from '../../containers/review/clientDetail/ClientDetail';
import { ClientPreview } from '../../containers/review/clientDetail/ClientPreview';
import { MobileEmailDetail } from '../../containers/review/MobileEmailDetail';
import { OccupationalDetail } from '../../containers/review/OccupationalDetail';
import { PanDetail } from '../../containers/review/PanDetail';
import { PersonalDetail } from '../../containers/review/PersonalDetail';
import { Debounce } from '../../hooks/Debounce';

const clientIntersectionOption = {
	rootMargin: '0px 0px -75% 0px',
	threshold: 0.5
};

export const ReviewApplication = () => {
	const { ref: clientRef, inView: isClientRefInView } = useInView(clientIntersectionOption);
	const [isClientPreviewVisible, setIsClientPreviewVisible] = useState(false);

	const debounceValue = Debounce(isClientRefInView, 500);

	useEffect(() => {
		setIsClientPreviewVisible(debounceValue);
	}, [debounceValue]);

	console.log({ isClientRefInView, debounceValue, isClientPreviewVisible });

	return (
		<div className="w-full flex flex-col mb-10">
			<div className="flex items-center justify-between">
				<MainTitle title="Review Application Details"/>
				<div className="text-[#848484] font-medium font-poppinsMedium">Client of</div>
			</div>
			<div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
				<ClientDetail />
			</div>

			<div ref={clientRef} className="sticky top-[82px] z-50">
				<div className={`px-7 py-3 mb-[25px] rounded-[10px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]
					${!isClientPreviewVisible && 'hidden'}
				`}>
					<ClientPreview/>
				</div>
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
