import { RMDashboard } from '../containers/rm/Dashboard';
import { RMSupervisorDashboard } from '../containers/rmSupervisor/Dashboard';

const correspondingDashboard = {
	rm: <RMDashboard />,
	rmSupervisor: <RMSupervisorDashboard />
};

export const Dashboard = () => {
	const loginType = 'rmSupervisor';

	return correspondingDashboard[loginType];
};
