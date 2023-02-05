import { MainTitle } from '../../components/common/MainTitle';
import { SingleDetail } from './SingleDetail';

export const AddressDetail = () => {
	return (
		<div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
			<div className="mb-5">
				<MainTitle title="Address"/>
			</div>
			<div className="grid grid-cols-12 gap-10">
				<div className="col-span-8">
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
				</div>
			</div>
		</div>
	);
};
