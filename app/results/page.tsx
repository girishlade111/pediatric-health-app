"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getVaccineRecommendations } from "@/lib/vaccine-data"
import { getNutritionGuidance } from "@/lib/nutrition-data"

export default function Results() {
  const searchParams = useSearchParams()
  const ageInMonths = Number.parseInt(searchParams.get("ageInMonths") || "0", 10)

  const [ageDisplay, setAgeDisplay] = useState("")
  const [vaccines, setVaccines] = useState<any[]>([])
  const [nutrition, setNutrition] = useState<any>(null)

  useEffect(() => {
    // Format age for display
    if (ageInMonths < 24) {
      setAgeDisplay(`${ageInMonths} months`)
    } else {
      const years = Math.floor(ageInMonths / 12)
      const months = ageInMonths % 12
      setAgeDisplay(months > 0 ? `${years} years and ${months} months` : `${years} years`)
    }

    // Get recommendations based on age
    setVaccines(getVaccineRecommendations(ageInMonths))
    setNutrition(getNutritionGuidance(ageInMonths))
  }, [ageInMonths])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-800">Health Recommendations</h1>
        <Link href="/age-form">
          <Button variant="outline">Change Age</Button>
        </Link>
      </div>

      <div className="mb-6 rounded-lg bg-blue-50 p-4">
        <h2 className="text-xl font-semibold text-blue-700">
          Recommendations for: <span className="text-blue-900">{ageDisplay}</span>
        </h2>
      </div>

      <Tabs defaultValue="vaccines" className="mb-12">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="vaccines" className="text-lg">
            Vaccines
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="text-lg">
            Nutrition
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vaccines">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Recommended Vaccines</CardTitle>
              <CardDescription>
                Based on standard pediatric immunization schedules for a {ageDisplay} old child
              </CardDescription>
            </CardHeader>
            <CardContent>
              {vaccines.length > 0 ? (
                <div className="space-y-4">
                  {vaccines.map((vaccine, index) => (
                    <div key={index} className="rounded-md border border-blue-100 bg-blue-50 p-4">
                      <h3 className="mb-2 font-semibold text-blue-800">{vaccine.name}</h3>
                      <p className="text-blue-700">{vaccine.description}</p>
                      {vaccine.notes && <p className="mt-2 text-sm text-blue-600">{vaccine.notes}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-blue-700">
                  No specific vaccines are scheduled for this age. Please consult with your pediatrician for any
                  catch-up vaccinations or special recommendations.
                </p>
              )}

              <div className="mt-6 rounded-md bg-yellow-50 p-4 text-yellow-800">
                <p className="font-semibold">Important Note:</p>
                <p className="mt-1">
                  This is a general guideline based on standard immunization schedules. Your child's specific needs may
                  vary. Always consult with your healthcare provider for personalized recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Nutrition Guidance</CardTitle>
              <CardDescription>Recommended nutrition for a {ageDisplay} old child</CardDescription>
            </CardHeader>
            <CardContent>
              {nutrition ? (
                <div className="space-y-6">
                  <div className="rounded-md border border-blue-100 bg-blue-50 p-4">
                    <h3 className="mb-2 font-semibold text-blue-800">General Guidelines</h3>
                    <p className="text-blue-700">{nutrition.generalGuidelines}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-blue-800">Recommended Food Groups</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {nutrition.foodGroups.map((group: any, index: number) => (
                        <div key={index} className="rounded-md border border-blue-100 p-4">
                          <h4 className="mb-2 font-medium text-blue-700">{group.name}</h4>
                          <p className="text-blue-600">{group.description}</p>
                          <ul className="mt-2 list-inside list-disc text-blue-600">
                            {group.examples.map((example: string, i: number) => (
                              <li key={i}>{example}</li>
                            ))}
                          </ul>
                          <p className="mt-2 text-sm font-medium text-blue-700">Recommended serving: {group.serving}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {nutrition.feedingTips && (
                    <div className="rounded-md border border-blue-100 bg-blue-50 p-4">
                      <h3 className="mb-2 font-semibold text-blue-800">Feeding Tips</h3>
                      <ul className="list-inside list-disc space-y-1 text-blue-700">
                        {nutrition.feedingTips.map((tip: string, index: number) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {nutrition.foodsToAvoid && (
                    <div className="rounded-md border border-red-100 bg-red-50 p-4">
                      <h3 className="mb-2 font-semibold text-red-800">Foods to Avoid or Limit</h3>
                      <ul className="list-inside list-disc space-y-1 text-red-700">
                        {nutrition.foodsToAvoid.map((food: string, index: number) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-blue-700">
                  Nutrition information is not available for this age. Please consult with your pediatrician for
                  personalized nutrition advice.
                </p>
              )}

              <div className="mt-6 rounded-md bg-yellow-50 p-4 text-yellow-800">
                <p className="font-semibold">Important Note:</p>
                <p className="mt-1">
                  These are general nutrition guidelines. Your child's specific needs may vary based on their growth,
                  activity level, and health conditions. Always consult with your healthcare provider or a registered
                  dietitian for personalized nutrition advice.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Link href="/">
          <Button variant="outline" className="mx-auto">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
