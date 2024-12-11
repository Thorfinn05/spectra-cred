"use client"

import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton } from "@clerk/nextjs"
import { Shield, Award, Share2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        Secure Your Credentials on the Blockchain
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        Store, verify, and manage your certificates using cutting-edge blockchain technology and AI-powered fraud detection.
      </p>
      
      <div className="flex gap-4 mb-12">
        <SignUpButton mode="modal">
          <Button size="lg">Get Started</Button>
        </SignUpButton>
        <SignInButton mode="modal">
          <Button variant="outline" size="lg">Sign In</Button>
        </SignInButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
          <Shield className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
          <p className="text-muted-foreground text-center">
            Your certificates are securely stored on IPFS and verified through blockchain technology.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
          <Award className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">AI Verification</h3>
          <p className="text-muted-foreground text-center">
            Advanced AI-powered fraud detection ensures the authenticity of all certificates.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
          <Share2 className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
          <p className="text-muted-foreground text-center">
            Share your verified credentials on social media and earn rewards through airdrops.
          </p>
        </div>
      </div>
    </div>
  )
}