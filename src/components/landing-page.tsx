// "use client"

// import { Button } from "@/components/ui/button"
// import { SignInButton, SignUpButton } from "@clerk/nextjs"
// import { Shield, Award, Share2 } from "lucide-react"

// export function LandingPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
//       <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
//         Secure Your Credentials on the Blockchain
//       </h1>
//       <p className="text-xl text-muted-foreground max-w-2xl mb-8">
//         Store, verify, and manage your certificates using cutting-edge blockchain technology and AI-powered fraud detection.
//       </p>
      
//       <div className="flex gap-4 mb-12">
//         <SignUpButton mode="modal">
//           <Button size="lg">Get Started</Button>
//         </SignUpButton>
//         <SignInButton mode="modal">
//           <Button variant="outline" size="lg">Sign In</Button>
//         </SignInButton>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
//         <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
//           <Shield className="h-12 w-12 mb-4 text-primary" />
//           <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
//           <p className="text-muted-foreground text-center">
//             Your certificates are securely stored on IPFS and verified through blockchain technology.
//           </p>
//         </div>

//         <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
//           <Award className="h-12 w-12 mb-4 text-primary" />
//           <h3 className="text-lg font-semibold mb-2">AI Verification</h3>
//           <p className="text-muted-foreground text-center">
//             Advanced AI-powered fraud detection ensures the authenticity of all certificates.
//           </p>
//         </div>

//         <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
//           <Share2 className="h-12 w-12 mb-4 text-primary" />
//           <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
//           <p className="text-muted-foreground text-center">
//             Share your verified credentials on social media and earn rewards through airdrops.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f35] via-[#111827] to-[#0f172a]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="SpectraC Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white text-2xl font-bold">
              Spectra<span className="text-cyan-400">C</span>.
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
              Features
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
              Discover
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
              Team
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-2 text-white">
              Spectra AI
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <div className="flex gap-4 mb-12">
       <SignUpButton mode="modal">
           <Button size="lg">Get Started</Button>
         </SignUpButton>
         <SignInButton mode="modal">
           <Button variant="outline" size="lg">Sign In</Button>
         </SignInButton>
       </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 text-lg mb-6">
            An all new initiative by DEV NEXUS SPECTRA
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Store Credentials more Securely using{' '}
            <span className="text-cyan-400">SpectraCred</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Secure Your Academic Credentials and Personal Documents Seamlessly with
            Blockchain Technology!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-lg py-6 px-8">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg py-6 px-8"
            >
              Why Choose Us ?
            </Button>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Security Illustration"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

