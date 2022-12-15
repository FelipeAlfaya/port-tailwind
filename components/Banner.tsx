import Image from 'next/legacy/image'
import Link from 'next/link'

function Banner() {
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen blur-lg select-none'>
        <Image
          src='/background.png'
          layout='fill'
          objectFit='cover'
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col items-center justify-center space-y-2'>
        <h1 className='text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl'>
          Hi, I'm{' '}
          <span className='headerLink hover:text-[#09cfee]'>
            <Link href={'/about'}>Alfaya</Link>
          </span>
        </h1>
        <h2 className='flex flex-col items-center justify-center space-y-2 text-2xl'>
          Web-developer
        </h2>
      </div>
    </div>
  )
}

export default Banner
