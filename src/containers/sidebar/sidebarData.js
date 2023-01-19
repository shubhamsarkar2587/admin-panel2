import { pngAssets } from '../../assets/asset';

export const sidebarData = [
	{
		name: 'Dashboard',
		route: '/',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	},
	{
		name: 'Start KYC',
		route: '/kyc',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	},
	{
		name: 'E-sign Report',
		route: '/e-sign-report',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	},
	{
		name: 'Applications',
		route: '/application',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard,
		nestedRoutes: [
			{
				name: 'All Applications',
				route: '/all'
			},
			{
				name: 'Verified Applications',
				route: '/verified'
			},
			{
				name: 'Rejected Applications',
				route: '/rejected'
			},
			{
				name: 'Pending Applications',
				route: '/pending'
			},
			{
				name: 'Resubmitted',
				route: '/resubmitted'
			}
		]
	},
	{
		name: 'Download Forms',
		route: '/download-forms',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	},
	{
		name: 'Link Aadhar',
		route: '/link-aadhar',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	},
	{
		name: 'Settings',
		route: '/settings',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	},
	{
		name: 'Logout',
		route: '/logout',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selected_dashboard
	}
];
