import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  const hasDetail = project.designPhases && project.designPhases.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/#work">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium truncate">{project.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`aspect-square rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl ${project.slug === 'xpadstudio' ? 'bg-white' : 'bg-muted'}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              {project.category && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
                  {project.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{project.title}</h1>
              {project.description && (
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
              )}
              <div className="flex gap-6 text-sm text-muted-foreground">
                {project.client && (
                  <div>
                    <span className="block text-foreground font-semibold">Client</span>
                    {project.client}
                  </div>
                )}
                {project.year && (
                  <div>
                    <span className="block text-foreground font-semibold">Year</span>
                    {project.year}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasDetail && (
        <>
          {/* Challenge & Solution */}
          <section className="py-16 px-6 bg-muted/30">
            <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
              {project.challenge && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          </section>

          {/* Design Process */}
          {project.designPhases && (
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center">Design Process</h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

                  <div className="space-y-12">
                    {project.designPhases.map((phase, index) => (
                      <div
                        key={index}
                        className={`relative flex flex-col md:flex-row ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } items-start gap-8`}
                      >
                        {/* Dot */}
                        <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md z-10 mt-1" />

                        {/* Content */}
                        <div
                          className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                            index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                          }`}
                        >
                          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
                            Phase {index + 1}
                          </span>
                          <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {phase.description}
                          </p>
                        </div>

                        {/* Spacer for opposite side */}
                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Color Palette */}
          {project.colors && (
            <section className="py-16 px-6 bg-muted/30">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-center">Color Palette</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {project.colors.map((color) => (
                    <div key={color.hex} className="text-center group">
                      <div
                        className="w-24 h-24 rounded-2xl shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="font-semibold text-sm">{color.name}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {color.hex}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Mockups */}
          {project.mockups && project.mockups.length > 0 && (
            <section className="py-20 px-6">
              <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-12 text-center">In Context</h2>
                <div className="grid gap-8">
                  {project.mockups.map((mockup, index) => (
                    <div
                      key={index}
                      className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src={mockup}
                        alt={`${project.title} mockup ${index + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Footer CTA */}
      <section className="py-16 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to elevate your brand?</h3>
          <p className="text-muted-foreground mb-8">
            Every great brand starts with a conversation. Let's create something extraordinary together.
          </p>
          <Link to="/#contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
