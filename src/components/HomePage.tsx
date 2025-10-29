import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Code2, Zap, Box } from 'lucide-react';

export function HomePage() {
  const skills = [
    'Source Control',
    'CI/CD',
    'Infrastructure as Code',
    'Go',
    'Rust',
    'Powershell',
  ];

  const projects = [
    {
      title: 'chowell.dev',
      description: 'This very site. A static site built with Astro.',
      logo: '/icons/Astro.svg',
      color: 'text-[#00d4ff]',
      url: 'https://github.com/CyTechNomad/chowell.dev',
    },
    {
      title: 'RolleR',
      description: 'A simple, yet powerful, dice roller in your terminal written in Rust.',
      logo: '/icons/ferris.svg',
      color: 'text-[#ff00ff]',
      url: 'https://github.com/CyTechNomad/RolleR',
    },
  ];

  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 relative z-10">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-20">
        <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-6 w-full">
          <div className="inline-block">
            <div className="text-xs sm:text-sm text-muted-foreground mb-2 font-mono">
              <span className="text-primary">$</span> whoami
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-4 glow-amber leading-tight">
              Christian C. Howell
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="text-muted-foreground text-sm sm:text-base">[</span>
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span className="text-accent glow-orange text-sm sm:text-base lg:text-lg">Software Engineer</span>
              <span className="text-muted-foreground text-sm sm:text-base">]</span>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#00d4ff]/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative w-full h-full border-2 border-primary/30 rounded-lg flex items-center justify-center bg-card/50 backdrop-blur-sm group-hover:border-primary/50 transition-all duration-300 scanline overflow-hidden">
              <img 
                src="/images/pixel_developer.png" 
                alt="Pixel art of a developer working at a computer"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute top-2 left-2 text-xs text-primary/50 font-mono">
                [AVATAR.exe]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column - Skills, Experience, Education */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Skills */}
          <div className="relative">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Box className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl">
                <span className="text-muted-foreground/50">~/</span>
                <span className="glow-text">skills</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline"
                  className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:glow-border text-xs sm:text-sm"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="text-muted-foreground mr-1">{'{'}</span>
                  {skill}
                  <span className="text-muted-foreground ml-1">{'}'}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="relative">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl">
                <span className="text-muted-foreground/50">~/</span>
                <span className="glow-orange">experience</span>
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 border-l-2 border-primary/20 pl-3 sm:pl-4">
              <div className="relative">
                <div className="absolute -left-[0.6875rem] sm:-left-[0.875rem] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary glow-border"></div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <span className="text-primary terminal-prompt"></span>
                  3+ Years Software Development at First Orion
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[0.6875rem] sm:-left-[0.875rem] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/50"></div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <span className="text-primary terminal-prompt"></span>
                  2 Years IT support at University of Arkansas Community College at Morrilton
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd700] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl">
                <span className="text-muted-foreground/50">~/</span>
                <span className="glow-gold">education</span>
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 border-l-2 border-[#ffd700]/20 pl-3 sm:pl-4">
              <div className="relative">
                <div className="absolute -left-[0.6875rem] sm:-left-[0.875rem] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffd700] glow-border"></div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <span className="text-[#ffd700] terminal-prompt"></span>
                  Apprenticeship focused in software development hosted by First Orion
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[0.6875rem] sm:-left-[0.875rem] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffd700]/50"></div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <span className="text-[#ffd700] terminal-prompt"></span>
                  AS in Computer Information Systems and Technology from University of Arkansas Community College at Morrilton
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Projects */}
        <div>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl">
              <span className="text-muted-foreground/50">~/</span>
              <span className="glow-text">projects</span>
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {projects.map((project) => (
              <a 
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card 
                  className="group relative bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-border overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative p-4 sm:p-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={project.logo} 
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="flex items-center gap-1.5 sm:gap-2 group-hover:glow-text transition-all duration-300 text-base sm:text-lg">
                          <span className="text-muted-foreground/50 text-xs sm:text-sm">{'['}</span>
                          <span className="truncate">{project.title}</span>
                          <span className="text-muted-foreground/50 text-xs sm:text-sm">{']'}</span>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary flex-shrink-0" />
                        </CardTitle>
                        <CardDescription className="mt-1.5 sm:mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          <span className="terminal-prompt"></span>
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
