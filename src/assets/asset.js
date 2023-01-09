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

export const pngAssets = {
  bigul
};

export const svgAssets = {
  bigul,
  bonabza,
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
    graph
  }
};
