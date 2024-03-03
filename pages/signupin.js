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
        <form name="SignUpName" method="POST" data-netlify="true">
          <label htmlFor="Name">What's your username? (YOU CANNOT CHANGE THIS LATER, PLEASE MAKE IT UNIQUE.)</label><br />
          <input type="text" id="Name" name="Name" /><br />
        </form>

      </main>

      <Footer />
    </div>
  )
}
