import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { svgAssets } from '../../assets/asset';
import { sidebarData } from './sidebarData';

const Sidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [active, setActive] = useState({
		route: '/',
		nestedRoute: '',
		isDropDownActive: false
	});

	const handleMouseHover = () => {
		// console.log('dfd')
	};

	const handleRoute = ({ route, nestedRoute }) => {
		if (nestedRoute) {
			navigate(`${route}${nestedRoute}`);
		} else {
			navigate(route);
		}
	};

	useEffect(() => {
		const splitPath = location.pathname.split('/');

		const route = splitPath[1] !== '' ? `/${splitPath[1]}` : '/';
		const nestedRoute = splitPath[2] && (splitPath[2] !== '') ? `/${splitPath[2]}` : null;

		setActive({
			route,
			nestedRoute,
			isDropDownActive: !!nestedRoute
		});
	}, [location.pathname]);

	return (
		<div className="w-[300px] h-[calc(100vh-105px)] mt-[105px] pb-5 fixed leading-6 font-medium font-poppinsMedium">
			<ul className="w-full h-full px-[30px] grow overflow-y-auto scroll">
				{
					sidebarData.map((data, index) => (
						<li key={`sidebar_${index}`} className="flex flex-col">
							<div
								className={`px-3 py-2.5 mb-2.5 flex items-center justify-between cursor-pointer rounded-[10px] duration-300
                  ${active.route === data.route ? 'bg-black text-white' : 'text-[#808080] hover:bg-black hover:text-white'}
                `}
								onMouseOver={() => handleMouseHover()}
								onMouseOut={() => handleMouseHover()}
								onClick={() => handleRoute({
									route: data.route,
									nestedRoute: data?.nestedRoutes && (active.route !== data.route || !active.isDropDownActive)
										? data.nestedRoutes[0].route
										: null
								})}
							>
								<div className="flex items-center justify-between">
									<img
										className="mr-2.5"
										alt="kyc_image"
										src={active.route === data.route ? data.selectedIcon : data.icon}
									/>
									<span>{data.name}</span>
								</div>
								{
									data?.nestedRoutes && (<img className="" alt="kyc_image" src={svgAssets.dashboard.rightArrow} />)
								}
							</div>
							{
								active.route === data.route && active.isDropDownActive && data.nestedRoutes
									? (
										<div className="px-3 mb-2.5 flex justify-center">
											<ul>
												{
													data.nestedRoutes.map((nestedData, index) => (
														<li
															key={`sidebar_nested_route_${index}`}
															className={`mb-2.5 cursor-pointer duration-300
                              ${active.nestedRoute === nestedData.route ? 'text-[#5367FC]' : 'text-[#808080] hover:text-[#5367FC]'}
                            `}
															onClick={() => handleRoute({
																route: data.route,
																nestedRoute: nestedData.route
															})}
														>
															{nestedData.name}
														</li>
													))
												}
											</ul>
										</div>
									)
									: null}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Sidebar;
