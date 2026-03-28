import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WaitlistSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("waitlist_signups")
        .insert({ email: email.trim() });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already on the list!",
            description: "This email is already signed up. We'll be in touch soon.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "You're on the list! 🎉",
          description: "We'll notify you when we launch. Stay tuned!",
        });
      }
      setEmail("");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-xl text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Coming Soon
          </span>
        </div>
        <h3 className="text-4xl font-bold mb-4">Join the Waitlist</h3>
        <p className="text-lg text-muted-foreground mb-8">
          Be the first to know when new projects and services drop. No spam, just updates.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting} className="shrink-0">
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Join"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSection;
