import { Routes, Route } from 'react-router-dom';
import VerifyApplication from './pages/application/pending/verifyApplication';
import Navbar from './containers/navbar/Navbar';
import Sidebar from './containers/sidebar/Sidebar';
import AllApplication from './pages/application/all';
import PendingApplication from './pages/application/pending/pending';
import RejectedApplication from './pages/application/rejected';
import ResubmittedApplication from './pages/application/resubmitted';
import VerifiedApplication from './pages/application/verified';
import Homepage from './pages/homepage';
import Kyc from './pages/kyc';
import Login from './pages/login';

const App = () => {
	return (
		<div className="App h-full w-full">
			<Routes>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
			<div>
				<Navbar />
				<div className="flex h-full">
					<Sidebar />
					<div className="pl-5 pr-[30px] py-5 ml-[300px] mt-[115px] flex flex-col grow w-full h-full">
						<Routes>
							<Route path="/" element={<Homepage />}></Route>
							<Route path="/kyc" element={<Kyc />}></Route>
							<Route path="/application/all" element={<AllApplication />}></Route>
							<Route path="/application/pending" element={<PendingApplication />}></Route>
							<Route path="/application/pending/verify" element={<VerifyApplication />}></Route>
							<Route path="/application/rejected" element={<RejectedApplication />}></Route>
							<Route path="/application/verified" element={<VerifiedApplication />}></Route>
							<Route path="/application/resubmitted" element={<ResubmittedApplication />}></Route>
						</Routes>
					</div>
				</div>
			</div>

		</div>
	);
};

export default App;
