import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, Calendar } from 'lucide-react';

export function BlogPage() {
  const posts = [
    {
      title: 'The Importance of Input Sanitization: Safeguarding Your Application',
      description: 'Learn about the importance of input sanitization in web development and how it can help safeguard your application from security threats.',
      date: '2024-05-20',
      tags: ['Security', 'Developer Tips', 'Web Development'],
    },
  ];

  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 relative z-10">
      <div className="max-w-4xl">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="text-xs sm:text-sm text-muted-foreground mb-2 font-mono">
            <span className="text-primary">$</span> cat blog/
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl glow-amber">
            <span className="text-muted-foreground/50">~/</span>blog
          </h1>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
            <span className="terminal-prompt"></span>
            Thoughts, tutorials, and insights on software development
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {posts.map((post, index) => (
            <Card 
              key={post.title} 
              className="group relative bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-border cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 text-xs sm:text-sm text-muted-foreground">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-mono">post_{index + 1}.md</span>
                    </div>
                    <CardTitle className="text-base sm:text-lg lg:text-xl mb-2 group-hover:glow-text transition-all duration-300 leading-tight">
                      <span className="text-muted-foreground/50">{'# '}</span>
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <span className="terminal-prompt"></span>
                      {post.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative p-4 sm:p-6 pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-xs"
                      >
                        <span className="text-muted-foreground mr-1">#</span>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-mono">{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 bg-card/30 border border-primary/20 rounded font-mono text-xs sm:text-sm">
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> echo "More posts coming soon..."
          </div>
          <div className="text-primary mt-1 animate-pulse">_</div>
        </div>
      </div>
    </div>
  );
}
