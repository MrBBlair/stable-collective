import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DR_KATHY_URL = "https://ibuildlegacies.com/";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen trading-bg">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/stable-collective-logo.png"
            alt="Stable Collective"
            width={216}
            height={216}
            className="mx-auto mb-6 rounded-full object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading Programs & Mentorships</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Comprehensive courses and mentorships to help you master the markets and build lasting wealth.
          </p>

          <div className="max-w-xl">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Dr. Kathy Kirkland&apos;s Mentorship</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Learn the ECC11 approach to market structure and timing directly from Dr. Kathy Kirkland—focused on helping traders build skill, discipline, and clarity.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <a href={DR_KATHY_URL} target="_blank" rel="noopener noreferrer">
                    Learn more about Dr. Kathy
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Enrollment and full details are hosted on Dr. Kathy&apos;s official site.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
