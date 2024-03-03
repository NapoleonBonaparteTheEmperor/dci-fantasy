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
        <form name="SignUpFavCorps" method="POST" data-netlify="true">
          <label htmlFor="FavCorps">What's your Favorite Corps?</label><br />
          <input type="text" id="FavCorps" name="FavCorps" /><br />
        </form>
      </main>
      <Footer />
    </div>
  )
}
