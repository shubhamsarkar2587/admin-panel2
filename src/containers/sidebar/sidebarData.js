import { svgAssets } from '../../assets/asset';

export const sidebarData = [
	{
		name: 'Dashboard',
		route: '/',
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard
	},
	{
		name: 'Start KYC',
		route: '/kyc',
		icon: svgAssets.sidebar.startKyc,
		selectedIcon: svgAssets.sidebar.selectedStartKyc
	},
	{
		name: 'E-sign Report',
		route: '/e-sign-report',
		icon: svgAssets.sidebar.eSign,
		selectedIcon: svgAssets.sidebar.selectedESign
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
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard
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
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard
	},
	{
		name: 'Reassignment Report',
		route: '/reassignment-report',
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard
	},
	{
		name: 'Reports',
		route: '/reports',
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard,
		nestedRoutes: [
			{
				name: 'E-Sign Report',
				route: '/e-sign-report'
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
		icon: svgAssets.sidebar.dashboard,
		selectedIcon: svgAssets.sidebar.selectedDashboard,
		nestedRoutes: [
			{
				name: 'Brokerage Plans',
				route: '/brokerage-plans'
			},
			{
				name: 'Map Brokerage',
				route: '/map-brokerage'
			}
		]
	},
	{
		name: 'Download Forms',
		route: '/download-forms',
		icon: svgAssets.sidebar.download,
		selectedIcon: svgAssets.sidebar.selectedDownload
	},
	{
		name: 'Link Aadhar',
		route: '/link-aadhar',
		icon: svgAssets.sidebar.linkAadhar,
		selectedIcon: svgAssets.sidebar.selectedLinkAadhar
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
