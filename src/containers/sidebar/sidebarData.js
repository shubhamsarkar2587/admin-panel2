import { svgAssets } from '../../assets/asset';

export const sidebarData = [
	{
		name: 'Dashboard',
		route: '/',
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard
	},
	{
		name: 'Start',
		route: '/kyc',
		icon: svgAssets.sidebar.startKyc,
		selectedIcon: svgAssets.sidebar.selectedStartKyc
	},
	{
		name: 'Applications',
		route: '/application',
		icon: svgAssets.sidebar.application,
		selectedIcon: svgAssets.sidebar.selectedApplication,
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
		icon: svgAssets.sidebar.accountList,
		selectedIcon: svgAssets.sidebar.selectedAccountList
	},
	{
		name: 'User List',
		route: '/user-list',
		icon: svgAssets.sidebar.userList,
		selectedIcon: svgAssets.sidebar.selectedUserList
	},
	{
		name: 'User Detail',
		route: '/user-detail',
		icon: svgAssets.sidebar.userList,
		selectedIcon: svgAssets.sidebar.selectedUserList
	},
	{
		name: 'Download Forms',
		route: '/download-forms',
		icon: svgAssets.sidebar.download,
		selectedIcon: svgAssets.sidebar.selectedDownload
	},
	{
		name: 'Settings',
		route: '/settings',
		icon: svgAssets.sidebar.setting,
		selectedIcon: svgAssets.sidebar.selectedSetting
	},
	{
		name: 'Logout',
		route: '/logout',
		icon: svgAssets.sidebar.logout,
		selectedIcon: svgAssets.sidebar.selectedLogout
	}
];
