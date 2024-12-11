'use client'

import { useEffect, useState } from 'react'

interface CircularProgressProps {
  value: number
  label: string
  color?: 'cyan' | 'purple'
}

export function CircularProgress({ value, label, color = 'cyan' }: CircularProgressProps) {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [value])

  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  const colorClass = color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="stroke-gray-700 fill-none"
            strokeWidth="8"
            cx="50"
            cy="50"
            r={radius}
          />
          <circle
            className={`${colorClass} fill-none transition-all duration-1000 ease-out`}
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-medium ${colorClass}`}>{label}</span>
        </div>
      </div>
    </div>
  )
}

