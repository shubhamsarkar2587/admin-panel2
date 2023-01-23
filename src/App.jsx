import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/homepage';
import Kyc from './pages/kyc';
import Login from './pages/login';
import VerifyApplication from './pages/application/pending/verifyApplication';
import Navbar from './containers/navbar/Navbar';
import Sidebar from './containers/sidebar/Sidebar';
import AllApplication from './pages/application/all';
import PendingApplication from './pages/application/pending/pending';
import RejectedApplication from './pages/application/rejected';
import ResubmittedApplication from './pages/application/resubmitted';
import VerifiedApplication from './pages/application/verified';
import NoMatchRoute from './components/routes/NoMatchRoute';

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
										<Route path="/" element={<Homepage />}></Route>
										<Route path="/kyc" element={<Kyc />}></Route>
										<Route path="/application/">
											<Route path="all" element={<AllApplication />}></Route>
											<Route path="pending" element={<PendingApplication />}></Route>
											<Route path="pending/verify" element={<VerifyApplication />}></Route>
											<Route path="rejected" element={<RejectedApplication />}></Route>
											<Route path="verified" element={<VerifiedApplication />}></Route>
											<Route path="resubmitted" element={<ResubmittedApplication />}></Route>
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
