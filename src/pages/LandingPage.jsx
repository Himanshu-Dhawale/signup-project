import React from 'react';

function LandingPage() {
  return (
    <div>
      <header className="bg-indigo-600">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-white hover:text-gray-300">Buildx</a>
            <nav className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300">Services</a>
              <a href="#" className="text-white hover:text-gray-300">Portfolio</a>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
      <section className="container px-6 py-8 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Transform Your Space</h1>
            <p className="text-gray-600 mb-8">Discover the perfect flooring and acoustic solutions for your home or business.</p>
          </div>
        </section>

        <section className="container px-6 py-8 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
              <span className="inline-block text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l1.5-1.5L11 12l-4.5 4.5L5 12z" />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize">Carpets</h1>
              <p className="text-gray-500">Explore our wide range of premium carpets designed to add elegance and comfort to any space.</p>
              <a href="#" className="inline-flex p-2 text-indigo-500 capitalize transition-colors duration-300 transform bg-indigo-100 rounded-full hover:underline hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
              <span className="inline-block text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize">Luxury Vinyl Tiles</h1>
              <p className="text-gray-500">Discover our collection of luxury vinyl tiles that combine style and durability for a perfect flooring solution.</p>
              <a href="#" className="inline-flex p-2 text-indigo-500 capitalize transition-colors duration-300 transform bg-indigo-100 rounded-full hover:underline hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
              <span className="inline-block text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15.6c-1.2-1.2-2.8-2-4.6-2.4 1.4-1.3 2.3-3.2 2.3-5.2 0-4-3.3-7.3-7.3-7.3S2.7 4 2.7 8c0 2 .9 3.9 2.3 5.2-1.8.4-3.4 1.2-4.6 2.4C-.8 19 0 21 0 21h24s.8-2-1.6-5.4z" />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize">Acoustic Solutions</h1>
              <p className="text-gray-500">Enhance your space with our acoustic plaster, spray, and panels for superior sound quality and aesthetics.</p>
              <a href="#" className="inline-flex p-2 text-indigo-500 capitalize transition-colors duration-300 transform bg-indigo-100 rounded-full hover:underline hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="container px-6 py-8 mx-auto lg:py-16">
          <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img className="object-cover w-full rounded-xl h-96" src="Staircase-Refresh-with-Wool-Berber-Carpet-and-Modern-Stair-Rods-1-800x800.jpg" alt="Portfolio" />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Modern Carpets</h1>
              <p className="mt-2 text-gray-500">High-quality carpets designed for both aesthetic appeal and durability.</p>
              <a href="#" className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400">Read more</a>
            </div>
            <div>
              <img className="object-cover w-full rounded-xl h-96" src="351.jpg" alt="Portfolio" />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Luxury Vinyl Tiles</h1>
              <p className="mt-2 text-gray-500">Stylish and practical vinyl tiles that add a touch of luxury to any room.</p>
              <a href="#" className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400">Read more</a>
            </div>
            <div>
              <img className="object-cover w-full rounded-xl h-96" src="wood-wool5-768x513.jpeg" alt="Portfolio" />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Acoustic Panels</h1>
              <p className="mt-2 text-gray-500">Innovative acoustic solutions to enhance sound quality and design.</p>
              <a href="#" className="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400">Read more</a>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl flex justify-center items-center font-semibold text-gray-800 mb-6">Our Clients</h2>
            <div className="flex justify-center items-center flex-wrap">
              <img src="google.png" alt="Google" className="h-12 mx-4 my-2" />
              <img src="microsoft.png" alt="Microsoft" className="h-12 mx-4 my-2" />
              <img src="social.png" alt="Amazon" className="h-12 mx-4 my-2" />
              <img src="apple-logo.png" alt="Apple" className="h-12 mx-4 my-2" />
              <img src="facebook.png" alt="Facebook" className="h-12 mx-4 my-2" />
              <img src="tesla.png" alt="Tesla" className="h-12 mx-4 my-2" />
              <img src="nike.png" alt="Nike" className="h-12 mx-4 my-2" />
              <img src="samsung.png" alt="Samsung" className="h-12 mx-4 my-2" />
              <img src="intel.png" alt="Intel" className="h-12 mx-4 my-2" />
              <img src="adidas.png" alt="Adidas" className="h-12 mx-4 my-2" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-600">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold text-white hover:text-gray-300">Buildx</a>
          <div className="flex -mx-2">
            <a href="#" className="mx-2 text-white hover:text-gray-300" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.197 4.92 4.92 0 00-8.385 4.482A13.949 13.949 0 011.671 3.149a4.92 4.92 0 001.524 6.574 4.902 4.902 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.903 4.903 0 01-2.224.084 4.924 4.924 0 004.6 3.417A9.867 9.867 0 010 21.539a13.905 13.905 0 007.548 2.212c9.055 0 14.004-7.497 14.004-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="mx-2 text-white hover:text-gray-300" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.293H9.692v-3.62h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.764v2.31h3.588l-.467 3.62h-3.12V24h6.116c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a href="#" className="mx-2 text-white hover:text-gray-300" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.8 0H4.2C1.88 0 0 1.88 0 4.2v15.6C0 22.12 1.88 24 4.2 24h15.6c2.32 0 4.2-1.88 4.2-4.2V4.2C24 1.88 22.12 0 19.8 0zm-12 20H4.2V8.7h3.6V20zm-1.8-13.5c-1.14 0-2.1-.96-2.1-2.1 0-1.14.96-2.1 2.1-2.1 1.14 0 2.1.96 2.1 2.1 0 1.14-.96 2.1-2.1 2.1zm15 13.5h-3.6v-5.8c0-1.38-.04-3.14-1.92-3.14-1.92 0-2.2 1.5-2.2 3.04v5.9h-3.6V8.7h3.46v1.54h.04c.48-.92 1.64-1.9 3.38-1.9 3.62 0 4.28 2.38 4.28 5.48V20z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;


