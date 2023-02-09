import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ Component }) => {
	const isLogin = useSelector(state => state.user.isLogin);
	return isLogin
		? (
			<Component />
		)
		: (
			<Redirect to={{ pathName: '/login' }} />
		);
};
