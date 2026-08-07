import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Github, Linkedin, Menu, Moon, Sun, Terminal } from "lucide-react";

interface NavigationProps {
  currentPath?: string;
}

const navLinks = [
  { href: "/", label: "home", mobileOnly: true },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/christian-c-howell", label: "LinkedIn" },
  { href: "https://github.com/CyTechNomad", label: "GitHub" },
];

export function Navigation({ currentPath = "/" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Read the theme applied by the inline script in BaseLayout
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  // Normalise trailing slashes for comparison
  const activePath = currentPath.replace(/\/$/, "") || "/";

  return (
    <nav className="border-b border-primary/20 bg-card/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none">
      </div>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group"
          >
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-primary glow-amber" />
            <span className="tracking-tight group-hover:glow-text transition-all duration-300 text-base sm:text-lg">
              <span className="text-muted-foreground hidden sm:inline">[</span>
              <span className="text-primary">CHowell.Dev</span>
              <span className="text-muted-foreground hidden sm:inline">]</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.filter(link => !link.mobileOnly).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-300 text-base ${
                  activePath === link.href
                    ? "text-primary glow-text"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="text-muted-foreground/50">~/</span>{link.label}
                {activePath === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary glow-border">
                  </span>
                )}
              </a>
            ))}

            <div className="flex items-center gap-3 ml-3 border-l border-primary/20 pl-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:glow-border h-10 w-10"
                    aria-label={`Switch to ${
                      theme === "dark" ? "light" : "dark"
                    } mode`}
                  >
                    {theme === "dark"
                      ? <Sun className="w-5 h-5" />
                      : <Moon className="w-5 h-5" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </TooltipContent>
              </Tooltip>
              {socialLinks.map((link) => (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:glow-border"
                    >
                      {link.label === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                      {link.label === "GitHub" && <Github className="w-5 h-5" />}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{link.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 h-9 w-9"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark"
                ? <Sun className="w-5 h-5" />
                : <Moon className="w-5 h-5" />}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[350px] bg-background border-primary/20"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the site
                </SheetDescription>
                <div className="flex flex-col gap-6 mt-8 px-2">
                  {/* Terminal Header */}
                  <div className="border-b border-primary/20 pb-4">
                    <div className="text-xs text-muted-foreground font-mono mb-2 pl-1">
                      <span className="text-primary">$</span> ls -la /nav
                    </div>
                    <div className="text-sm text-muted-foreground font-mono pl-1">
                      drwxr-xr-x navigation/
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`w-full block px-4 py-3 rounded-lg transition-all duration-300 border-2 ${
                          activePath === link.href
                            ? "border-primary/50 bg-primary/10 text-primary glow-border"
                            : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Terminal className="w-5 h-5" />
                          <span className="font-mono">
                            <span className="text-muted-foreground/50">~/</span>
                            {link.label}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-primary/20 pt-6">
                    <div className="text-xs text-muted-foreground font-mono mb-4 pl-1">
                      <span className="text-primary">$</span> cd /social
                    </div>
                    <div className="flex gap-3 pl-1">
                      {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        >
                          {link.label === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                          {link.label === "GitHub" && <Github className="w-5 h-5" />}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Footer */}
                  <div className="mt-auto pt-6 border-t border-primary/20">
                    <div className="text-xs text-muted-foreground font-mono pl-1">
                      <span className="text-primary">$</span> echo $STATUS
                    </div>
                    <div className="text-xs text-primary font-mono mt-1 pl-1">
                      [READY] <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
