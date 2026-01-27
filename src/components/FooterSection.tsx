import { Brain, ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-bold">
                  <span className="text-foreground">NEXT</span>
                  <span className="gradient-text ml-1">×AI</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Agentic Hyper-Personalization Demo
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.nextdirect.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Visit NEXT
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-border">|</span>
            <span>Powered by Consumer 360° + Agentic AI</span>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            This is a demonstration of hyper-personalization capabilities. 
            Product images and data are illustrative examples.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
