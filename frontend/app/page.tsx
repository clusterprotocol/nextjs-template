"use client";

import { ArrowRight, Code2, Cpu, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Build Something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              Amazing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Create stunning web applications with modern tools and frameworks.
            Start building your next big idea today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <Code2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Modern Development</h3>
            <p className="text-muted-foreground">
              Built with Next.js 13, TypeScript, and Tailwind CSS for a modern development experience.
            </p>
          </Card>
          <Card className="p-6">
            <Layers className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Component Library</h3>
            <p className="text-muted-foreground">
              Beautifully designed components powered by shadcn/ui and Radix UI primitives.
            </p>
          </Card>
          <Card className="p-6">
            <Cpu className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Performance First</h3>
            <p className="text-muted-foreground">
              Optimized for performance with server components and static site generation.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
