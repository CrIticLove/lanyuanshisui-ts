import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    navigationBarTitleText: '蓝园·拾碎',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    color: '#BFBFBF',
    selectedColor:"#262626",
    backgroundColor:"F0F2F5",
    list: [
      {
        pagePath:"pages/index/index",
        text:"首页",
      },
      {
        pagePath:"pages/user/index",
        text:"用户页",
      },
    ]
  }
};

export default config;
