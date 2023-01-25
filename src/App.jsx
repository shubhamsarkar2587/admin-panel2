import { Routes, Route, useLocation } from 'react-router-dom';
import { Login } from './pages/login';
import { Navbar } from './containers/navbar/Navbar';
import { Sidebar } from './containers/sidebar/Sidebar';
import { Dashboard } from './pages/dashboard';
import { Kyc } from './pages/kyc';
import { ESignReport } from './pages/eSignReport';
import { AccountList } from './pages/accountList';
import { AllApplication } from './pages/application/all';
import { PendingApplication } from './pages/application/pending/pending';
import { VerifyApplication } from './pages/application/pending/verifyApplication';
import { RejectedApplication } from './pages/application/rejected';
import { ResubmittedApplication } from './pages/application/resubmitted';
import { VerifiedApplication } from './pages/application/verified';
import { UserList } from './pages/userList/userList';
import { AssignTask } from './pages/userList/assignTask';
import { UserDetail } from './pages/userDetail';
import { ReassignmentReport } from './pages/reassignmentReport';
import { NoMatchRoute } from './components/routes/NoMatchRoute';
import { SalesReport } from './pages/reports/salesReport';
import { MonthlyReport } from './pages/reports/monthlyReport';
import { VerifierReport } from './pages/reports/verifierReport';
import { AgeingReport } from './pages/reports/ageingReport';
import { BrokeragePlan } from './pages/brokerageMaster/brokeragePlan';
import { MapBrokerage } from './pages/brokerageMaster/mapBrokerage';

const App = () => {
	const location = useLocation();

	return (
		<div className="App h-full w-full">
			{
				location.pathname === '/login'
					? (
						<Routes>
							<Route path="/login" element={<Login />}></Route>
						</Routes>
					)
					: (
						<div>
							<Navbar />
							<div className="flex h-full">
								<Sidebar />
								<div className="pl-5 pr-[30px] pb-5 ml-[300px] mt-[105px] flex flex-col grow w-full h-full">
									<Routes>
										<Route index path="/" element={<Dashboard />}></Route>
										<Route path="/kyc" element={<Kyc />}></Route>
										<Route path="/application">
											<Route index element={<AllApplication />}></Route>
											<Route path="all" element={<AllApplication />}></Route>
											<Route path="pending" element={<PendingApplication />}></Route>
											<Route path="pending/verify" element={<VerifyApplication />}></Route>
											<Route path="rejected" element={<RejectedApplication />}></Route>
											<Route path="verified" element={<VerifiedApplication />}></Route>
											<Route path="resubmitted" element={<ResubmittedApplication />}></Route>
										</Route>
										<Route path="/e-sign-report" element={<ESignReport />}></Route>
										<Route path="/account-list" element={<AccountList />}></Route>
										<Route path="/user-list" element={<UserList />}></Route>
										<Route path="/user-list/assign-task" element={<AssignTask />}></Route>
										<Route path="/user-detail" element={<UserDetail />}></Route>
										<Route path="/reassignment-report" element={<ReassignmentReport />}></Route>
										<Route path="/reports">
											<Route index element={<ESignReport />}></Route>
											<Route path="e-sign-report" element={<ESignReport />}></Route>
											<Route path="sales-report" element={<SalesReport />}></Route>
											<Route path="monthly-report" element={<MonthlyReport />}></Route>
											<Route path="verifier-report" element={<VerifierReport />}></Route>
											<Route path="ageing-report" element={<AgeingReport />}></Route>
										</Route>
										<Route path="/brokerage-master">
											<Route index element={<BrokeragePlan />}></Route>
											<Route path="brokerage-plans" element={<BrokeragePlan />}></Route>
											<Route path="map-brokerage" element={<MapBrokerage />}></Route>
										</Route>
										<Route path="*" element={<NoMatchRoute />}></Route>
									</Routes>
								</div>
							</div>
						</div>
					)
			}
		</div >
	);
};

export default App;
