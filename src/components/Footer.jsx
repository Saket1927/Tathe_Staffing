import React from 'react';
import { 
  Phone, Mail, MapPin, Instagram, Linkedin, Facebook, 
  MessageCircle, ArrowRight 
} from 'lucide-react';
import { siteConfig } from '../data/contentData';

export default function Footer({ onOpenHireModal, onOpenJobModal, onOpenLegalModal }) {
  return (
    <footer className="bg-[var(--background-tertiary)] text-[var(--text-muted)] border-t border-[var(--border)] pt-20 pb-14">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[var(--border)] text-left">
          
          {/* Brand Column (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3.5">
              <img 
                src="/assets/tathe-symbol.png" 
                alt="TATHE Staffing Logo" 
                className="h-11 w-11 object-contain"
              />
              <div className="text-left flex flex-col justify-center">
                <div className="flex items-baseline">
                  <span className="font-heading font-extrabold text-[var(--logo-text)] text-2xl tracking-tight leading-none">
                    TATHE Staffing
                  </span>
                  <span className="text-[var(--logo-text)] text-xs font-medium ml-0.5 relative -top-1.5">™</span>
                </div>
                <span className="text-[9.5px] text-[var(--logo-tagline)] tracking-[0.2em] uppercase font-semibold mt-1 leading-none">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              India’s premier AI-powered business services and skilling provider, delivering end-to-end recruitment, third-party payroll, and apprenticeship programs.
            </p>

            <div className="text-xs text-[var(--text-muted)] pt-1">
              A business initiative of <strong className="text-[var(--text-primary)] font-semibold">{siteConfig.legalEntity}</strong>.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/tathe-staffing/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--background-card)] hover:bg-[var(--accent-primary)] hover:text-[var(--button-primary-text)] text-[var(--text-secondary)] border border-[var(--border)] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/tathestaffing/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--background-card)] hover:bg-[var(--accent-primary)] hover:text-[var(--button-primary-text)] text-[var(--text-secondary)] border border-[var(--border)] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=919653659137&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--background-card)] hover:bg-[var(--accent-primary)] hover:text-[var(--button-primary-text)] text-[var(--text-secondary)] border border-[var(--border)] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574924443587" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--background-card)] hover:bg-[var(--accent-primary)] hover:text-[var(--button-primary-text)] text-[var(--text-secondary)] border border-[var(--border)] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Staffing Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#staffing" className="hover:text-[var(--accent-primary)] transition-colors">Professional Staffing</a></li>
              <li><a href="#staffing" className="hover:text-[var(--accent-primary)] transition-colors">Outsourcing Services</a></li>
              <li><a href="#staffing" className="hover:text-[var(--accent-primary)] transition-colors">Contract Staffing</a></li>
              <li><a href="#staffing" className="hover:text-[var(--accent-primary)] transition-colors">Third-Party Payroll</a></li>
              <li><a href="#staffing" className="hover:text-[var(--accent-primary)] transition-colors">Hire Train Deploy (HTD)</a></li>
              <li><a href="#staffing" className="hover:text-[var(--accent-primary)] transition-colors">Employee Lifecycle Management</a></li>
              <li><a href="#sourcing" className="hover:text-[var(--accent-primary)] transition-colors font-medium text-[var(--accent-primary)]">Sourcing & Recruitment</a></li>
              <li><a href="#hr-consulting" className="hover:text-[var(--accent-primary)] transition-colors">HR Consulting & Advisory</a></li>
            </ul>
          </div>

          {/* Skilling & Portals Column (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Skilling & Portals
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#apprenticeship" className="hover:text-[var(--accent-primary)] transition-colors">NAPS Program</a></li>
              <li><a href="#apprenticeship" className="hover:text-[var(--accent-primary)] transition-colors">NATS Scheme</a></li>
              <li><a href="#apprenticeship" className="hover:text-[var(--accent-primary)] transition-colors">WILP / Learn & Earn</a></li>
              <li><a href="#skill-development" className="hover:text-[var(--accent-primary)] transition-colors">Skill Development</a></li>
              <li className="pt-2">
                <button 
                  onClick={onOpenJobModal}
                  className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-semibold flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Want a Job</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                </button>
              </li>
              <li>
                <a href={siteConfig.contact.blogUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors">
                  Blogs & News
                </a>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-[var(--accent-primary)] transition-colors focus:outline-none">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('terms')} className="hover:text-[var(--accent-primary)] transition-colors focus:outline-none">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('grievance')} className="hover:text-[var(--accent-primary)] transition-colors focus:outline-none">
                  Grievance Redressal
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <span>
                  501, Varna Co-operative Soc, Besides Heena Garden, Behind Mumbai University, Khadak Pada, Kalyan (W), Maharashtra - 421301
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${siteConfig.contact.phone1}`} className="hover:text-[var(--accent-primary)]">{siteConfig.contact.phone1}</a>
                  <span>/</span>
                  <a href={`tel:${siteConfig.contact.phone2}`} className="hover:text-[var(--accent-primary)]">{siteConfig.contact.phone2}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--accent-primary)]">{siteConfig.contact.email}</a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenHireModal}
                className="w-full py-3 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl transition-colors shadow-md focus:outline-none"
              >
                Hire Talent Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} <strong className="text-[var(--text-primary)] font-semibold">{siteConfig.legalEntity}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>PEOPLE. PROGRESS. PROSPERITY.</span>
            <span>•</span>
            <span>100% Statutory Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
