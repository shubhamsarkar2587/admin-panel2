import { pngAssets } from "../../assets/asset";

export const sidebarData = [
  {
    name: "Dashboard",
    to: "/",
    activeValue: "dashboard",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  },
  {
    name: "Start KYC",
    to: "/kyc",
    activeValue: "kyc",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  },
  {
    name: "E-sign Report",
    to: "/e-sign-report",
    activeValue: "report",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  },
  {
    name: "Applications",
    to: "/application",
    activeValue: "application",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard,
    nestedRoutes: [
      {
        name: "All Applications",
        to: "/all",
        nestedActiveValue: "all",
      },
      {
        name: "Verified Applications",
        to: "/verified",
        nestedActiveValue: "verified"
      },
      {
        name: "Rejected Applications",
        to: "/rejected",
        nestedActiveValue: "rejected"
      },
      {
        name: "Pending Applications",
        to: "/pending",
        nestedActiveValue: "pending"
      },
      {
        name: "Resubmitted",
        to: "/resubmitted",
        nestedActiveValue: "resubmitted"
      }
    ]
  },
  {
    name: "Download Forms",
    to: "/download-forms",
    activeValue: "resubmitted",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  },
  {
    name: "Link Aadhar",
    to: "/link-aadhar",
    activeValue: "aadhar",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  },
  {
    name: "Settings",
    to: "/settings",
    activeValue: "settings",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  },
  {
    name: "Logout",
    to: "/logout",
    activeValue: "logout",
    icon: pngAssets.dashboard.dashboard,
    selectedIcon: pngAssets.dashboard.selected_dashboard
  }
]
