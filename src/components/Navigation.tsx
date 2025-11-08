import { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Linkedin, Github, Terminal, Sun, Moon, Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: "home" | "blog" | "about";
  setCurrentPage: (page: "home" | "blog" | "about") => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export function Navigation({
  currentPage,
  setCurrentPage,
  theme,
  toggleTheme,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (page: "home" | "blog" | "about") => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-primary/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => handlePageChange("home")}
            className="flex items-center gap-1.5 sm:gap-2 group"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary glow-amber" />
            <span className="tracking-tight group-hover:glow-text transition-all duration-300">
              <span className="text-muted-foreground hidden sm:inline">[</span>
              <span className="text-primary">CHowell.Dev</span>
              <span className="text-muted-foreground hidden sm:inline">]</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => setCurrentPage("blog")}
              className={`relative transition-all duration-300 ${
                currentPage === "blog"
                  ? "text-primary glow-text"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <span className="text-muted-foreground/50">~/</span>blog
              {currentPage === "blog" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary glow-border"></span>
              )}
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`relative transition-all duration-300 ${
                currentPage === "about"
                  ? "text-primary glow-text"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <span className="text-muted-foreground/50">~/</span>about
              {currentPage === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary glow-border"></span>
              )}
            </button>

            <div className="flex items-center gap-2 ml-2 border-l border-primary/20 pl-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:glow-border"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:glow-border"
              >
                <a
                  href="https://www.linkedin.com/in/christian-howell-b025571a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:glow-border"
              >
                <a
                  href="https://github.com/CyTechNomad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 h-8 w-8"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300"
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
                    <button
                      onClick={() => handlePageChange("home")}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border-2 ${
                        currentPage === "home"
                          ? "border-primary/50 bg-primary/10 text-primary glow-border"
                          : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5" />
                        <span className="font-mono">
                          <span className="text-muted-foreground/50">~/</span>
                          home
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => handlePageChange("blog")}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border-2 ${
                        currentPage === "blog"
                          ? "border-primary/50 bg-primary/10 text-primary glow-border"
                          : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5" />
                        <span className="font-mono">
                          <span className="text-muted-foreground/50">~/</span>
                          blog
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => handlePageChange("about")}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border-2 ${
                        currentPage === "about"
                          ? "border-primary/50 bg-primary/10 text-primary glow-border"
                          : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5" />
                        <span className="font-mono">
                          <span className="text-muted-foreground/50">~/</span>
                          about
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-primary/20 pt-6">
                    <div className="text-xs text-muted-foreground font-mono mb-4 pl-1">
                      <span className="text-primary">$</span> cd /social
                    </div>
                    <div className="flex gap-3 pl-1">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        <a
                          href="https://linkedin.com/in/christianhowell"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        <a
                          href="https://github.com/chowell"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
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
