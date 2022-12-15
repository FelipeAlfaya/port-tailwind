import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b  lg:h-[95vh]'>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner />
      </main>
    </div>
  )
}

export default Home
