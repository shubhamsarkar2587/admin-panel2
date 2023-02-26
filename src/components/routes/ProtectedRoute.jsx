import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component }) => {
	const isLogin = useSelector(state => state.user.isLogin);
	return isLogin
		? component
		: component;
};
