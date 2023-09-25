const {
  VITE_INDEX_INTE_HOST: indexInteHost,
} = import.meta.env;

export const titleLong = 'Sara - 無密碼式身份認證系統';
export const titleShort = 'Sara';

export const isSaraEnabled = false;

export const menuItems = [
  {
    name: "回首頁",
    type: "function",
    icon: 'HomeIcon',
    onClick: () => location.assign(indexInteHost)
  },
]
