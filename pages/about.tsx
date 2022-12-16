import Header from '../components/Header'
import Head from 'next/head'
import Particle from '../components/Particle'

function about() {
  return (
    <div>
      <Head>
        <title> Portfolio - About me</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <Particle />
      <div>About me works!</div>
    </div>
  )
}

export default about
