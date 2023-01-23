import { RMDashboard } from '../containers/dashboard/RM';
import { RMSupervisorDashboard } from '../containers/dashboard/RMSupervisor';

const correspondingDashboard = {
	rm: <RMDashboard />,
	rmSupervisor: <RMSupervisorDashboard />
};

export const Dashboard = () => {
	const loginType = 'rmSupervisor';

	return correspondingDashboard[loginType];
};
