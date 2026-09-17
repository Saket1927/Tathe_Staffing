import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/contentData';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      badge: "DATA GOVERNANCE",
      body: `TATHE Staffing (operated by ${siteConfig.legalEntity}) is committed to safeguarding personal information collected from clients, job applicants, and apprentices.

1. Information Collection: We collect professional details including resumes, identity credentials (Aadhaar, PAN for statutory compliance), contact records, and educational histories strictly for employment matching, payroll management, and regulatory compliance under the Apprentices Act and Indian Labor Laws.

2. Information Usage: Your data is utilized exclusively for job placement, statutory benefit remittance (PF, ESIC), and client onboarding. We never sell or lease candidate details to third-party marketing entities.

3. Data Security: All candidate and employer records are stored on secure servers with restricted administrative access, SSL encryption, and periodic digital compliance audits.

4. Contact & Inquiries: For privacy inquiries or data update requests, please contact our Compliance Officer at ${siteConfig.contact.email}.`
    },
    terms: {
      title: "Terms & Conditions",
      badge: "STATUTORY GOVERNANCE",
      body: `Welcome to the official digital platform of TATHE Staffing. By accessing or utilizing our staffing and skilling services, you agree to comply with the following terms:

1. Scope of Services: TATHE Staffing provides talent acquisition, third-party payroll outsourcing, skilling, and apprenticeship aggregation (NAPS/NATS/WILP).

2. Candidate Representation: All applicants must provide genuine and verified credentials. Submission of fraudulent records will result in immediate disqualification and reporting to relevant statutory authorities.

3. Employer Engagements: Commercial staffing engagements, service-level agreements (SLAs), and fee structures are governed by specific written master service agreements executed between the client and ${siteConfig.legalEntity}.

4. Jurisdiction: Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Kalyan / Thane, Maharashtra, India.`
    },
    grievance: {
      title: "Grievance Redressal Mechanism",
      badge: "EMPLOYEE & CLIENT WELFARE",
      body: `At TATHE Staffing, we prioritize fair treatment, prompt resolution, and 100% compliance transparency.

1. Grievance Redressal Cell: Any employee, apprentice, or client facing issues related to salary disbursement, statutory compliance (PF, ESIC), workplace conditions, or recruitment coordination may lodge a formal grievance.

2. Resolution Officer:
Designated Grievance Officer: Legal & HR Compliance Team
Address: ${siteConfig.contact.address}
Email: ${siteConfig.contact.email}
Helpline: ${siteConfig.contact.phone1} / ${siteConfig.contact.phone2}

3. SLA for Resolution: All logged grievances are acknowledged within 24 working hours and investigated for formal resolution within 7 business days.`
    }
  }[type] || {
    title: "Legal Information",
    badge: "TATHE STAFFING",
    body: "Please contact connect@tathestaffing.com for legal inquiries."
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
      <div className="bg-[var(--background-card)] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[var(--border-subtle)] text-left text-[var(--text-primary)] p-6 sm:p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[var(--background-hover)] hover:bg-[var(--background-input)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
            {content.badge}
          </span>
          <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mt-1">
            {content.title}
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            {siteConfig.legalEntity}
          </p>
        </div>

        <div className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line border-t border-[var(--border-subtle)] pt-4">
          {content.body}
        </div>

        <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-[var(--button-primary-text)] bg-[var(--button-primary-bg)] rounded-xl hover:opacity-95 transition-all shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
