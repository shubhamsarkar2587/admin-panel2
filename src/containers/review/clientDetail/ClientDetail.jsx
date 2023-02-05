import { MainTitle } from '../../../components/common/MainTitle';
import { SingleDetail } from '../SingleDetail';
import ClientProfile from './ClientProfile';

export const ClientDetail = ({ isVerify }) => {
	return (
		<>
			<div className="mb-5">
				<MainTitle title="Client Details"/>
			</div>
			<div className="grid grid-cols-12 gap-10">
				<div className="col-span-8">
					<SingleDetail label="Name As On PAN" value="Amit Singh" isVerify={isVerify} />
					<SingleDetail label="Name As On PAN" value="Amit Singh" isVerify={isVerify} />
					<SingleDetail label="Name As On PAN" value="Amit Singh" isVerify={isVerify} />
					<SingleDetail label="Name As On PAN" value="Amit Singh" isVerify={isVerify} />
					<SingleDetail label="Name As On PAN" value="Amit Singh" isVerify={isVerify} />
					<SingleDetail label="Name As On PAN" value="Amit Singh" isVerify={isVerify} />
				</div>
				<ClientProfile />
			</div>
		</>
	);
};
