import { useLocation } from 'react-router-dom';

const NoMatchRoute = ({ Component }) => {
	const location = useLocation();
	return (
		<div className="w-full h-full flex items-center justify-center text-xl font-poppinsMedium">
      No match for {location.pathname}
		</div>
	);
};

export default NoMatchRoute;
