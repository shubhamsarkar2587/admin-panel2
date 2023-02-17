import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Login } from './pages/login';
import { Navbar } from './containers/navbar/Navbar';
import { Sidebar } from './containers/sidebar/Sidebar';
import { Dashboard } from './pages/dashboard';
import { Kyc } from './pages/kyc/kyc';
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
import { ReviewApplication } from './pages/kyc/reviewApplication';
import { generateTokenAction } from './redux/actions/auth.action';
import { ProtectedRoute } from './components/routes/ProtectedRoute';

export const App = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const accessToken = useSelector(state => state.user.accessToken);
	useEffect(() => {
		if (accessToken === '') {
			dispatch(generateTokenAction());
		}
	}, [accessToken]);

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
								<div className="w-full h-[calc(100vh-105px)] pl-5 pr-[30px] pb-5 ml-[300px] mt-[105px] flex flex-col grow">
									<Routes>
										<Route index path="/" element={<ProtectedRoute component={<Dashboard />}/>}></Route>
										<Route path="/kyc" >
											<Route index element={<ProtectedRoute component={<Kyc />}/>}></Route>
											<Route path="review" element={<ProtectedRoute component={<ReviewApplication />}/>}></Route>
										</Route>
										<Route path="/application">
											<Route index element={<ProtectedRoute component={<AllApplication />} />}></Route>
											<Route path="all" element={<ProtectedRoute component={<AllApplication />} />}></Route>
											<Route path="pending" element={<ProtectedRoute component={<PendingApplication />} />}></Route>
											<Route path="pending/verify" element={<ProtectedRoute component={<VerifyApplication />} />}></Route>
											<Route path="rejected" element={<ProtectedRoute component={<RejectedApplication />} />}></Route>
											<Route path="verified" element={<ProtectedRoute component={<VerifiedApplication />} />}></Route>
											<Route path="resubmitted" element={<ProtectedRoute component={<ResubmittedApplication />} />}></Route>
										</Route>
										<Route path="/e-sign-report" element={<ProtectedRoute component={<ESignReport />} />}></Route>
										<Route path="/account-list" element={<ProtectedRoute component={<AccountList />} />}></Route>
										<Route path="/user-list" element={<ProtectedRoute component={<UserList />} />}></Route>
										<Route path="/user-list/assign-task" element={<ProtectedRoute component={<AssignTask />} />}></Route>
										<Route path="/user-detail" element={<ProtectedRoute component={<UserDetail />} />}></Route>
										<Route path="/reassignment-report" element={<ProtectedRoute component={<ReassignmentReport />} />}></Route>
										<Route path="/reports">
											<Route index element={<ProtectedRoute component={<ESignReport />} />}></Route>
											<Route path="e-sign-report" element={<ProtectedRoute component={<ESignReport />} />}></Route>
											<Route path="sales-report" element={<ProtectedRoute component={<SalesReport />} />}></Route>
											<Route path="monthly-report" element={<ProtectedRoute component={<MonthlyReport />} />}></Route>
											<Route path="verifier-report" element={<ProtectedRoute component={<VerifierReport />} />}></Route>
											<Route path="ageing-report" element={<ProtectedRoute component={<AgeingReport />} />}></Route>
										</Route>
										<Route path="/brokerage-master">
											<Route index element={<ProtectedRoute component={<BrokeragePlan />} />}></Route>
											<Route path="brokerage-plans" element={<ProtectedRoute component={<BrokeragePlan />} />}></Route>
											<Route path="map-brokerage" element={<ProtectedRoute component={<MapBrokerage />} />}></Route>
										</Route>
										<Route path="*" element={<ProtectedRoute component={<NoMatchRoute />} />}></Route>
									</Routes>
								</div>
							</div>
						</div>
					)
			}
		</div >
	);
};
