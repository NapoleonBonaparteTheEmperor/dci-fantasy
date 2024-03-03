import Head from 'next/head';
import Footer from '@components/Footer';

export default function Home() {
  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    const username = event.target.Name.value;
    console.log("Username:", username);
    localStorage.setItem("username", username);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={handleUsernameSubmit}>
          <label htmlFor="Name">What's your username? (YOU CANNOT CHANGE THIS LATER, PLEASE MAKE IT UNIQUE.)</label><br />
          <input type="text" id="Name" name="Name" /><br />
          <button type="submit">Submit</button>
        </form>

        <form name="SignUpFavCorps" method="POST" data-netlify="true">
          <label htmlFor="FavCorps">What's your Favorite Corps?</label><br />
          <input type="text" id="FavCorps" name="FavCorps" /><br />
        </form>
      </main>

      <Footer />
    </div>
  )
}
