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
        <form name="SignUpName" netlify>
          <label For="Name">What's your username?(YOU CAN NOT CHANGE THIS LATER, PLEASE MAKE IT UNIQUE.)</label><br />
          <input type="text" id="Name" /><br />
        </form>
      </main>
      <p>
     <form name="SignUpFavCorps" netlify>
          <label For="Name">What's your Favorite Corps?</label><br />
          <input type="text" id="FavCorps" /><br />
        </form>
    <p/>
      <Footer />
    </div>
  )
}
