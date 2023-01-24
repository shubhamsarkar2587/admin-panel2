import { AdminDashboard } from '../containers/dashboard/Admin';
import { RMDashboard } from '../containers/dashboard/RM';
import { RMSupervisorDashboard } from '../containers/dashboard/RMSupervisor';

const correspondingDashboard = {
	admin: <AdminDashboard />,
	rm: <RMDashboard />,
	rmSupervisor: <RMSupervisorDashboard />
};

export const Dashboard = () => {
	const loginType = 'admin';

	return correspondingDashboard[loginType];
};
