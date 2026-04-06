import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Shakshar</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Your centralized learning hub for Sathaye College. Share knowledge, collaborate, and excel together.
            </p>
          </div>

          <div>
            <span className="font-semibold text-sm mb-4 block">Quick links</span>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <span className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>

          <div>
            <span className="font-semibold text-sm mb-4 block">Contact</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>Sathaye College, Mumbai</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@shakshar.edu</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+91 22 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2026 Shakshar - Sathaye College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
