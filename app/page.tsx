import { Stethoscope } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-800">KidCare</h1>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="text-blue-700 hover:text-blue-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-700 hover:text-blue-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-700 hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-blue-800">Pediatric Healthcare Guide</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-700">
              Get personalized vaccine recommendations and nutrition guidance based on your child's age.
            </p>
            <div className="flex justify-center">
              <Link href="/age-form">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Vaccine Recommendations</CardTitle>
                <CardDescription>Age-appropriate vaccine schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our app provides up-to-date vaccine recommendations based on your child's age, following the latest
                  pediatric guidelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Nutrition Guidance</CardTitle>
                <CardDescription>Healthy eating for every stage</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Get detailed nutrition charts and dietary recommendations tailored to your child's developmental
                  stage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700">Growth Tracking</CardTitle>
                <CardDescription>Monitor your child's development</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Track your child's growth and development milestones with our easy-to-understand charts and guidance.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="about" className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-blue-800">About Our App</h2>
            <p className="mb-4 text-blue-700">
              KidCare is designed by pediatric healthcare professionals to provide parents with reliable, evidence-based
              information about their child's health needs. Our recommendations follow the latest guidelines from
              pediatric health organizations.
            </p>
            <p className="text-blue-700">
              Please note that while our app provides general guidance, it should not replace professional medical
              advice. Always consult with your pediatrician for personalized healthcare recommendations.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-blue-800">Contact Us</h2>
            <p className="text-blue-700">
              Have questions or feedback? Reach out to our team at{" "}
              <a href="mailto:support@kidcare.example.com" className="underline">
                support@kidcare.example.com
              </a>
            </p>
          </section>
        </main>

        <footer className="mt-12 border-t border-blue-200 pt-6 text-center text-blue-600">
          <p>© {new Date().getFullYear()} KidCare. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Disclaimer: This app provides general guidance and should not replace professional medical advice.
          </p>
        </footer>
      </div>
    </div>
  )
}
