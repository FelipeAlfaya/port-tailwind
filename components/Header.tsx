import { useEffect, useState } from 'react'

import Link from 'next/link'

function Header() {
  useEffect(() => {
    const btn = document.getElementById('menu_btn') as HTMLElement
    const menu = document.getElementById('menu') as HTMLElement

    btn.addEventListener('click', () => {
      btn.classList.toggle('open')
      menu.classList.toggle('flex')
      menu.classList.toggle('hidden')
    })
  }, [])

  return (
    <nav className='relative container mx-auto p-6 bg-[#252525] rounded z-50'>
      <div className='flex items-center justify-between'>
        <div className='pt-2 select-none'>
          <a>
            <Link href={'/'}>
              <img
                src='Alfaya.svg'
                className='w-36 h-fit hover:drop-shadow-md'
                alt='logo'
              ></img>
            </Link>
          </a>
        </div>

        <div
          className=' hidden md:flex lg:space-x-24 text-[#D9D9D9] md:space-x-12 select-none font-extrabold
         text-2xl md:text-xl'
        >
          <a className='headerLink hover:text-[#019fb6]'>
            <Link href={'/'}>Home</Link>
          </a>
          <a className='headerLink hover:text-[#019fb6]'>
            <Link href={'/about'}>About me</Link>
          </a>
          <a className='headerLink hover:text-[#019fb6]'>
            <Link href={'/projects'}>Projects</Link>
          </a>
        </div>

        <Link legacyBehavior href={'/contact'}>
          {/* <a
            className='hidden md:block px-6 py-3 text-white text-xl bg-[#019fb6] 
          rounded baseline hover:bg-[#19b7cf] active:bg-[#09cfee] hover:text-[#252525] select-none duration-300'
          > */}
          <a className='bg-transparent hover:bg-[#019fb6] text-[#019fb6] font-semibold hover:text-white py-2 px-4 border border-[#019fb6] hover:border-transparent active:bg-[#55e8ff] rounded select-none'>
            Get in touch
          </a>
        </Link>

        <button id='menu_btn' className='hamburger'>
          <span id='hamburger_top' className='hamburger_top'></span>
          <span id='hamburger_middle' className='hamburger_middle'></span>
          <span id='hamburger_bottom' className='hamburger_bottom'></span>
        </button>
      </div>

      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute hidden text-[#252525] flex-col items-center self-end
        py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto
        sm:self-center left-6 right-6 drop-shadow-md uppercase rounded z-50'
        >
          <a className='headerLink hover:text-[#019fb6]'>
            <Link href={'/'}>Home</Link>
          </a>
          <a className='headerLink hover:text-[#019fb6]'>
            <Link href={'/about'}>About me</Link>
          </a>
          <a className='headerLink hover:text-[#019fb6]'>
            <Link href={'/projects'}>Projects</Link>
          </a>

          <a className='bg-transparent hover:bg-[#019fb6] text-[#019fb6] font-semibold hover:text-white py-2 px-4 border border-[#019fb6] hover:border-transparent active:bg-[#55e8ff] rounded select-none'>
            <Link href={'/contact'}>Get in touch</Link>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
