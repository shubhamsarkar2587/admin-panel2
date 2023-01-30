import verifyAdmin from './png/verifyAdmin.png';
import addUser from './png/addUser.png';
import mobileNumber from './png/mobileNumber.png';
import mail from './png/mail.png';

import bigul from './svg/bigul.svg';
import bonabza from './svg/bonabza.svg';
import loginScreenImg from './svg/loginScreenImg.svg';
import loginEnter from './svg/loginEnter.svg';
import showPassword from './svg/showPassword.svg';
import hidePassword from './svg/hidePassword.svg';
import kyc from './svg/kyc.svg';
import rightArrow from './svg/rightArrow.svg';
import defaultUser from './svg/defaultUser.svg';
import notification from './svg/notification.svg';
import widgetApplication from './svg/application.svg';
import graph from './svg/graph.svg';
import sendLink from './svg/sendLink.svg';
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

export const pngAssets = {
	bigul,
	kyc: {
		mobileNumber,
		mail
	},
	reactTable: {
		addUser
	},
	admin: {
		verifyAdmin
	}
};

export const svgAssets = {
	bigul,
	bonabza,
	dropdownIcon,
	login: {
		loginScreenImg,
		loginEnter,
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
	dashboard: {
		kyc,
		rightArrow,
		widgetApplication,
		graph
	},
	kyc: {
		sendLink,
		verify,
		backIcon,
		continueIcon,
		profileUser,
		signature,
		docView,
		invalidInput
	},
	verifyApplication: {
		rightField,
		wrongField
	}
};
