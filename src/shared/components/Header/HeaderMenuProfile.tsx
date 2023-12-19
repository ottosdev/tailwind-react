import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from './Avatar'

export default function HeaderMenuProfile() {
  const navigate = useNavigate()
  return (
    <Menu as="div" className="relative">
      <Avatar name='Otto' />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-1 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <div
                onClick={() => navigate('/')}
                className={classNames(
                  active && 'bg-gray-100',
                  'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                )}
              >
                Your Profile
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                onClick={() => navigate('/product')}
                className={classNames(
                  active && 'bg-gray-100',
                  'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                )}
              >
                Settings
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active && 'bg-gray-100',
                  'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                )}
              >
                Sign out
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
