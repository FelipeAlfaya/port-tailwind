import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <main></main>
    </div>
  )
}

export default Home
