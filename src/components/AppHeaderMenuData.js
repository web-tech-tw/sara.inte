const {
  VITE_SARA_INTE_HOST: websiteUrl,
} = import.meta.env;

export const titleLong = 'Sara - 無密碼式身份認證系統';
export const titleShort = 'Sara';

export const isSaraEnabled = false;

export const menuItems = [
  {
    name: "回首頁",
    type: "function",
    icon: 'HomeIcon',
    onClick: () => location.assign(websiteUrl)
  },
]
