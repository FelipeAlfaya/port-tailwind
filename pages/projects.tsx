import Head from 'next/head'
import Header from '../components/Header'
import Particle from '../components/Particle'

function projects() {
  return (
    <div>
      <Head>
        <title> Portfolio - Projects</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <Particle />
      <div>projects works!</div>
    </div>
  )
}

export default projects
