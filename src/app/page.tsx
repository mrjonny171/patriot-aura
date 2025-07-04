"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9EQ5eWY7pDB7MYoSFr8QJ19onGSlehDmLbSGT2b3pump"; // Replace with actual CA
  
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
                src="/patriot-eagle.jpg"
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
                <Image
                  src="/patriot-eagle.jpg"
                  alt="Patriot Aura Eagle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Image 1 - Eagle with Flag */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/gallery/eagle-flag.jpg"
                    alt="Patriot Eagle with American Flag"
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

              {/* Image 2 - Patriot Missile */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="aspect-square relative">
                  <Image
                    src="/gallery/patriot-missile.jpg"
                    alt="Patriot Defense System"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">Shield of Liberty</h3>
                    <p className="text-sm text-gray-200">Defending freedom with patriot strength</p>
                  </div>
                </div>
              </div>

              {/* Placeholder for more images */}
              <div className="relative group overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white/70">
                  <div className="text-4xl mb-4">🦅</div>
                  <p className="font-semibold">More Coming Soon</p>
                  <p className="text-sm">Additional patriotic imagery</p>
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
              
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-300 hover:scale-110"
                  title="Discord"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-300 hover:scale-110"
                  title="X (Twitter)"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-300 hover:scale-110"
                  title="Telegram"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
