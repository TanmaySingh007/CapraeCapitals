"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SliderProps = {
  value: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  className?: string
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ value, onValueChange, min = 0, max = 100, step = 1, className }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const num = Number(e.target.value)
      onValueChange?.([num])
    }

    return (
      <div className={cn("w-full flex items-center", className)}>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value?.[0] ?? 0}
          onChange={handleChange}
          className="w-full h-2 appearance-none rounded-full bg-gray-200 outline-none"
          style={{
            backgroundImage: `linear-gradient(to right, #a855f7 0%, #ec4899 ${(value?.[0] ?? 0) / (max - min) * 100}%, #e5e7eb ${(value?.[0] ?? 0) / (max - min) * 100}%)`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 9999px;
            background: linear-gradient(to right, #a855f7, #ec4899);
            border: 2px solid white;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          }
          input[type="range"]::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 9999px;
            background: linear-gradient(to right, #a855f7, #ec4899);
            border: 2px solid white;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
    )
  }
)
Slider.displayName = "Slider"

export default Slider
