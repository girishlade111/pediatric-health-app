"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  age: z.coerce.number().min(0, "Age must be at least 0").max(18, "Age must be 18 or less"),
  ageUnit: z.enum(["months", "years"]),
})

type FormValues = z.infer<typeof formSchema>

export default function AgeForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "" as unknown as number, // Initialize with empty string but type as number for zod
      ageUnit: "years",
    },
  })

  function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    // Convert age to months for consistent handling
    const ageInMonths = values.ageUnit === "years" ? values.age * 12 : values.age

    // Navigate to results page with age parameter
    router.push(`/results?ageInMonths=${ageInMonths}`)
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Enter Your Child's Age</CardTitle>
          <CardDescription>
            We'll provide personalized vaccine and nutrition recommendations based on your child's age.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter age"
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) => {
                          const value = e.target.value === "" ? 0 : Number.parseInt(e.target.value, 10)
                          field.onChange(value)
                        }}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormDescription>Enter your child's age (0-18)</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ageUnit"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Age Unit</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="months" />
                          </FormControl>
                          <FormLabel className="font-normal">Months</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="years" />
                          </FormControl>
                          <FormLabel className="font-normal">Years</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Get Recommendations"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
