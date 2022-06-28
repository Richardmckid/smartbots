import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'
import Router from 'next/router'
import Link from 'next/link'

export default function Home() {
  const [session, setSession] = useState(null)
  // const router = Router()

  const logout = async () => {
    await supabase.auth.signOut()
    // setSession(null)
    // Router.push('/login')

    // console.log('hhhhhhhhh')
  }
  useEffect(() => {
    setSession(supabase.auth.session())
    if(!supabase.auth.session()){
      Router.push('/login')
    }
    
    supabase.auth.onAuthStateChange((_event, session) => {
      
      setSession(session)
    })
  }, [])



  return (
    // <>
    //   {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    // </>
    <>
    <div className='bg-white text-gray-900'>
      <aside className='fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 z-20 flex flex-col h-screen overflow-hidden shadow-2xl transition-all bg-white filament-sidebar lg:border-r w-80 lg:z-0 lg:translate-x-0 -translate-x-full rtl:lg:-translate-x-0 rtl:translate-x-full'>
        <header className="border-b h-[4rem] shrink-0 px-6 flex items-center">
          <Link href="/" className="block w-full">
            <div className="text-xl font-bold tracking-tight">BW Register</div>
          </Link>
        </header>

        <nav className='flex-1 overflow-y-auto py-6'>
          <ul className='space-y-3 px-3'>
            <li>
              <a className="flex items-center gap-3 px-2 py-2 rounded-lg font-medium transition hover:bg-gray-500/5 focus:bg-gray-500/5" href="#">
              <svg className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
                <span className="mx-3 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-2 py-2 rounded-lg font-medium transition hover:bg-gray-500/5 focus:bg-gray-500/5" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-3 font-medium">Births</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-2 py-2 rounded-lg font-medium transition hover:bg-gray-500/5 focus:bg-gray-500/5" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-3 font-medium">Deaths</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-2 py-2 rounded-lg font-medium transition hover:bg-gray-500/5 focus:bg-gray-500/5" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-3 font-medium">Certificates</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className='w-screen space-y-6 flex-1 flex flex-col lg:pl-80 rtl:lg:pl-0 rtl:lg:pr-80'>
        <header className='h-[4rem] shrink-0 w-full border-b flex items-center px-6'>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center md:order-2">
              <button onClick={logout} type="button" className="flex p-3 text-white mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                {/* <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/> */}
                Logout
              </button>
              
              <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" >
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-800 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Link 1</a>
              </li>
              
            </ul>
          </div>
          </div>
        </header>
        <div className='flex-1 w-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl'>
          content
        </div>
      </div>
    </div>
    </>
  )
}