'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/circular-progress';
import { Card } from '@/components/ui/card';
import { MoreHorizontal, Share2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#462669] via-[#141A31] to-black text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-pulse">
                Welcome to SpectraCred.
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                Apke Documents, Apka Vishwas!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-lg py-4 px-8 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                EXPLORE
              </Button>
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-orange-400/10 text-lg py-4 px-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                MY CREDENTIALS
              </Button>
            </div>

            {/* Circular Progress */}
            <div className="space-y-4">
              <h2 className="text-xl text-cyan-400 font-medium">
                Showcasing Best Skills
              </h2>
              <div className="h-0.5 bg-cyan-400 mt-1 w-48" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <CircularProgress label="ML" value={85} color="cyan" />
                <CircularProgress label="AI" value={75} color="cyan" />
                <CircularProgress label="Frontend" value={90} color="cyan" />
                <CircularProgress label="Design" value={70} color="cyan" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src="/home-top[1].png"
              alt="Dashboard Illustration"
              width={600}
              height={500}
              className="w-full h-auto bg-transparent animate-bounce"
            />
          </div>
        </div>

        {/* Credential Card */}
        <Card className="relative mt-12 p-6 bg-gradient-to-r from-[#1e293b] via-[#111827] to-[#0f172a] border border-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          {/* Floating Decorative Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-25 rounded-2xl blur-xl"></div>

          <div className="relative flex items-start justify-between z-10">
            {/* Credential Information */}
            <div className="flex gap-6">
              {/* Profile Image */}
              <Image
                src="/sc4.jpg"
                alt="Credential Icon"
                width={100}
                height={60}
                className="rounded-full border-4 border-purple-500 shadow-lg"
              />
              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Congratulations on your most recent credential!
                </h3>
                <h4 className="text-3xl font-bold text-white mt-2">
                  Is AI taking jobs?
                </h4>
                <div className="flex items-center gap-3 text-gray-400 text-sm mt-2">
                  <span className="px-2 py-1 bg-gray-800 rounded-full shadow-sm">
                    Google for Developers
                  </span>
                  <span className="px-2 py-1 bg-gray-800 rounded-full shadow-sm">
                    Google Cloud
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="p-2 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-all"
              >
                <Share2 className="w-5 h-5 text-cyan-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="p-2 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-all"
              >
                <MoreHorizontal className="w-5 h-5 text-cyan-400" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
