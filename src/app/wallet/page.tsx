'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function Home() {
  const [amount, setAmount] = useState<string>('0.5')
  const [loading, setLoading] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleAirdrop = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black p-4">
      <div className="max-w-2xl mx-auto pt-12 space-y-8">
        {/* Animated Logo */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
              src="/blockchain[1].png"
              alt="SpectraC Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text"
        >
          Spectra Cred Faucet
        </motion.h1>

        {/* Main Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 space-y-6 border border-purple-500/20"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Request Airdrop</h2>
              <Select defaultValue="devnet">
                <SelectTrigger className="w-32 bg-black/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="devnet">Devnet</SelectItem>
                  <SelectItem value="testnet">Testnet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-sm text-gray-400">Maximum of 2 requests per hour</p>
          </div>

          <div className="space-y-4">
            <Input
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="bg-black/50 border-purple-500/20"
            />

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Amount</label>
              <div className="grid grid-cols-4 gap-2">
                {['0.5', '1', '2.5', '5'].map((value) => (
                  <Button
                    key={value}
                    variant="outline"
                    onClick={() => setAmount(value)}
                    className={cn(
                      "border-purple-500/20 hover:border-purple-500 transition-colors",
                      amount === value && "bg-purple-500/20 border-purple-500"
                    )}
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleAirdrop}
                disabled={loading || !walletAddress}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  "Confirm Airdrop"
                )}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub Connection Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 space-y-4 border border-purple-500/20"
        >
          <h2 className="text-2xl font-semibold text-white">Unlock a Higher Airdrop Limit</h2>
          <p className="text-gray-400">Sign in with your GitHub account to unlock a higher airdrop limit</p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              className="w-full border-purple-500/20 hover:border-purple-500 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              Connect your GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}