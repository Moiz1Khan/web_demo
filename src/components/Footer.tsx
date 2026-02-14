import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

const companyLinks = [
  { href: "#", label: "About Us" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Guides" },
];

const resourceLinks = [
  { href: "#calculator", label: "Mortgages" },
  { href: "#rates", label: "Rates" },
  { href: "#calculator", label: "Mortgage Calculator" },
  { href: "#contact", label: "Get Quote" },
];

const socialLinks = [
  { name: "facebook", href: "#", icon: Facebook },
  { name: "youtube", href: "#", icon: Youtube },
  { name: "twitter", href: "#", icon: Twitter },
  { name: "instagram", href: "#", icon: Instagram },
  { name: "linkedin", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold">
              NexHome
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Your Home Buying Platform
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={name}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            NexHome © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
