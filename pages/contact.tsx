import Head from 'next/head'
import Header from '../components/Header'
import Particle from '../components/Particle'

function contact() {
  return (
    <div>
      <Head>
        <title> Portfolio - Contact</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <Particle />
      <div className='msg-co flex flex-col container mx-auto max-w-fit max-h-fit px-4 p-4'>
        <h1 className='text-6xl p-2.5 m-2.5  text-[#019fb6]/70 bg-transparent font-bold text-center md:text-4xl lg:text-4xl z-50'>
          Contact me
        </h1>
        <input
          type='text'
          placeholder='Name'
          className='p-2.5 m-2.5 bg-transparent border border-[#019fb6]'
        ></input>
        <input
          type='text'
          placeholder='Subject'
          className='p-2.5 m-2.5 bg-transparent border border-[#019fb6]'
        ></input>
        <textarea
          placeholder='Message'
          className='p-2.5 m-2.5 bg-transparent border border-[#019fb6]'
        ></textarea>
        <a
          className='sendButton bg-transparent flex items-center justify-center hover:bg-[#019fb6] text-[#019fb6] 
          font-semibold hover:text-white p-2.5 m-2.5 border border-[#019fb6] hover:border-transparent active:bg-[#55e8ff] 
         rounded select-none max-w-none max-h-max'
        >
          Send
        </a>
      </div>
    </div>
  )
}

export default contact
