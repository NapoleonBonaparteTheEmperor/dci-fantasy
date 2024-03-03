import { useState } from 'react';
import Head from 'next/head';
import Footer from '@components/Footer';

export default function Home() {
  // State to store the username
  const [username, setUsername] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Get the username value from the input field
    const formData = new FormData(event.target);
    const enteredUsername = formData.get('Name');
    
    // Store the username in local storage
    localStorage.setItem('username', enteredUsername);

    // Update the state
    setUsername(enteredUsername);
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
        </form>

        <form name="SignUpFavCorps" method="POST" data-netlify="true">
          <label htmlFor="FavCorps">What's your Favorite Corps?</label><br />
          <input type="text" id="FavCorps" name="FavCorps" /><br />
        </form>
      </main>

      <Footer />
    </div>
  );
}
