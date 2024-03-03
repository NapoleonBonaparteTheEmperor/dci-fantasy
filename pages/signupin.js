import { useState } from 'react';
import Head from 'next/head';
import Footer from '@components/Footer';

export default function Home() {
  // State to manage the username input value
  const [username, setUsername] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Store the username in local storage
    localStorage.setItem('username', username);

    // Optional: You can redirect to another page here
    // router.push('/some-page');

    // Clear the username input field after submission
    setUsername('');
  };

  // Function to handle username input change
  const handleChange = (event) => {
    setUsername(event.target.value);
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
          <input type="text" id="Name" name="Name" value={username} onChange={handleChange} /><br />
          <button type="submit">Submit</button>
          <input type="hidden" name="form-name" value="SignUpName" />
        </form>
      </main>

      <Footer />
    </div>
  );
}
