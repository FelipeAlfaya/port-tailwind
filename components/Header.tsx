import { useEffect } from 'react'

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
    <nav className='relative container mx-auto p-6 bg-[#252525] rounded'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <a>
            <img
              src='Alfaya.svg'
              className='w-36 h-fit hover:drop-shadow-md'
              alt='logo'
            ></img>
          </a>
        </div>

        <div className='hidden md:flex space-x-24 text-white md:space-x-12'>
          <a className='hover:text-[#D9D9D9] text-2xl md:text-xl'>Home</a>
          <a className='hover:text-[#D9D9D9] text-2xl md:text-xl'>About me</a>
          <a className='hover:text-[#D9D9D9] text-2xl md:text-xl'>Projects</a>
        </div>

        <a
          className='hidden md:block px-6 py-3 text-white text-xl bg-[#0C8370] 
          rounded-full baseline hover:bg-[#7fffd4] hover:text-[#252525]'
        >
          Get in touch
        </a>
        <button
          id='menu_btn'
          className='hamburger md:hidden focus:outline-none flex flex-col justify-between'
        >
          <span id='hamburger_top' className='hamburguer_top'></span>
          <span id='hamburger_middle' className='hamburguer_middle'></span>
          <span id='hamburger_bottom' className='hamburguer_bottom'></span>
        </button>
      </div>

      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute hidden flex-col items-center self-end
        py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto
        sm:self-center left-6 right-6 drop-shadow-md'
        >
          <a className='hover:text-[#D9D9D9]'>Home</a>
          <a className='hover:text-[#D9D9D9]'>About me</a>
          <a className='hover:text-[#D9D9D9]'>Projects</a>
          <a className='px-6 py-3 text-white bg-[#0C8370] rounded-full baseline hover:bg-[#7fffd4] hover:text-gray-700'>
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
