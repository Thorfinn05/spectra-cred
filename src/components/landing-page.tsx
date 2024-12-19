'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Search, Shield, Database, FileCheck, Brain, Gift, Share2, Trophy, GraduationCap, Star, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b14]">
      {/* Navigation */}
     
        

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-purple-400 mb-6"
          >
            An all new initiative by DEV NEXUS SPECTRA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6x`l font-bold text-center text-white mb-6"
          >
            Store Credentials more Securely using{' '}
            <span className="text-cyan-400">SpectraCred</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Secure Your Academic Credentials and Personal Documents Seamlessly with Blockchain Technology!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-6 text-lg hover:opacity-90">
              Get Started
            </Button>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 px-8 py-6 text-lg hover:bg-cyan-400/10">
              Why Choose Us?
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0b14] to-[#0f1118]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            Our Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0f1118]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f1118] to-[#0a0b14]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            Get in Touch
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">support@spectracred.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-400">123 Blockchain Street, Crypto City, CC 12345</p>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Input 
                placeholder="Your Name" 
                className="bg-gray-800/50 border-gray-700 text-white"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800/50 border-gray-700 text-white"
              />
              <Textarea 
                placeholder="Your Message" 
                className="bg-gray-800/50 border-gray-700 text-white h-32"
              />
              <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white hover:opacity-90">
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 SpectraCred. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-colors"
    >
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  index: number
}

function TestimonialCard({ name, role, content, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
    >
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </motion.div>
  )
}

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Centralized Storage",
    description: "Store all your certificates in one secure place with easy access and management."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "IPFS Technology",
    description: "Leverage decentralized storage for enhanced security and reliability."
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Smart Contracts",
    description: "Ensure certificate authenticity with blockchain-based verification."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Security",
    description: "Advanced fraud detection using cutting-edge AI technology."
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Reward System",
    description: "Earn rewards through our AI-powered keyword detection system."
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Integration",
    description: "Seamlessly connect and share across social media platforms."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Premium Certificates",
    description: "Access exclusive certificates from top-tier institutions."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Leaderboard",
    description: "Compete and track your progress against other users."
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "University Student",
    content: "SpectraCred has revolutionized how I manage my academic certificates. The blockchain verification gives me peace of mind about their authenticity.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "HR Manager",
    content: "As a hiring manager, the ability to instantly verify credentials has streamlined our recruitment process significantly.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Educational Institution",
    content: "The integration of AI and blockchain technology makes SpectraCred a game-changer in credential management.",
    rating: 4
  }
]