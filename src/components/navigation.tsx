import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CircularProgress } from '@/components/circular-progress'
import { Card } from '@/components/ui/card'
import { MoreHorizontal, Share2 } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d1b69] via-[#1f1635] to-[#1a1f35]">
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
              Credentials
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
              Explore
            </Link>
            <Link href="#" className="text-white hover:text-cyan-400 transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-medium">$50.48</span>
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
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to SpectraCred.
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                Apke Documents, Apka Vishwas!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-lg py-6 px-8">
                EXPLORE
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400/10 text-lg py-6 px-8"
              >
                MY CREDENTIALS
              </Button>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl text-cyan-400 font-medium">
                Showcasing Best Skills
                <div className="h-0.5 bg-cyan-400 mt-1 w-48" />
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <CircularProgress label="ML" value={85} color="cyan" />
                <CircularProgress label="AI" value={75} color="purple" />
                <CircularProgress label="Frontend" value={90} color="cyan" />
                <CircularProgress label="Design" value={70} color="purple" />
              </div>
            </div>

            <Card className="p-6 bg-[#1f1635]/50 border-purple-500/30">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Credential Icon"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium mb-2">
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
              src="/placeholder.svg"
              alt="Dashboard Illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

