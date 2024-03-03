import Head from 'next/head'
import Footer from '@components/Footer'

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const favoriteCorps = formData.get('FavCorps');

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
        <form name="SignUpFavCorps" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <label htmlFor="FavCorps">What's your Favorite Corps?</label><br />
          <input type="text" id="FavCorps" name="FavCorps" /><br />
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
