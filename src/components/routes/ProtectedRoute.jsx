import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ component }) => {
	const isLogin = useSelector(state => state.user.isLogin);
	return isLogin
		? component
		: <Navigate to="/login" />;
};
