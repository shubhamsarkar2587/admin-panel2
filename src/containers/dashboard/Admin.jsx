import { ApplicationWidget } from '../../components/widgets/Applications';
import { Date } from '../../components/widgets/Date';

export const AdminDashboard = () => {
	return (
		<>
			<div className="mb-[30px] flex">
				<Date />
				<Date />
				<Date />
			</div>
			<div className="mb-[30px] grid grid-cols-3 gap-9">
				<ApplicationWidget title="All Applications" numberOfApplications={2000} />
				<ApplicationWidget title="Verified Applications" numberOfApplications={600} />
				<ApplicationWidget title="Rejected Applications" numberOfApplications={350}/>
				<ApplicationWidget title="Pending Verification" numberOfApplications={350} />
				<ApplicationWidget title="Resubmitted" numberOfApplications={1500}/>
				<ApplicationWidget title="Re-Activation" numberOfApplications={2400} />
			</div>
		</>
	);
};
