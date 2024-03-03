import Link from 'next/link';
import Head from 'next/head';

export default function WelcomePage() {
  return (
    <div className="container">
      <Head>
        <title>Hello!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my Drum Corps International Fantasy League!</h1>
        <p>Please proceed to the next page to sign up or sign in.</p>
        <Link href="/signupin">
          <a className="link">Sign Up, or Sign In!</a>
        </Link>
      </main>

      <footer>
        <p>Please don't sue me box 5!</p>
      </footer>

   <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url('/signupinbkg.png');
          background-size: cover;
          background-position: center;
        }
        
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #5c7c81; /* Pastel blue */
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f9eff3; /* Pastel pink */
        }

        footer p {
          margin: 0;
        }

        .link {
          color: #6699cc; /* Pastel blue */
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .link:hover {
          color: #4073b8; /* Darker pastel blue */
        }
      `}</style>
    </div>
  );
}
