'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CircularProgress } from '@/components/circular-progress'
import { Card } from '@/components/ui/card'
import { MoreHorizontal, Share2 } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3498db] via-[#2ecc71] to-[#1abc9c]">
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/blockchain[1].png"
              alt="SpectraC Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white text-2xl font-bold">
              Spectra<span className="text-orange-400">C</span>.
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out">
              Home
            </Link>
            <Link href="/credentials/userId" className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out">
              Credentials
            </Link>
            <Link href="/explore" className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out">
              Explore
            </Link>
            <Link href="/organisation" className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out">
              Organisation
            </Link>
          </div>

          <div className="flex items-center gap-4">


            
             <Link href="/pdf_analyse" className="text-white hover:text-orange-400 transition-colors duration-300 ease-in-out">
            Spectra-AI
            </Link>
        
            <Image
              src="/sc4.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </nav>

      
      <main className="container mx-auto px-4 pt-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
                Welcome to SpectraCred.
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                Apke Documents, Apka Vishwas!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg py-6 px-8 transition-all duration-300 ease-in-out hover:scale-110">
                EXPLORE
              </Button>
              <Button
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400/10 text-lg py-6 px-8 transition-all duration-300 ease-in-out hover:scale-110"
              >
                MY CREDENTIALS
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl text-orange-400 font-medium">
                Showcasing Best Skills
                <div className="h-0.5 bg-orange-400 mt-1 w-48" />
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <CircularProgress label="ML" value={85} color="purple" />
                <CircularProgress label="AI" value={75} color="purple" />
                <CircularProgress label="Frontend" value={90} color="purple" />
                <CircularProgress label="Design" value={70} color="purple" />
              </div>
            </div>

            <Card className="p-6 bg-[#1f1635]/50 border-orange-500/30">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Image
                    src="/sc4.jpg"
                    alt="Credential Icon"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent font-medium mb-2">
                      Congratulations on your most recent credential!
                    </h3>
                    <h4 className="text-2xl text-white font-bold mb-1">
                      Is AI taking jobs?
                    </h4>
                    <div className="flex gap-2 text-sm text-gray-400">
                      <span>Google for Developers</span>
                      <span>Google Cloud</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-5 h-5 text-gray-400" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/home-top[1].png"
              alt="Dashboard Illustration"
              width={600}
              height={500}
              className="w-full h-auto bg-transparent animate-bounce"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
