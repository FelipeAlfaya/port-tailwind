import Header from '../components/Header'
import Head from 'next/head'
import Particle from '../components/Particle'
import Link from 'next/link'

function about() {
  return (
    <div>
      <Head>
        <title> Portfolio - About me</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <Particle />
      <div className='flex flex-col items-center justify-center space-y-2 h-screen z-50'>
        <h1 className='text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl z-50'>
          About me
        </h1>
        <div className='flex flex-col items-center justify-center space-y-2 text-2xl z-50'>
          <p className='text-center text-white text-xl z-50 w-3/6'>
            I am a Web-Developer with a passion for creating beautiful and
            functional websites. I have a strong background in web development
            using <span className='typescript'>TypeScript</span> and{' '}
            <span className='javascript'>JavaScript</span>, using libraries and
            framworks such as <span className='react'>React</span>,{' '}
            <span className='nextjs'>Next.js</span>,{' '}
            <span className='nodejs'>Node.js</span>,{' '}
            <span className='expressjs'>Express.js</span>,{' '}
            <span className='angular'>Angular</span> and some databases such as{' '}
            <span className='mongodb'>MongoDB</span> and{' '}
            <span className='postgresql'>PostgreSQL</span>. I am also familiar
            with the basics of <span className='python'>Python</span> and{' '}
            <span className='csharp'>C#</span>. I am always looking for new
            opportunities to learn and grow.
          </p>
          <a className='downloadButton bg-transparent hover:bg-[#019fb6] text-[#019fb6] font-semibold hover:text-white py-2 px-4 border border-[#019fb6] hover:border-transparent active:bg-[#55e8ff] rounded select-none'>
            <Link href={'/contact'}>Get in touch</Link>
          </a>
        </div>
      </div>
    </div>
  )
}

export default about
