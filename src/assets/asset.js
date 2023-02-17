import verifyAdmin from './png/verifyAdmin.png';
import addUser from './png/addUser.png';
import mobileNumber from './png/mobileNumber.png';
import mail from './png/mail.png';
import kycSuccess from './png/kycSuccess.png';

import logo from './svg/logo.svg';

import kycAssist from './svg/login/kycAssist.svg';
import showPassword from './svg/login/showPassword.svg';
import hidePassword from './svg/login/hidePassword.svg';

import bigul from './svg/bigul.svg';
import bonabza from './svg/bonabza.svg';
import loginScreenImg from './svg/loginScreenImg.svg';
import loginEnter from './svg/loginEnter.svg';
import kyc from './svg/kyc.svg';
import rightArrow from './svg/rightArrow.svg';
import defaultUser from './svg/defaultUser.svg';
import notification from './svg/notification.svg';
import widgetApplication from './svg/application.svg';
import graph from './svg/graph.svg';
import verify from './svg/verify.svg';
import backIcon from './svg/back.svg';
import continueIcon from './svg/continue.svg';
import profileUser from './svg/profileUser.svg';
import signature from './svg/signature.svg';
import docView from './svg/docView.svg';
import rightField from './svg/rightField.svg';
import wrongField from './svg/wrongField.svg';
import dropdownIcon from './svg/dropdownIcon.svg';
import invalidInput from './svg/invalidInput.svg';

import eye from './svg/widget/eye.svg';

import calendar from './svg/dashboard/calendar.svg';
import todayCalendar from './svg/dashboard/todayCalendar.svg';
import yesterdayCalendar from './svg/dashboard/yesterdayCalendar.svg';

import dashboard from './svg/sidebar/dashboard.svg';
import selectedDashboard from './svg/sidebar/selectedDashboard.svg';
import startKyc from './svg/sidebar/startKyc.svg';
import selectedStartKyc from './svg/sidebar/selectedStartKyc.svg';
import eSign from './svg/sidebar/eSign.svg';
import selectedESign from './svg/sidebar/selectedESign.svg';
import application from './svg/sidebar/application.svg';
import selectedApplication from './svg/sidebar/selectedApplication.svg';
import download from './svg/sidebar/download.svg';
import selectedDownload from './svg/sidebar/selectedDownload.svg';
import linkAadhar from './svg/sidebar/linkAadhar.svg';
import selectedLinkAadhar from './svg/sidebar/selectedLinkAadhar.svg';
import setting from './svg/sidebar/setting.svg';
import selectedSetting from './svg/sidebar/selectedSetting.svg';
import logout from './svg/sidebar/logout.svg';
import selectedLogout from './svg/sidebar/selectedLogout.svg';
import userList from './svg/sidebar/userList.svg';
import selectedUserList from './svg/sidebar/selectedUserList.svg';

import correctTick from './svg/review/correctTick.svg';
import wrongTick from './svg/review/wrongTick.svg';
import undo from './svg/review/undo.svg';

import kycMessage from './svg/kyc/kycMessage.svg';
import send from './svg/kyc/send.svg';

export const pngAssets = {
	bigul,
	kyc: {
		mobileNumber,
		mail,
		kycSuccess
	},
	reactTable: {
		addUser
	},
	admin: {
		verifyAdmin
	}
};

export const svgAssets = {
	logo,
	bigul,
	bonabza,
	dropdownIcon,
	login: {
		loginScreenImg,
		loginEnter,
		kycAssist,
		showPassword,
		hidePassword
	},
	navbar: {
		defaultUser,
		notification
	},
	sidebar: {
		dashboard,
		selectedDashboard,
		startKyc,
		selectedStartKyc,
		eSign,
		selectedESign,
		application,
		selectedApplication,
		download,
		selectedDownload,
		linkAadhar,
		selectedLinkAadhar,
		setting,
		selectedSetting,
		logout,
		selectedLogout,
		userList,
		selectedUserList
	},
	widget: {
		eye
	},
	dashboard: {
		kyc,
		rightArrow,
		widgetApplication,
		graph,
		calendar,
		todayCalendar,
		yesterdayCalendar
	},
	kyc: {
		send,
		verify,
		backIcon,
		continueIcon,
		profileUser,
		signature,
		docView,
		invalidInput,
		kycMessage
	},
	review: {
		correctTick,
		wrongTick,
		undo
	},
	verifyApplication: {
		rightField,
		wrongField
	}
};
