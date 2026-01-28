import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/stable-collective-logo.png"
                alt="Stable Collective Logo"
                width={156}
                height={156}
                className="rounded-full object-contain shrink-0"
              />
              <h3 className="text-xl font-bold text-primary">Stable Collective</h3>
            </Link>
            <p className="text-muted-foreground text-sm">
              Master the markets and build lasting wealth—Jubilee Scanner, EA Bot, trading programs, psychology blog, and legacy-building strategies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Psychology Blog
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/scanner" className="text-muted-foreground hover:text-primary transition-colors">
                  Jubilee Scanner
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  EA Bot
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-4">
            Educational purposes only. Trading involves risk and results vary. No financial results are guaranteed.
          </p>
          <p className="text-xs text-muted-foreground text-center mb-4">
            © {new Date().getFullYear()} Stable Collective. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground mb-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition-colors">Income Disclaimer</Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition-colors">FTC Risk Disclaimer</Link>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Powered by{" "}
            <a
              href="https://techephi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              Techephi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
