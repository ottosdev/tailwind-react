/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface MenuProps {
  key: string,
  label: string,
  path: string,
  icon: any
}
interface SidebarProps {
  item: MenuProps
  open: boolean
}

export function SiderbarLink({ item, open }: SidebarProps) {
  const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

  const { pathname } = useLocation();
  const isActive = pathname === item.path ? 'text-orange-500' : 'text-white';

  return (
    <Link to={item.path} className={classNames(isActive, linkClasses)} >
      <span>{item.icon}</span>
      <span className={`duration-300 origin-left ${!open && 'scale-0'}`}>{item.label}</span>
    </Link>
  )
}