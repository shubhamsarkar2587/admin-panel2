import { MainTitle } from '../../../components/common/MainTitle';
import { SingleDetail } from '../SingleDetail2';
import ClientProfile from './ClientProfile';

export const ClientDetail = () => {
	return (
		<>
			<div className="mb-5">
				<MainTitle title="Client Details"/>
			</div>
			<div className="grid grid-cols-12 gap-10">
				<div className="col-span-8">
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
					<SingleDetail label="Name As On PAN" value="Amit Singh" />
				</div>
				<ClientProfile />
			</div>
		</>
	);
};
