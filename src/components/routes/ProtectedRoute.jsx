import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
	const isAuthenticated = true;
	return isAuthenticated
		? (
			<Component />
		)
		: (
			<Redirect to={{ pathName: '/login' }} />
		);
};

export default ProtectedRoute;
