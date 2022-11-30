import {
  creditCardPath,
  fileTextPath,
  heartPath,
  logOutPath,
  messageSquarePath,
  userPath,
  accountMenuPath,
} from "../../img/icons";

export { accountMenuPath };

export const memberMenu = [
  {
    logo: userPath,
    content: "帳戶資訊",
    navigatePath: "./member",
  },
  {
    logo: creditCardPath,
    content: "我的寵物名片",
    navigatePath: null,
  },
  {
    logo: fileTextPath,
    content: "查看我的訂單",
    navigatePath: null,
  },
  {
    logo: heartPath,
    content: "收藏店家",
    navigatePath: null,
  },
  {
    logo: messageSquarePath,
    content: "安心評價",
    navigatePath: null,
  },
  {
    logo: logOutPath,
    content: "登出",
    navigatePath: null,
  },
];

export const hotelMemberMenu = [
  {
    logo: userPath,
    content: "帳戶資訊",
    navigatePath: null,
  },
  {
    logo: fileTextPath,
    content: "我的房間管理",
    navigatePath: "/cms",
  },
  {
    logo: logOutPath,
    content: "登出",
    navigatePath: "/home",
  },
];
