"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, MessageCircle } from "lucide-react";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "facebook", // facebook or discord
    experience: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend/API
    // For now, we'll just show a success message
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // In production, you would send this to your API:
    // await fetch('/api/join-community', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen trading-bg flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/stable-collective-logo.png"
                alt="Stable Collective"
                width={240}
                height={240}
                className="rounded-full object-contain"
              />
            </div>
            <CardTitle className="text-2xl">Thank You!</CardTitle>
            <CardDescription className="text-base">
              Your information has been received successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              We&apos;ll review your submission and send you an invitation to join our community on{" "}
              {formData.platform === "facebook" ? "Facebook" : "Discord"} within 24-48 hours.
            </p>
            <p className="text-sm text-muted-foreground">
              Check your email ({formData.email}) for updates and next steps.
            </p>
            <Button asChild className="w-full mt-6">
              <a href="/">Return to Home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen trading-bg">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Image
              src="/stable-collective-logo.png"
              alt="Stable Collective"
              width={264}
              height={264}
              className="mx-auto mb-6 rounded-full object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Community</h1>
            <p className="text-xl text-muted-foreground">
              Get access to exclusive trading resources, live sessions, and connect with fellow traders
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Community Application</CardTitle>
              <CardDescription>
                Fill out the form below to request access to our private Facebook group or Discord channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="platform">Preferred Platform *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="platform"
                        value="facebook"
                        checked={formData.platform === "facebook"}
                        onChange={handleChange}
                        className="peer sr-only"
                        required
                      />
                      <div className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/10">
                        <Facebook className="h-6 w-6 text-primary" />
                        <span className="font-semibold">Facebook</span>
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="platform"
                        value="discord"
                        checked={formData.platform === "discord"}
                        onChange={handleChange}
                        className="peer sr-only"
                        required
                      />
                      <div className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/10">
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <span className="font-semibold">Discord</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Trading Experience Level</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner - Just starting out</option>
                    <option value="intermediate">Intermediate - Some trading experience</option>
                    <option value="advanced">Advanced - Experienced trader</option>
                    <option value="professional">Professional - Trading professionally</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Stable Collective.
                  We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
