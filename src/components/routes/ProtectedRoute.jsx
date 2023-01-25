import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ Component }) => {
	const isAuthenticated = true;
	return isAuthenticated
		? (
			<Component />
		)
		: (
			<Redirect to={{ pathName: '/login' }} />
		);
};
