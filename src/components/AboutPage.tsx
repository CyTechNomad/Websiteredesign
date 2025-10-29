import { User, Heart, Code } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="text-xs sm:text-sm text-muted-foreground mb-2 font-mono">
            <span className="text-primary">$</span> cat about.txt
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl glow-amber">
            <span className="text-muted-foreground/50">~/</span>about
          </h1>
        </div>
        
        {/* Who am I section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center items-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-[#00d4ff]/30 to-accent/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300 glow-border scanline">
                <img
                  src="/photos/chowell.jpeg"
                  alt="Christian Howell"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 sm:px-3 py-1 bg-card border border-primary/30 rounded text-xs font-mono text-primary">
                [AUTHENTICATED]
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <h2 className="text-lg sm:text-xl lg:text-2xl glow-text">
                <span className="text-muted-foreground/50">{'function '}</span>
                whoAmI()
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground pl-3 sm:pl-4 border-l-2 border-primary/20">
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="terminal-prompt"></span>
                Hi, I'm Christian. I'm a God fearing: father, husband, eagle scout, and software engineer. 
                I love learning new things and solving problems. I'm always looking for new opportunities to 
                challenge myself.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="terminal-prompt"></span>
                I'm currently working as a software engineer at{' '}
                <a 
                  href="https://firstorion.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:glow-text transition-all duration-300"
                >
                  [First_Orion]
                </a>
                {' '}in my home state of Arkansas. Outside of work, I enjoy spending time with my family and 
                friends, hiking, and playing video games.
              </p>
            </div>
          </div>
        </div>

        {/* Passion for backend section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <h2 className="text-lg sm:text-xl lg:text-2xl glow-orange">
                <span className="text-muted-foreground/50">{'const '}</span>
                passion = "backend"
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground pl-3 sm:pl-4 border-l-2 border-accent/20">
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="terminal-prompt"></span>
                I love everything about what I do, but I'm most passionate about backend development. 
                I enjoy working with APIs, databases, and serverless technologies.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="terminal-prompt"></span>
                I have experience with a variety of technologies including{' '}
                <span className="text-primary">Go</span>,{' '}
                <span className="text-primary">Node.js</span>,{' '}
                <span className="text-primary">Python</span>, and{' '}
                <span className="text-primary">Java</span>. I'm also experienced 
                with docker, kubernetes, and cloud technologies such as AWS.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                <span className="terminal-prompt"></span>
                Creating new services and optimizing existing ones is something I find very rewarding.
              </p>
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/30 to-[#ffd700]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl flex items-center justify-center border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm scanline overflow-hidden">
                <img 
                  src="/images/json_gopher.gif" 
                  alt="Go Gopher using laptop with JSON on screen"
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs text-accent/50 font-mono">
                  {'<GOPHER.lang />'}
                </div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-xs text-primary/50 font-mono">
                  [RUNTIME: GO]
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal-style footer with stats */}
        <div className="mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 bg-card/30 border border-primary/20 rounded font-mono text-xs sm:text-sm space-y-2">
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> cat /proc/developer/stats
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">Location:</span>
              <span className="text-primary">Arkansas, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Status:</span>
              <span className="text-primary">{'{ coding: true }'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Role:</span>
              <span className="text-primary">Software_Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
