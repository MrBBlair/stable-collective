import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-4 text-center">Connect</h4>
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

        <div className="pt-6 border-t border-border">
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
