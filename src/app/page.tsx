"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "incoming"
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-red-900 text-white">
      {/* Stars Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src="/patriot-eagle.png"
                alt="Patriot Aura Eagle"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-2xl font-bold text-white">PATRIOT AURA</span>
          </div>
          <button 
            onClick={copyToClipboard}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🦅 {copied ? 'COPIED!' : 'FLY NOW'}
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center min-h-screen px-4 -mt-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eagle Image */}
            <div className="mb-8 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                {/* Circular Frame */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-blue-900 to-red-900 p-4 overflow-hidden">
                    <Image
                      src="/patriot-eagle.png"
                      alt="Patriot Aura Eagle"
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
              PATRIOT AURA
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-2 text-yellow-300 font-semibold">
              THE EAGLE HAS LANDED
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Freedom, Honor, and Gains. The most patriotic memecoin soaring to new heights.
            </p>

            {/* APE NOW and Contract Address */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-4xl mx-auto">
              {/* FLY NOW Button */}
              <button 
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                🦅 {copied ? 'COPIED!' : 'FLY NOW'}
              </button>
              
              {/* Contract Address Display */}
              <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg min-w-0 flex-1 max-w-md">
                <span className="text-gray-700 font-medium text-sm mr-2 whitespace-nowrap">Contract:</span>
                <span className="text-gray-900 font-mono text-sm truncate flex-1">{contractAddress}</span>
                <button 
                  onClick={copyToClipboard}
                  className="ml-3 p-1 hover:bg-gray-100 rounded transition-colors duration-200 flex-shrink-0"
                  title="Copy contract address"
                >
                  {copied ? (
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center mb-16">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 group">
                <svg className="w-8 h-8 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </main>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Patriot Gallery</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power and spirit of freedom through our patriotic imagery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Image 1 - Stealth Bomber */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/b2.png"
                    alt="B-2 Stealth Bomber - America's Air Superiority"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">Sky Domination</h3>
                    <p className="text-sm text-gray-200">Precision. Power. Patriotic Excellence.</p>
                  </div>
                </div>
              </div>

              {/* Image 2 - USA Flag Map */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/usa.png"
                    alt="United States Flag Map - Land of the Free"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">United We Stand</h3>
                    <p className="text-sm text-gray-200">From sea to shining sea</p>
                  </div>
                </div>
              </div>

              {/* Image 3 - Eagle */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/patriot-eagle.png"
                    alt="Patriot Eagle - Symbol of Freedom"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">Freedom's Guardian</h3>
                    <p className="text-sm text-gray-200">The eagle soars with liberty's flame</p>
                  </div>
                </div>
              </div>

              {/* Image 4 - Ronald */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/ronald.png"
                    alt="Ronald - American Icon"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">American Spirit</h3>
                    <p className="text-sm text-gray-200">Blazing trails of freedom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-400 to-blue-600">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tokenomics</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Fair launch on PumpFun with transparent distribution designed to reward our 
                community and ensure long-term growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Stats */}
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">Total Supply</span>
                  <span className="text-white font-bold text-xl">1,000,000,000 EAGLE</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">Liquidity</span>
                  <span className="text-white font-bold text-xl">167,813.26</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">Market Cap</span>
                  <span className="text-white font-bold text-xl">1,636,193.00</span>
                </div>
              </div>
              
              {/* Right side - Features */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white font-semibold">No buy/sell taxes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white font-semibold">Liquidity locked forever</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white font-semibold">Contract renounced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the EAGLE Army?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss out on the next big memecoin revolution. Get your EAGLE 
              tokens now and soar to the moon with us!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={copyToClipboard}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                🦅 {copied ? 'COPIED!' : 'FLY NOW'}
              </button>
              
              <div className="flex justify-center">
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-300 hover:scale-110"
                  title="X (Twitter)"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400">
          <p>© 2025 Patriot Aura. All rights reserved. 🦅🇺🇸</p>
          <p className="mt-2 text-sm">
            Not financial advice. DYOR. Meme responsibly.
          </p>
        </footer>
      </div>
    </div>
  );
}
