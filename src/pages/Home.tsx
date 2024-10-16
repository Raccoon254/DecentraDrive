import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import cloudGif from '../assets/cloud.gif';
import privateGif from '../assets/private.gif';
import userGif from '../assets/user.gif';
import backGround from '../assets/bg.jpg';

// Initialize AOS animations
AOS.init();

const Home: React.FC = () => {
  return (
    <div className="home text-white min-h-screen">
      <div className="relative min-h-[60vh]">
      <div
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 opacity-10 bg-cover bg-center"
      ></div>

      <header className="absolute inset-0 flex items-center justify-center flex-col text-center z-10">
        <h1 className="text-4xl md:text-6xl text-interactive font-bold mb-4 animate-fade-in-down text-white">
          Welcome to Decentra
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-white">
          A decentralized file storage solution built on the Internet Computer.
        </p>
        <Link to="/drive">
          <button className="get-started-button  text-white font-semibold py-3 px-6 rounded-full shadow-lg ring-2 ring-offset-1 transition duration-300 interactive ring-offset-transparent ring-yellow-500">
            Get Started
          </button>
        </Link>
      </header>
    </div>

      {/* Features Section */}
      <section className="features py-16">
        <h2 className="text-center text-3xl md:text-5xl text-interactive font-bold mb-12" data-aos="fade-up">Key Features</h2>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="home-card" data-aos="fade-up" data-aos-delay="100">
            <div>
              <img src={cloudGif} alt="Decentralized Storage" className="w-24 h-24 interactive mb-4" />
            </div>
            <h3 className="text-xl text-interactive font-semibold mb-2">Decentralized Storage</h3>
            <p className="text-gray-300 text-interactive text-center">
              Store your files securely without relying on centralized servers.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="home-card" data-aos="fade-up" data-aos-delay="200">
            <div>
              <img src={privateGif} alt="Secure and Private" className="w-24 h-24 interactive mb-4" />
            </div>
            <h3 className="text-xl text-interactive font-semibold mb-2">Secure and Private</h3>
            <p className="text-gray-300 text-interactive text-center">
              Your data is encrypted and only accessible by you.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="home-card" data-aos="fade-up" data-aos-delay="300">
            <div>
              <img src={userGif} alt="Easy to Use" className="w-24 h-24 interactive mb-4" />
              </div>
            <h3 className="text-xl text-interactive font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-300 text-interactive text-center">
              Upload and access your files with a simple, intuitive interface.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 text-interactive" data-aos="fade-in">Ready to Decentralize Your Storage?</h2>
        <p className="text-lg mb-8 max-w-2xl text-interactive mx-auto" data-aos="fade-in" data-aos-delay="100">
          Experience secure, scalable, and efficient storage with DecentraDrive.
        </p>
        <Link to="/drive">
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300 interactive" data-aos="zoom-in" data-aos-delay="200">
            Start Now
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="home-footer py-8 bg-gray-900 text-center">
        <p className="text-gray-500 text-interactive">&copy; 2024 Decentra. All rights reserved.</p>
        <p className="text-gray-500 interactive"><a href="mailto:tomsteve187@gmail.com" className="text-yellow-400 hover:underline">Ledger Legends</a></p>
      </footer>
    </div>
  );
};

export default Home;