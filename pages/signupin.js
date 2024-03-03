import Head from 'next/head';
import Link from 'next/link';
import Footer from '@components/Footer';

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const username = formData.get('Name');

    try {
      // Additional form handling logic, such as validation
      
      // Submit the form data to Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful form submission
        console.log('Form submitted successfully');
      } else {
        // Handle form submission failure
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
