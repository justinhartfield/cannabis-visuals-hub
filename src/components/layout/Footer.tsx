
import { Link } from "react-router-dom";
import { Leaf, Twitter, Instagram, Github, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Gallery",
      links: [
        { name: "Featured Images", url: "/gallery" },
        { name: "Categories", url: "/gallery/categories" },
        { name: "Latest Uploads", url: "/gallery/latest" },
        { name: "Popular", url: "/gallery/popular" },
      ],
    },
    {
      title: "API",
      links: [
        { name: "Documentation", url: "/api-docs" },
        { name: "Endpoints", url: "/api-docs#endpoints" },
        { name: "Rate Limits", url: "/api-docs#rate-limits" },
        { name: "Authentication", url: "/api-docs#authentication" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Pricing", url: "/pricing" },
        { name: "Contact", url: "/contact" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="mt-20 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-cannabis-500" />
              <span className="text-xl font-bold text-white text-glow">CannaVisuals</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              The premier cannabis image repository and API platform for developers and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-cannabis-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cannabis-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cannabis-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cannabis-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-muted-foreground text-sm hover:text-cannabis-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} CannaVisuals. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-cannabis-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-cannabis-400 transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-cannabis-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
