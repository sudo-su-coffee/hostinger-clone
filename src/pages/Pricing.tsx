import { ArrowRight, Check, ChevronRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Footer, Header } from "./Home";

const categories = [
  { label: "Websites", href: "#plan-selector", active: true },
  { label: "Ecommerce", href: "https://www.hostinger.com/pricing/ecommerce#plan-selector" },
  { label: "Domains", href: "https://www.hostinger.com/pricing/domains" },
  { label: "AI Builder", href: "https://www.hostinger.com/pricing/ai-builder#plan-selector" },
  { label: "VPS hosting", href: "https://www.hostinger.com/pricing/vps-hosting#plan-selector" },
  { label: "AI agents & automation", href: "https://www.hostinger.com/pricing/ai-automations#plan-selector" },
  { label: "Business email", href: "https://www.hostinger.com/pricing/email-hosting#plan-selector" },
  { label: "Email marketing", href: "https://www.hostinger.com/pricing/email-marketing#plan-selector" },
];

const plans = [
  {
    name: "Premium",
    badge: "75% off",
    description: "Run websites smoothly. Great for creators and small brands.",
    old: "$11.99",
    price: "$2.99",
    total: "$143.52 for 48 months · regular price $575.52",
    renewal: "Renews at $10.99/mo.",
    features: ["3 websites", "Free domain for 1 year", "20 GB SSD storage", "Free weekly backups", "Ecommerce available", "CDN and AI tools", "Priority 24/7 expert support"],
    build: ["AI Builder — 5 credits", "WordPress and Node.js", "2 mailboxes per website for 1 year"],
  },
  {
    name: "Unlimited",
    badge: "Special offer · 79% off",
    description: "Unlimited websites and mailboxes, plus AI tools and priority support.",
    old: "$18.99",
    price: "$3.99",
    total: "$191.52 for 48 months · regular price $911.52",
    renewal: "Renews at $16.99/mo.",
    features: ["Unlimited websites", "Free domain for 1 year", "50 GB NVMe storage", "Daily backups and easy restore", "CDN and ecommerce included", "AI tools", "Priority 24/7 expert support"],
    build: ["AI Builder — 15 credits", "WordPress and Node.js", "Unlimited mailboxes per website for 1 year"],
    featured: true,
  },
  {
    name: "Cloud Startup",
    badge: "71% off",
    description: "Dedicated power for agencies or high-traffic projects.",
    old: "$27.99",
    price: "$7.99",
    total: "$383.52 for 48 months · regular price $1,343.52",
    renewal: "Renews at $25.99/mo.",
    features: ["Unlimited websites", "Free domain for 1 year", "100 GB NVMe storage", "Daily and on-demand backups", "CDN and ecommerce included", "AI tools", "Priority 24/7 expert support"],
    build: ["AI Builder — 15 credits", "WordPress and Node.js", "Unlimited mailboxes per website for 1 year"],
  },
];

const comparisons = [
  ["Websites", "3", "Unlimited", "Unlimited"],
  ["NVMe / SSD storage", "20 GB SSD", "50 GB NVMe", "100 GB NVMe"],
  ["Backups", "Weekly", "Daily", "Daily + on demand"],
  ["AI Builder credits", "5", "15", "15"],
  ["Mailboxes per website", "2 for 1 year", "Unlimited for 1 year", "Unlimited for 1 year"],
  ["PHP workers", "40", "60", "100"],
  ["Databases", "10", "150", "300"],
  ["Database size", "3 GB", "3 GB", "6 GB"],
  ["RAM", "2 GB", "3 GB", "4 GB"],
  ["CPU cores", "1", "2", "4"],
  ["Free domain for 1 year", "Included", "Included", "Included"],
  ["CDN and SSL", "Included", "Included", "Included"],
];

const included = [
  "SSH & WP-CLI for faster site management",
  "SFTP account management for secure team access",
  "PHP version management",
  "Free safe staging environments",
  "1-click website cloning",
  "Redirects Manager for SEO",
  "Cron jobs and scheduled tasks",
  "Malware scanning",
  "Unlimited collaborators",
];

const questions = [
  ["How do I choose a plan?", "Premium suits a first site or small brand. Unlimited adds room for multiple sites and mailboxes. Cloud Startup offers more storage and compute for busier projects."],
  ["What does the advertised monthly price mean?", "The displayed monthly figure divides the upfront total for the selected 48-month term by the number of months. The full term is paid upfront."],
  ["What happens when the first term ends?", "Each plan has a separate renewal rate. Review the renewal amount shown on the plan card and the official checkout before ordering."],
  ["Are unlimited features subject to limits?", "Some unlimited features are subject to Hostinger’s Fair Usage Policy. Read the official policy for the current terms."],
  ["Can I cancel my plan?", "The reference page advertises a 30-day money-back guarantee and cancellation flexibility. Review the latest official terms for eligibility and conditions."],
];

export default function Pricing() {
  return (
    <main className="pricing-page">
      <section className="hero-shell pricing-hero-shell" id="top">
        <Header pricingPage />
        <div className="pricing-page-intro">
          <div className="pricing-breadcrumb"><a href="/">Home</a><ChevronRight size={14} /><span>Plans & pricing</span></div>
          <p className="pricing-kicker"><Sparkles size={14} /> HOSTING THAT GROWS WITH YOU</p>
          <h1>Plans & pricing</h1>
          <p className="pricing-hero-copy">Choose a plan for your next idea, your growing business, or the projects you manage every day.</p>
          <div className="pricing-assurances"><span><ShieldCheck size={16} /> 30-day money-back guarantee</span><span><Check size={16} /> Cancel anytime</span><span><Zap size={16} /> 24/7 support</span></div>
        </div>
      </section>

      <section className="pricing-main" id="plan-selector">
        <div className="container">
          <div className="pricing-categories" aria-label="Browse plan categories">
            {categories.map((category) => category.active ? (
              <a className="pricing-category active" href={category.href} key={category.label} aria-current="page">{category.label}</a>
            ) : (
              <a className="pricing-category" href={category.href} key={category.label} target="_blank" rel="noreferrer">{category.label}<ChevronRight size={13} /></a>
            ))}
          </div>
          <div className="pricing-includes">
            <span className="pricing-includes-title">All plans include</span>
            <span><Check size={15} /> Reliable hosting</span>
            <span><Check size={15} /> Custom domain</span>
            <span><Check size={15} /> Email</span>
            <span><Check size={15} /> Building tools</span>
          </div>
          <div className="pricing-term-row"><span className="term-label">Web hosting</span><span className="term-pill">48 months plan <ChevronRight size={14} /></span><span className="term-note">Prices shown in USD, before VAT</span></div>
          <div className="plan-grid pricing-page-grid">
            {plans.map((plan) => (
              <article className={`plan-card ${plan.featured ? "plan-featured" : ""}`} key={plan.name}>
                <div className="plan-card-top"><span className="discount-badge">{plan.badge}</span><h3>{plan.name}</h3><p>{plan.description}</p></div>
                <div className="plan-price"><span className="old-price">{plan.old}</span><div><strong>{plan.price}</strong><span>/mo</span></div></div>
                <a className={`button ${plan.featured ? "button-purple" : "button-outline"}`} href="https://www.hostinger.com/pricing#plan-selector" target="_blank" rel="noreferrer">Choose plan <ArrowRight size={16} /></a>
                <p className="plan-term"><strong>{plan.total}</strong><br />{plan.renewal}</p>
                <div className="plan-feature-list">{plan.features.map((feature) => <span key={feature}><Check size={16} />{feature}</span>)}</div>
                <div className="plan-build"><b>Build with</b>{plan.build.map((feature) => <span key={feature}>{feature}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="pricing-legal">All plans are paid upfront. Monthly rates divide the total term price by its length. Unlimited features are subject to the Fair Usage Policy. Offers and renewal prices can vary by location and may change; verify current details on Hostinger’s official checkout.</p>
        </div>
      </section>

      <section className="pricing-compare section" id="compare-table">
        <div className="container">
          <div className="section-heading"><div className="eyebrow">Compare plans</div><h2>See what fits your next step</h2><p>Compare the details that matter before you choose.</p></div>
          <div className="comparison-wrap"><table className="comparison-table"><thead><tr><th>Top features</th><th>Premium</th><th className="popular-col">Unlimited <span>Popular</span></th><th>Cloud Startup</th></tr></thead><tbody>{comparisons.map(([label, premium, unlimited, cloud]) => <tr key={label}><th scope="row">{label}</th><td>{premium}</td><td className="popular-col">{unlimited}</td><td>{cloud}</td></tr>)}</tbody></table></div>
          <a className="text-link compare-cta" href="https://www.hostinger.com/pricing#compare-table" target="_blank" rel="noreferrer">View the full official comparison <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="included-section section">
        <div className="container">
          <div className="section-heading"><div className="eyebrow">Built in for every website</div><h2>Every plan has more to help you move faster</h2><p>Useful tools for building, maintaining, and growing your online presence.</p></div>
          <div className="included-grid">{included.map((item, index) => <div className="included-card" key={item}><span className="included-number">{String(index + 1).padStart(2, "0")}</span><span className="included-check"><Check size={17} /></span><b>{item}</b></div>)}</div>
        </div>
      </section>

      <section className="pricing-faq section">
        <div className="container pricing-faq-layout"><div className="section-heading"><div className="eyebrow">Good to know</div><h2>Pricing questions, answered</h2><p>A few details to help you compare plans with confidence.</p></div><div className="pricing-faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
      </section>
      <Footer pricingPage />
      <a className="back-to-top" href="#top" aria-label="Back to top"><ArrowRight size={16} /></a>
    </main>
  );
}
