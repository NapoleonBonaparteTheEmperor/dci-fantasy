import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form>
          <label For="Name">What's your name?</label><br />
          <input type="text" id="Name" /><br />
        </form>
      </main>

      <Footer />
    </div>
  )
}
