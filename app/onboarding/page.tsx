"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SellerOnboarding } from "@/components/onboarding/seller-onboarding"
import { BuyerOnboarding } from "@/components/onboarding/buyer-onboarding"
import { Building2, Users, ArrowLeft } from "lucide-react"

export default function OnboardingPage() {
  const [selectedType, setSelectedType] = useState<"seller" | "buyer" | null>(null)

  if (selectedType === "seller") {
    return <SellerOnboarding />
  }

  if (selectedType === "buyer") {
    return <BuyerOnboarding />
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      {/* Animated background unique to Onboarding */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-caprae-cool animate-gradient-shift bg-[length:400%_400%] opacity-10" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Caprae Capitals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path and let&apos;s get you started on your business journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Seller Card */}
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Building2 className="w-10 h-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-900">I&apos;m a Seller</CardTitle>
              <CardDescription className="text-blue-700">
                Looking to sell your business or find investors
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Complete your business profile to attract qualified buyers and investors. 
                Showcase your company&apos;s value and growth potential.
              </p>
              <Button 
                onClick={() => setSelectedType("seller")}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Start Seller Onboarding
              </Button>
            </CardContent>
          </Card>

          {/* Buyer Card */}
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-900">I&apos;m a Buyer</CardTitle>
              <CardDescription className="text-green-700">
                Looking to invest in or acquire businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Create your investor profile to discover business opportunities that match 
                your criteria and investment goals.
              </p>
              <Button 
                onClick={() => setSelectedType("buyer")}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                Start Buyer Onboarding
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@caprae.com" className="text-blue-600 hover:underline">
              support@caprae.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
