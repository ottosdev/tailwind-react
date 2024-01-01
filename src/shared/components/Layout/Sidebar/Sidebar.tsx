/* eslint-disable @typescript-eslint/no-explicit-any */
import { FcBullish } from "react-icons/fc";
import { MENU_SIDERBAR_BODY, MENU_SIDERBAR_BOOTOM } from "../../../../presetation/utils/consts/menu.tsx";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout, HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { useState } from "react";
import { SiderbarLink } from "./SidebarLink.tsx";

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';
export default function Sidebar() {
  const [open, setOpen] = useState(true)

  function handleOpen() {
    setOpen(!open)
  }
  return (
    <div className={`flex flex-col ${open ? 'w-60' : 'w-[5.5rem]'} bg-neutral-900 text-white p-3 duration-300 relative`}>

      <span onClick={handleOpen} className={`absolute cursor-pointer -right-3 top-9`}>
        {open ? <HiArrowCircleLeft size={30} className='text-gray-200 bg-gray-800 rounded-full' /> : <HiArrowCircleRight size={30} className='text-gray-200 bg-gray-800 rounded-full' />}
      </span>


      <div className="flex items-center gap-2 px-1 py-3">
        <span>
          <FcBullish size={open ? 24 : 40} />
        </span>

        <span className={`duration-300 origin-left  ${!open && 'scale-0'}`} >Logo</span>
      </div>

      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {MENU_SIDERBAR_BODY.map(menu => (
          <div key={menu.key}>
            <SiderbarLink open={open} item={menu} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 border-t border-neutral-700">
        {MENU_SIDERBAR_BOOTOM.map(menu => (
          <div key={menu.key}>
            <SiderbarLink open={open} item={menu} />
          </div>
        ))}
        <div>
          <Link to="/" className={classNames('text-red-500', linkClasses)}>
            <span>
              <HiOutlineLogout />
            </span>

            <span className={`duration-300 origin-left ${!open && 'scale-0'}`}>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

