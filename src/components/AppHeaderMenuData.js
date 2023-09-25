export const titleLong = 'Sara - 無密碼式身份認證系統';
export const titleShort = 'Sara';

export const isSaraEnabled = false;

export const menuItems = [
  {
    name: "回首頁",
    type: "function",
    icon: 'HomeIcon',
    action: () => location.assign(process.env.VUE_APP_WEBSITE_URL)
  },
]
