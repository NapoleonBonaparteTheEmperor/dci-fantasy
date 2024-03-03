import Head from 'next/head';
import Link from 'next/link';
import Footer from '@components/Footer';

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form name="SignUpName" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <label htmlFor="Name">What's your username? (YOU CANNOT CHANGE THIS LATER, PLEASE MAKE IT UNIQUE.)</label><br />
          <input type="text" id="Name" name="Name" /><br />
          <button type="submit">Submit</button>
          <input type="hidden" name="form-name" value="SignUpName" />
        </form>
        
        <Link href="/">Home</Link> <br />
        <Link href="/favoritecorps">New Page</Link> <br />
      </main>

      <Footer />
    </div>
  );
}
