import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col"> {/* Wrapper for full height and flex layout */}
      <Head>
        <title>NowYouTry | Shop on eBay</title>
        <meta name="description" content="Shop unique products at NowYouTry on eBay. Discover quality items and great deals today!" />
        <meta property="og:title" content="NowYouTry - Your Trusted eBay Store" />
        <meta property="og:description" content="Shop unique products at NowYouTry on eBay. Discover quality items and great deals today!" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your GA4 ID
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID
        `}
      </Script>

      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="hero bg-cover bg-center text-white text-center py-20 md:py-32 w-full"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to NowYouTry</h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover unique vintage items and unbeatable deals on our eBay store.        </p>
        <a
          href="https://www.ebay.co.uk/str/nowyoutry"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700"
          onClick={() => {
            window.gtag('event', 'click', {
              event_category: 'CTA',
              event_label: 'Shop on eBay',
            });
          }}
        >
          Shop Now on eBay
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="about py-16 bg-white text-center mt-6"> {/* Increased to mt-6 for 24px */}
        <h2 className="text-3xl font-bold mb-4">About NowYouTry</h2>
        <p className="text-lg max-w-2xl mx-auto">
          At NowYouTry, we bring you curated, high-quality products with exceptional customer service.
          Shop with confidence on our trusted eBay store!
        </p>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="products py-16 bg-gray-100 mt-6"> {/* Increased to mt-6 for 24px */}
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <ProductCard
            image="/images/product1.jpg"
            title="Conway Stewart THE MORLEY"
            link="https://www.ebay.co.uk/itm/197175274491"
          />
          <ProductCard
            image="/images/product2.jpg"
            title="The Lancet Vol 1 & 2 c. 1828"
            link="https://www.ebay.co.uk/itm/197002007851"
          />
          <ProductCard
            image="/images/product3.jpg"
            title="Nikon Gold Sentinel 8x35"
            link="https://www.ebay.co.uk/itm/197221615459"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          <TestimonialCard
            quote="The plaque arrived intact and as described/pictured. Care was taken in packaging for its international journey."
            author="Garco S."
          />
          <TestimonialCard
            quote="Lovely item, as described. A real piece of history. Well packed and quick to arrive. Thank you."
            author="Ian P"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="contact py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Have questions? Contact us or follow us on social media!</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.ebay.co.uk/str/nowyoutry" className="text-blue-600 hover:underline">
            eBay Store
          </a>
          <a href="https://www.instagram.com/nytvintage/" className="text-blue-600 hover:underline">
            Instagram
          </a>
          <a href="mailto:now@gmx.co.uk" className="text-blue-600 hover:underline">
            Email Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
