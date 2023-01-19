import bigul from './svg/bigul.svg'
import bonabza from './svg/bonabza.svg'
import login_screen_img from './svg/login_screen_img.svg'
import login_enter from './svg/login_enter.svg'
import show_password from './svg/show_password.svg'
import hide_password from './svg/hide_password.svg'
import kyc from './svg/kyc.svg'
import rightArrow from './svg/rightArrow.svg'
import defaultUser from './svg/defaultUser.svg';
import notification from './svg/notification.svg';
import application from './svg/application.svg'
import graph from './svg/graph.svg'
import sendLink from './svg/send_link.svg'
import verify from './svg/verify.svg'
import backIcon from './svg/back.svg';
import continueIcon from './svg/continue.svg';
import profile_user from './svg/profile_user.svg';
import signature from './svg/signature.svg';
import doc_view from './svg/doc_view.svg';
import right_field from './svg/right_field.svg';
import wrong_field from './svg/wrong_field.svg';
import dropdown_icon from './svg/dropdown_icon.svg';


import dashboard from './png/dashboard.png';
import selected_dashboard from './png/selected_dashboard.png';

export const pngAssets = {
  bigul,
  dashboard: {
    dashboard,
    selected_dashboard
  }
};

export const svgAssets = {
  bigul,
  bonabza,
  dropdown_icon,
  login: {
    login_screen_img,
    login_enter,
    show_password,
    hide_password
  },
  navbar: {
    defaultUser,
    notification
  },
  dashboard: {
    kyc,
    rightArrow,
    application,
    graph,
  },
  kyc: {
    sendLink,
    verify,
    backIcon,
    continueIcon,
    profile_user,
    signature,
    doc_view
  },
  verifyApplication : {
    right_field,
    wrong_field
  }
};
