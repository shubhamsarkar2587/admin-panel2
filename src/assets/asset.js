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
import application from './svg/application.svg';
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

import dashboard from './png/dashboard.png';
import selectedDashboard from './png/selectedDashboard.png';

export const pngAssets = {
	bigul,
	dashboard: {
		dashboard,
		selectedDashboard
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
	dashboard: {
		kyc,
		rightArrow,
		application,
		graph
	},
	kyc: {
		sendLink,
		verify,
		backIcon,
		continueIcon,
		profileUser,
		signature,
		docView
	},
	verifyApplication: {
		rightField,
		wrongField
	}
};
