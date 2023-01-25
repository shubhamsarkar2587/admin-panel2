import { pngAssets } from '../../assets/asset';

export const sidebarData = [
	{
		name: 'Dashboard',
		route: '/',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'Start KYC',
		route: '/kyc',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'E-sign Report',
		route: '/e-sign-report',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'Applications',
		route: '/application',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard,
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
		name: 'Account List',
		route: '/account-list',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'User List',
		route: '/user-list',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'User Detail',
		route: '/user-detail',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'Reassignment Report',
		route: '/reassignment-report',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'Reports',
		route: '/reports',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard,
		nestedRoutes: [
			{
				name: 'E-Sign Report',
				route: '/e-Sign-report'
			},
			{
				name: 'Sales Report',
				route: '/sales-report'
			},
			{
				name: 'Monthly Report',
				route: '/monthly-report'
			},
			{
				name: 'Verifier Report',
				route: '/verifier-report'
			},
			{
				name: 'Ageing Report',
				route: '/ageing-report'
			}
		]
	},
	{
		name: 'Brokerage Master',
		route: '/brokerage-master',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard,
		nestedRoutes: [
			{
				name: 'Brokerage Plans',
				route: '/brokerage-plans'
			},
			{
				name: 'Map Brokerage',
				route: '/map-brokerage '
			}
		]
	},
	{
		name: 'Link Aadhar',
		route: '/link-aadhar',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'Settings',
		route: '/settings',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	},
	{
		name: 'Logout',
		route: '/logout',
		icon: pngAssets.dashboard.dashboard,
		selectedIcon: pngAssets.dashboard.selectedDashboard
	}
];
