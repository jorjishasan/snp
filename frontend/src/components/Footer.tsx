import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 tracking-wide">SNP</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Exploring Single Nucleotide Polymorphisms & Genomics through
              research, publications, and open-source projects.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Library</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/library/population-genomics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Population Genomics
                </Link>
              </li>
              <li>
                <Link href="/library/human-health" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Human Health
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SNP Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Lab</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/lab/studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Studies
                </Link>
              </li>
              <li>
                <Link href="/lab/github" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our GitHub
                </Link>
              </li>
              <li>
                <Link href="/lab/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} SNP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
