'use client'

import { useEffect, useState } from 'react'

interface CircularProgressProps {
  value: number
  label: string
  color?: 'cyan' | 'purple' | 'orange' | 'green'
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

  const colorClasses: Record<string, string> = {
    cyan: 'stroke-cyan-400 text-cyan-400',
    purple: 'stroke-purple-400 text-purple-400',
    orange: 'stroke-orange-400 text-orange-400',
    green: 'stroke-green-400 text-green-400',
  }

  const dynamicClasses = colorClasses[color] || 'stroke-cyan-400 text-cyan-400'

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            className="stroke-gray-800 fill-none"
            strokeWidth="8"
            cx="50"
            cy="50"
            r={radius}
          />
          {/* Progress Circle */}
          <circle
            className={`${dynamicClasses} fill-none transition-all duration-1000 ease-out`}
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        {/* Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{progress}%</span>
          <span className={`text-sm font-medium ${dynamicClasses.split(' ')[1]}`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}
