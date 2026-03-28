import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { portfolioItems } from "@/data/projects";
import WaitlistSection from "@/components/WaitlistSection";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AR Design Studio
          </h1>
          <div className="flex gap-8 items-center">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              <Button variant="default" size="sm">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-8">
              Logo Design Specialist
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Timeless{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Brand Identities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Where artistic vision meets geometric precision. Creating memorable
            logos that tell your brand's story.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#work" onClick={(e) => scrollToSection(e, "work")}>
              <Button size="lg" className="group">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Selected Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Link key={item.id} to={`/project/${item.slug}`}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
                  <div className={`relative aspect-square overflow-hidden ${['xpadstudio', 'nume'].includes(item.slug) ? 'bg-white' : 'bg-muted'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out ${
                        item.slug === 'nume' ? 'object-contain p-6' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Logo Design Excellence</h3>
            <p className="text-xl text-muted-foreground">
              Specializing in creating distinctive logos that blend artistic
              creativity with geometric precision
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-primary rounded-full"></div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Brand Identity</h4>
              <p className="text-muted-foreground">
                Creating logos that capture your brand's essence and values
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-secondary rotate-45"></div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Artistic Approach</h4>
              <p className="text-muted-foreground">
                Combining organic creativity with structured geometric design
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-4 border-accent rounded"></div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Timeless Design</h4>
              <p className="text-muted-foreground">
                Building visual identities that stand the test of time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Let's Create Together</h3>
            <p className="text-xl text-muted-foreground">
              Ready to bring your brand vision to life? Get in touch to discuss
              your logo design project.
            </p>
          </div>

          <Card className="p-8 border-border/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 AR Design Studio. Crafting memorable brand identities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
