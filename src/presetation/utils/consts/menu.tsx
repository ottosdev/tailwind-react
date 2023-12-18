import { HiOutlineCube, HiOutlineViewGrid } from 'react-icons/hi'
export const MENU_SIDERBAR_BODY = [

  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'product',
    label: 'Product',
    path: '/product',
    icon: <HiOutlineCube />
  }
]

export const MENU_SIDERBAR_BOOTOM = [

  {
    key: 'help',
    label: 'Help',
    path: '/suppot',
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCube />
  }
]