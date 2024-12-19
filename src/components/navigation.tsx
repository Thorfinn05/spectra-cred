'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className=" bg-gradient-to-br from-[#462669] via-[#141A31] to-black text-white">
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/blockchain[1].png"
              alt="SpectraC Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white text-2xl font-bold tracking-wider">
              Spectra<span className="text-orange-400">C</span>.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { href: "/home", label: "Home" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/credentials/userId", label: "Credentials" },
              { href: "/explore", label: "Explore" },
              { href: "/organisation", label: "Organisation" },
              { href: "/pdf_analyse", label: "Spectra-AI" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search and Profile Section */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <Link href="/wallet" className='bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg py- px-4 text-lg mt-8'>Connect wallet</Link>

            <button className="text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300 ease-in-out">
              <Link href="https://www.chatbase.co/dashboard/spectra/chatbot/tMfEdJaEUKPOg9yhOhwq9" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/sc4.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-orange-400"
                />
              </Link>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            {[
              { href: "/home", label: "Home" },
              { href: "/credentials/userId", label: "Credentials" },
              { href: "/explore", label: "Explore" },
              { href: "/organisation", label: "Organisation" },
              { href: "/pdf_analyse", label: "Spectra-AI" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out font-medium block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      
    </div>
  )
}
