"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  steps: string[]
  className?: string
}

const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ currentStep, totalSteps, steps, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Step {currentStep} of {totalSteps}
          </h2>
          <span className="text-sm text-muted-foreground">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep - 1
            const isCurrent = index === currentStep - 1
            
            return (
              <div key={index} className="flex items-center flex-1">
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-200",
                    isCompleted
                      ? "bg-primary border-primary text-primary-foreground"
                      : isCurrent
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted bg-background text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-2 transition-all duration-200",
                      isCompleted ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
        
        <div className="mt-3">
          <p className="text-sm font-medium text-foreground">
            {steps[currentStep - 1]}
          </p>
        </div>
      </div>
    )
  }
)
StepIndicator.displayName = "StepIndicator"

export { StepIndicator }
