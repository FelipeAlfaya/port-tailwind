import Header from '../components/Header'
import Head from 'next/head'

function about() {
  return (
    <div>
      <Head>
        <title> Portfolio - About me</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />

      <div>About me works!</div>
    </div>
  )
}

export default about
