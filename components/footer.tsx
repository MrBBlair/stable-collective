import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Stable Collective</h3>
            <p className="text-muted-foreground text-sm">
              Master the Markets with Psychology, Strategy, and Legacy Building.
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
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Stable Collective. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            <strong>Disclaimer:</strong> Trading involves substantial risk of loss and is not suitable for every investor.
            Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
