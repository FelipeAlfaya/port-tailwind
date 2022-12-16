import Head from 'next/head'
import Header from '../components/Header'
import Particle from '../components/Particle'

function contact() {
  return (
    <div>
      <Head>
        <title> Portfolio - Contact</title>
      </Head>
      <Header />
      <Particle />
      <div>contacts works!</div>
    </div>
  )
}

export default contact
