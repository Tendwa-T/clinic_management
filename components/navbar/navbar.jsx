/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import UserContext from '@/context/UserContext'
import { useRouter } from 'next/router'
import Dropdown from '../dropdown/Dropdown'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Patients', href: '/patients', current: false },
  { name: 'Pharmacy', href: '/pharmacy', current: false },

]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { user } = useContext(UserContext)
  const [uname, setUname] = useState('')
  const router = useRouter()


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      const userObj = JSON.parse(user)
      setUname(userObj.userName)
    }

    if (router.asPath.includes('/dashboard')) {
      navigation[0].current = true
    }

    if (router.asPath.includes('/patients')) {
      navigation[1].current = true
    }

    if (router.asPath.includes('/pharmacy')) {
      navigation[2].current = true
    }
  }, [router.asPath])

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Dropdown />
                  </div>
                </div>
              </div>
              {user ? <div className='flex flex-row w-auto justify-between'>
                <h1 className='text-white cursor-none'>{uname}</h1>
                <ArrowRightOnRectangleIcon className='h-6 w-6 ml-7 text-white transition ease-in-out duration-500 hover:text-gray-600 hover:scale-125 ' onClick={() => { router.push('login') }} />
              </div> : <div className='flex flex-row w-auto'><button className='text-white' onClick={logout}><ArrowLeftOnRectangleIcon className='h-6 w-6 ' /> <h1 className='text-sm'>Sign in</h1></button></div>}

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
