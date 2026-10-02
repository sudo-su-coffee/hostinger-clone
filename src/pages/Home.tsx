import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { media } from "../lib/media";

const images = {
  build: media("284f61df-b157-432b-5a61-8cdc894db700"),
  launch: media("1620a611-f8db-4e31-36c1-2cdad60ef300"),
  grow: media("05631be6-c62a-4f06-bba6-ad66117edc00"),
  manage: media("9d199448-5b4c-49b2-df00-228560a58300"),
  hermes: media("3ab65d43-9c99-4823-f45e-8cf72a7a1600"),
  studio: media("9d8fbf00-0ace-4551-3456-23bb67a71200"),
  creator2: media("41ea939b-d24e-439f-8a1e-846f0df31200"),
  creator3: media("4dd55d8d-e3cc-4cd9-8786-8372d0126800"),
  creator4: media("d0e8a2c1-1b42-4ec1-0e07-d24ae35ae800"),
  creator5: media("43bd2b36-f138-4ee3-c04a-cd0376b3b100"),
  wordpress: media("ff3d7784-e0c2-4ae2-9a2c-98fcf0a2c700"),
  templates: media("7f899d44-c1d7-42c2-6da3-5b0bf01e6900"),
  hosting: media("2cd7ac91-0505-4b6b-ebf9-c57ba29b2100"),
  domains: media("207524e8-79f3-45d7-9e68-ec2ed32b6d00"),
  email: media("6fb2716b-cc5e-46da-5f1a-1485eac25600"),
  migration: media("49d658bc-ca72-415f-4a7e-d4a3a6055300"),
  award: media("b5978c19-d9a9-493d-0dfc-4f28e77e5700"),
  speed: media("b886890b-689d-411a-6ddc-eed10c397a00"),
  migrate: media("de54bbfe-0a18-4b73-d5b8-b22b57542300"),
  fix: media("acdd21f8-9fa4-4980-a5dd-b494d4795700"),
  manageAgent: media("6bad618f-2759-4976-150f-87132674aa00"),
  edit: media("1e5c6168-0b5d-4125-5602-639fd714a100"),
  agentMore: media("49fdba58-f546-45a7-c9ba-06ac57db1000"),
  automations: media("a189f58f-abdb-4049-0358-99c4923df400"),
  portfolio: media("5239a88a-32c9-4caf-dcc6-3fc1f5246000"),
  beauty: media("d5b4724e-7d8c-426a-007a-fda91ed10300"),
  vet: media("136ecd06-85da-4f65-3bdc-4eb9ba5a1b00"),
  booking: media("b6adbd89-5d98-4d91-02bf-5d0034fdb500"),
  bakery: media("8cb85498-32db-4a64-205b-2268e8901900"),
  ecommerce: media("8bfbdbfe-12c0-4814-f8d4-0bd80a085a00"),
  agency: media("da72aa02-6062-4715-98b7-b9b7d637ae00"),
  restaurant: media("7158478b-6182-4464-6e50-b6e441c05a00"),
  finale: media("98736e75-e99b-49c5-3ad0-298ceea3d300"),
};

const faqs = [
  ["What is Hostinger?", "Hostinger is an AI-first platform for building, launching, and growing an online business. It brings website creation, hosting, domains, email, and AI tools together in one place."],
  ["Who is Hostinger for?", "It is designed for creators, small businesses, agencies, and anyone who wants to get an idea online with fewer technical hurdles."],
  ["Is Hostinger only a web hosting company?", "No. Alongside hosting, the platform offers an AI website builder, domain names, business email, ecommerce tools, and services for managing and growing a website."],
  ["Do I need to know how to code to use Hostinger's services?", "No coding experience is required for the website builder and many of the AI-assisted tools. Developers can also deploy custom applications and work with code."],
  ["How do I actually build something on Hostinger?", "Start with an idea, choose a template or describe what you want to the AI website builder, then edit the result and publish it with hosting and a domain."],
  ["What can I do with Hostinger after I launch?", "You can manage hosting, domains, email, store activity, site performance, updates, and customer-facing content from your account."],
  ["How does Hostinger help me get and keep customers?", "Built-in ecommerce, email marketing, SEO tools, and AI-assisted workflows can help you reach customers and stay connected with them."],
  ["Can Hostinger handle more if my business grows?", "Plans cover a range of project sizes, from a first website to higher-traffic projects that need more resources and tools."],
  ["How much does the Hostinger platform cost?", "Pricing depends on the plan and term you choose. Visit the official pricing page for current offers, renewal rates, and plan details."],
  ["Is my business data secure with Hostinger?", "Hostinger provides security features across its services. Review the current plan details and trust center for the exact protections available."],
  ["How does Hostinger protect my data when I use AI?", "AI features operate within the applicable product terms and privacy policy. Check Hostinger's latest documentation for details about data handling."],
  ["How does Hostinger handle copyright when using AI?", "AI-generated output can require review before commercial use. Refer to Hostinger's current terms and guidance for more information."],
  ["Can I manage Hostinger from my own coding tools?", "Yes. Hostinger supports developer workflows such as deploying custom applications, using GitHub, and working with its API."],
  ["Does Hostinger support automated or agent-driven workflows?", "The platform is adding AI-agent and automation capabilities, including integrations and ready-to-use skills. Check the product pages for the latest availability."],
] as const;

const footerGroups = [
  { title: "HOSTING", items: ["Web hosting", "Shared hosting", "Hosting for WordPress", "VPS hosting", "Self-hosted n8n", "Business email", "Cloud hosting", "Hosting for WooCommerce", "Hosting for agencies", "Minecraft hosting", "Hermes Agent VPS", "OpenClaw", "Paperclip VPS", "Google Workspace"] },
  { title: "DOMAIN", items: ["Domain name search", "Buy a domain", "Cheap domain names", "Free domain", "WHOIS Lookup", "Free SSL certificate", "Domain transfer", "Domain extensions", "Personal domain name", "Premium domains"] },
  { title: "TOOLS", items: ["AI Builder", "Website Builder", "AI Website Builder", "Ecommerce Website Builder", "Templates", "Domain Name Generator", "Print on Demand", "Link in Bio", "Business Name Generator", "AI Newsletter Generator", "AI Logo Generator", "Migrate to Hostinger", "Hostinger API"] },
  { title: "INFORMATION", items: ["Pricing", "Reviews", "Affiliate program", "Educational partnership", "Referral program", "Agency directory", "System status", "Trust center", "Sitemap"] },
  { title: "COMPANY", items: ["About Hostinger", "Our technology", "Newsroom", "Career", "Blog", "Student discount", "Sustainability", "Principles"] },
  { title: "SUPPORT", items: ["Tutorials", "Knowledge Base", "Hostinger Academy", "Contact us", "Report abuse", "Hire an expert", "Privacy policy", "Refund policy", "Terms of service"] },
];

export function HostingerMark() {
  return (
    <a className="brand" href="/" aria-label="Hostinger homepage">
      <svg viewBox="0 0 36 36" aria-hidden="true" className="brand-mark">
        <path d="M4 7.5 11.5 3v9L4 16.5v-9Zm11 0L30 16v8.5l-7.5-4.2v-3L15 13.6V7.5Zm-11 14L11.5 17v9L4 30.5v-9Zm11-1L30 29v4L15 24.5v-4Z" fill="currentColor" />
      </svg>
      <span>HOSTINGER</span>
    </a>
  );
}

function ExternalLink({ href = "https://www.hostinger.com/", children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export function Header({ pricingPage = false }: { pricingPage?: boolean }) {
  const [menu, setMenu] = useState("");
  const [mobile, setMobile] = useState(false);
  const [domain, setDomain] = useState("");
  const menus: Record<string, string[]> = {
    Products: ["AI Website Builder", "Web hosting", "WordPress hosting", "VPS hosting", "Domains", "Business email"],
    Solutions: ["Create a website", "Sell online", "Grow your business", "Manage your sites"],
    Developers: ["VPS hosting", "Web app deployment", "Hostinger API", "GitHub deployments"],
    Resources: ["Tutorials", "Hostinger Academy", "Blog", "Customer stories"],
  };
  const domainSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = domain.trim().replace(/^https?:\/\//, "");
    if (query) window.open(`https://www.hostinger.com/domain-name-results?from=homepage&domain=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="site-header">
      <div className="nav-top">
        <HostingerMark />
        <nav className={mobile ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href={pricingPage ? "#plan-selector" : "/pricing.html"} onClick={() => setMobile(false)}>Pricing</a>
          {Object.keys(menus).map((item) => (
            <div className="nav-item" key={item}>
              <button onClick={() => setMenu(menu === item ? "" : item)} aria-expanded={menu === item}>{item}<ChevronDown size={14} /></button>
              {menu === item && <div className="nav-dropdown">{menus[item].map((label) => <ExternalLink key={label} href="https://www.hostinger.com/">{label}<ArrowUpRight size={14} /></ExternalLink>)}</div>}
            </div>
          ))}
          <ExternalLink className="mobile-login" href="https://auth.hostinger.com/login">Log in</ExternalLink>
        </nav>
        <div className="nav-actions">
          <ExternalLink className="agent-nav" href="https://www.hostinger.com/hostinger-agent"><Sparkles size={14} /> Agent</ExternalLink>
          <button className="language" aria-label="Select language"><span className="flag">🇺🇸</span><span>EN</span><ChevronDown size={13} /></button>
          <ExternalLink className="login-icon" href="https://auth.hostinger.com/login" aria-label="Log in"><UserRound size={19} /></ExternalLink>
          <button className="mobile-toggle" onClick={() => setMobile(!mobile)} aria-label={mobile ? "Close menu" : "Open menu"}>{mobile ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className="nav-search-row">
        <form className="domain-search" onSubmit={domainSearch}>
          <Search size={18} />
          <input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="Type the domain you want" aria-label="Type the domain you want" />
          <button type="submit">Search</button>
        </form>
        <div className="free-domain">Free domain for 1 year<br />included with <a href="#pricing">yearly plans</a></div>
      </div>
    </header>
  );
}

function Hero() {
  const cards = [
    { label: "Build", src: images.build, wide: true, className: "build-card" },
    { label: "Launch", src: images.launch, className: "launch-card" },
    { label: "Grow", src: images.grow, className: "grow-card" },
    { label: "Manage", src: images.manage, className: "manage-card" },
  ];
  return (
    <section className="hero-shell" id="top">
      <Header />
      <div className="hero-content">
        <h1>Your idea, online.<br />Made easy.</h1>
        <p className="hero-subtitle">An AI-first platform to build, run, and grow your business online, all in one place.</p>
        <a href="/pricing.html" className="button button-light">Get started <ArrowRight size={17} /></a>
        <div className="guarantee"><ShieldCheck size={15} /> 30-day money-back guarantee</div>
      </div>
      <div className="hero-cards">
        {cards.map((card) => (
          <a href="https://www.hostinger.com/" target="_blank" rel="noreferrer" className={`hero-card ${card.className} ${card.wide ? "hero-card-wide" : ""}`} key={card.label}>
            <span className="card-label"><Sparkles size={13} />{card.label}</span>
            <img src={card.src} alt={`${card.label} with Hostinger`} loading={card.wide ? "eager" : "lazy"} />
          </a>
        ))}
      </div>
      <div className="trust-strip"><span className="trust-name">Excellent</span><span className="trust-stars">★★★★★</span><span>72,617 reviews on <strong>Trustpilot</strong></span></div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false }: { eyebrow?: string; title: React.ReactNode; text?: string; dark?: boolean }) {
  return <div className={`section-heading ${dark ? "on-dark" : ""}`}>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function PromoAndPlans() {
  const plans = [
    { name: "Premium", description: "Run websites smoothly. Great for creators and small brands.", old: "11.99", price: "2.99", term: "Get 48 months for $143.52 (regular price $575.52). Renews at $10.99/mo.", features: ["3 websites", "Domain – free for 1 year", "20 GB SSD storage", "Free weekly backups", "Ecommerce available", "CDN", "AI tools", "Priority 24/7 expert support"], badge: "75% off" },
    { name: "Unlimited", description: "Unlimited websites and mailboxes, plus AI tools and priority support for maximum flexibility.", old: "18.99", price: "3.99", term: "Get 48 months for $191.52 (regular price $911.52). Renews at $16.99/mo.", features: ["Unlimited websites", "Domain – free for 1 year", "50 GB NVMe storage", "Daily backups + easy restore", "CDN included", "Ecommerce available", "AI tools", "Priority 24/7 expert support"], badge: "Special offer · 79% off", featured: true },
    { name: "Cloud Startup", description: "Dedicated power for agencies or high-traffic projects.", old: "27.99", price: "7.99", term: "Get 48 months for $383.52 (regular price $1,343.52). Renews at $25.99/mo.", features: ["Unlimited websites", "Domain – free for 1 year", "100 GB NVMe storage", "Daily and on-demand backups", "CDN included", "Ecommerce available", "AI tools", "Priority 24/7 expert support"], badge: "71% off" },
  ];
  return (
    <>
      <section className="pricing-intro section" id="pricing">
        <div className="container"><SectionHeading eyebrow="A great place to start" title="Plans and prices" text="Explore our packages, each one loaded with built-in tools, ready-to-use services, and bonus features to help you do more from day one." />
          <ExternalLink href="https://www.hostinger.com/pricing" className="text-link centered-link">Explore all offers <ArrowRight size={17} /></ExternalLink>
          <div className="promo-row">
            <ExternalLink href="https://www.hostinger.com/hostinger-agent" className="promo-card agent-promo"><span className="promo-tag">Trending</span><div className="promo-icon purple"><Sparkles size={20} /></div><div><b>Hostinger Agent</b><p>Get guided support with ready-to-use skills built in.</p></div><ArrowUpRight size={18} /></ExternalLink>
            <ExternalLink href="https://www.hostinger.com/applications/hermes-agent" className="promo-card hermes-promo"><span className="promo-tag">New</span><img src={images.hermes} alt="" /><div><b>1-click Hermes Agent</b><p>Run your own AI agent that learns as it works.</p></div><ArrowUpRight size={18} /></ExternalLink>
          </div>
          <div className="idea-banner"><div className="idea-copy"><div className="eyebrow"><Sparkles size={14} /> FREE AI-POWERED IDEAS</div><h3>Share your idea.<br /><span>Hostinger Agent handles the rest.</span></h3><p>Get a site plan and domain ideas in under a minute. Free, no signup.</p><ExternalLink href="https://www.hostinger.com/hostinger-agent" className="button button-dark">Try Hostinger Agent <ArrowRight size={16} /></ExternalLink></div><div className="idea-screen"><div className="screen-top"><span className="screen-dot"></span><span className="screen-dot"></span><span className="screen-dot"></span><span>hostinger agent</span></div><div className="screen-question">What do you want to build today?</div><div className="screen-chat"><span className="spark-bubble"><Sparkles size={15} /></span><span>A cozy neighborhood bakery with online ordering</span></div><div className="screen-result"><div className="result-line wide"></div><div className="result-line"></div><div className="result-chips"><span>Warm & welcoming</span><span>Online shop</span><span>Local delivery</span></div><div className="screen-button">Create my plan <ArrowRight size={12} /></div></div></div></div>
        </div>
      </section>
      <section className="plan-section section" aria-labelledby="plan-heading"><div className="container"><SectionHeading eyebrow="More power, one simple plan" title={<span id="plan-heading">Choose the plan that<br className="desktop-break" /> matches what you need</span>} text="Get the essentials for building, launching, selling, and managing online." /><div className="plan-benefits"><span><ShieldCheck /> 30-day money-back guarantee</span><span><Check /> Cancel anytime</span><span><Zap /> 24/7 support</span></div><div className="plan-grid">{plans.map((plan) => <article className={`plan-card ${plan.featured ? "plan-featured" : ""}`} key={plan.name}><div className="plan-card-top"><span className="discount-badge">{plan.badge}</span><h3>{plan.name}</h3><p>{plan.description}</p></div><div className="plan-price"><span className="old-price">${plan.old}</span><div><sup>$</sup><strong>{plan.price}</strong><span>/mo</span></div></div><ExternalLink href="https://www.hostinger.com/pricing" className={`button ${plan.featured ? "button-purple" : "button-outline"}`}>Choose plan <ArrowRight size={16} /></ExternalLink><p className="plan-term">{plan.term}</p><div className="plan-feature-list">{plan.features.map((f) => <span key={f}><Check size={16} />{f}</span>)}</div><div className="plan-build"><b>Build with:</b><span>✦ AI Builder {plan.name === "Premium" ? "(5 credits)" : "(15 credits)"}</span><span>◉ WordPress</span><span>▧ Node.js</span><b>Communicate & grow:</b><span>✉ Email and AI marketing tools</span></div></article>)}</div><div className="fine-print">Unlimited features are subject to our <ExternalLink href="https://www.hostinger.com/legal/unlimited-policy">Fair Usage Policy</ExternalLink>. All plans are paid upfront. Monthly rate reflects the total price divided by the number of months.</div></div></section>
    </>
  );
}

function ToolShowcase() {
  const [active, setActive] = useState("Build");
  const tabs = ["Build", "Launch", "Grow", "Manage"];
  const showcases = [
    { name: "You direct. AI builds it live.", text: "Describe what you want to create, then keep prompting to shape your website, app, or custom tool as it comes together.", cta: "Create with AI", href: "https://www.hostinger.com/ai-builder", image: images.studio },
    { name: "Launch your idea with confidence.", text: "Bring your site online with secure hosting, reliable performance, and a domain that feels like yours.", cta: "Explore hosting", href: "https://www.hostinger.com/web-hosting", image: images.wordpress },
    { name: "Turn more visits into sales.", text: "Showcase what you sell, reach new customers, and keep more of what you earn with built-in ecommerce tools.", cta: "Explore ecommerce", href: "https://www.hostinger.com/ecommerce", image: images.creator3 },
    { name: "Manage your business in one place.", text: "From site updates to customer conversations, keep your essential tools close at hand.", cta: "Meet Hostinger Agent", href: "https://www.hostinger.com/hostinger-agent", image: images.manageAgent },
  ];
  const showcase = showcases[tabs.indexOf(active)];
  return <section className="tools-section section"><div className="container"><SectionHeading eyebrow="From first idea to everyday growth" title="Tools for every online project" text="Get more control over what you build online, without taking on more technical complexity." /><div className="tool-tabs" role="tablist" aria-label="Online project stages">{tabs.map((tab) => <button role="tab" aria-selected={active === tab} className={active === tab ? "active" : ""} key={tab} onClick={() => setActive(tab)}>{tab}</button>)}</div><div className="showcase-layout"><div className="showcase-copy"><span className="showcase-step">0{tabs.indexOf(active) + 1} / 04</span><h3>{showcase.name}</h3><p>{showcase.text}</p><ExternalLink className="text-link" href={showcase.href}>{showcase.cta} <ArrowRight size={17} /></ExternalLink></div><div className="showcase-image"><img src={showcase.image} alt="Hostinger online tools preview" loading="lazy" /><div className="image-caption"><span><Sparkles size={15} /> Made for your next big idea</span><ArrowUpRight size={17} /></div></div></div><div className="creator-strip"><div className="creator-wordmark"><span>Made for makers</span><b>creators choose<br />Hostinger</b></div>{[images.creator2, images.creator3, images.creator4, images.creator5].map((src, i) => <img key={src} src={src} alt={`Creator website made with Hostinger ${i + 1}`} loading="lazy" />)}</div></div></section>;
}

function ProductSections() {
  const essentials = [
    { title: "Hosting", copy: "Fast, secure hosting for your site.", img: images.hosting, href: "https://www.hostinger.com/web-hosting" },
    { title: "Domains", copy: "Find and register the right domain for your brand.", img: images.domains, href: "https://www.hostinger.com/domains" },
    { title: "Business email", copy: "Build trust with email on your domain.", img: images.email, href: "https://www.hostinger.com/business-email" },
    { title: "Free website migration", copy: "Move your existing site to Hostinger for free.", img: images.migration, href: "https://www.hostinger.com/website-migration" },
  ];
  const agents = [
    { title: "Speed it up", copy: "Describe your speed issue and get step-by-step tips to fix it.", img: images.speed },
    { title: "Migrate", copy: "Get help at every step of moving your site.", img: images.migrate },
    { title: "Fix", copy: "Share an error and get clear steps to sort it out.", img: images.fix },
    { title: "Manage", copy: "Get help with plugins, domains, and daily tasks.", img: images.manageAgent },
    { title: "Edit", copy: "Tell the agent what you need changed on your site.", img: images.edit },
  ];
  return <>
    <section className="control-section section"><div className="container"><SectionHeading eyebrow="Your tools, your way" title="Want more hands-on control?" /><div className="control-grid"><ExternalLink className="control-card" href="https://www.hostinger.com/wordpress-hosting"><img src={images.wordpress} alt="" loading="lazy"/><div><h3>Hosting for WordPress</h3><p>AI-assisted, plugin-rich, fully managed.</p><span className="circle-arrow"><ArrowUpRight size={17}/></span></div></ExternalLink><ExternalLink className="control-card" href="https://www.hostinger.com/templates"><img src={images.templates} alt="" loading="lazy"/><div><h3>Hostinger templates</h3><p>Designer-made templates for every niche.</p><span className="circle-arrow"><ArrowUpRight size={17}/></span></div></ExternalLink></div></div></section>
    <section className="essentials-section section"><div className="container"><SectionHeading eyebrow="All the essentials" title="Set up the essentials to go online"/><div className="essential-grid">{essentials.map((item) => <ExternalLink href={item.href} className="essential-card" key={item.title}><img src={item.img} alt="" loading="lazy"/><div><h3>{item.title}</h3><p>{item.copy}</p><ArrowUpRight size={17}/></div></ExternalLink>)}</div></div></section>
    <section className="growth-pair section"><div className="container"><div className="growth-card commerce-card"><div className="growth-copy"><span className="eyebrow">SELL EVERYWHERE</span><h2>Grow sales and keep more of what you earn</h2><p>Sell with 0% transaction fees and reach more customers across channels.</p><ExternalLink className="text-link" href="https://www.hostinger.com/ecommerce">Explore Ecommerce <ArrowRight size={17}/></ExternalLink></div><img src={images.ecommerce} alt="Ecommerce store preview" loading="lazy" /></div><div className="growth-card email-card"><div className="growth-copy"><span className="eyebrow">STAY CONNECTED</span><h2>Bring customers back with AI email marketing</h2><p>Create email campaigns, re-engage inactive subscribers, and see what’s working, without doing it all manually.</p><ExternalLink className="text-link" href="https://www.hostinger.com/email-marketing">Explore AI email marketing <ArrowRight size={17}/></ExternalLink></div><img src={images.email} alt="Email marketing preview" loading="lazy" /></div></div></section>
    <section className="agent-section section"><div className="container"><div className="agent-head"><div className="award"><img src={images.award} alt="Gold Stevie Winner 2026" loading="lazy" /></div><SectionHeading eyebrow="Your AI co-worker" title={<>Your AI co-worker.<br />Free with every plan.</>} text="Migrate, fix, edit, and manage your site through chat. 85% of issues solved without a human. Only at Hostinger." /><ExternalLink href="https://www.hostinger.com/hostinger-agent" className="button button-dark">Start a chat <ArrowRight size={16}/></ExternalLink></div><div className="agent-grid">{agents.map((agent) => <ExternalLink href="https://www.hostinger.com/hostinger-agent" className="agent-card" key={agent.title}><img src={agent.img} alt="" loading="lazy"/><div><h3>{agent.title}</h3><p>{agent.copy}</p></div><ArrowUpRight className="agent-arrow" size={17}/></ExternalLink>)}</div><div className="agent-more"><div><span className="eyebrow">ONE AGENT. MORE POSSIBILITIES.</span><h3>Same Agent.<br/>More ways to grow your business.</h3><p>Hostinger Agent is included with every plan for support and site management. Upgrade for 1,000+ app connections and 150+ ready-to-use skills.</p><ExternalLink href="https://www.hostinger.com/hostinger-agent" className="text-link">Learn more <ArrowRight size={17}/></ExternalLink></div><img src={images.agentMore} alt="Hostinger Agent integrations" loading="lazy"/></div></div></section>
  </>;
}

function MoreTools() {
  const categories = ["OpenClaw", "Hermes Agent", "Self-hosted n8n"];
  const power = [
    ["AI-managed VPS", "Run your projects on an AI-managed VPS with full root access."],
    ["Web app deployment", "Deploy AI-built or custom Node.js apps from GitHub or your code editor."],
    ["Cloud hosting", "Scale with more power and resources."],
    ["App catalog", "Launch AI tools, dev stacks, and popular apps in a few clicks."],
    ["Agency hosting", "One safe place to share access, manage your sites, and work with clients."],
  ];
  return <section className="more-tools section"><div className="container"><div className="more-tools-grid"><div className="automation-feature"><div className="eyebrow"><Sparkles size={14}/> AI AUTOMATIONS</div><h2>Put AI to work for you</h2><p>Build assistants, assign tasks to agents, and automate workflows, so more of your work gets done in the background.</p><div className="automation-pills">{categories.map((c) => <ExternalLink href="https://www.hostinger.com/" key={c}>{c}<ArrowUpRight size={13}/></ExternalLink>)}</div><img src={images.automations} alt="Automation tools preview" loading="lazy"/></div><div className="power-list"><div className="eyebrow">ROOM TO GROW</div><h2>More power<br/>when you need it</h2>{power.map(([title, copy]) => <ExternalLink href="https://www.hostinger.com/" className="power-row" key={title}><span><b>{title}</b><small>{copy}</small></span><ArrowUpRight size={17}/></ExternalLink>)}</div></div></div></section>;
}

function CustomerWork() {
  const cards = [
    ["Digital design agency", images.agency], ["Beauty brand", images.beauty], ["Veterinary", images.vet], ["Booking", images.booking], ["Bakery business", images.bakery], ["eCommerce", images.ecommerce], ["Restaurant", images.restaurant], ["Portfolio", images.portfolio],
  ];
  return <section className="customer-section section"><div className="container"><div className="customer-header"><SectionHeading eyebrow="Real ideas, live on the web" title="See what our customers are creating with Hostinger" text="Their ideas went live. Yours could be next."/><ExternalLink href="https://www.hostinger.com/templates" className="text-link">Explore templates <ArrowRight size={17}/></ExternalLink></div><div className="customer-grid">{cards.map(([name, img]) => <ExternalLink href="https://www.hostinger.com/" className="customer-card" key={name}><img src={img} alt={`${name} template`} loading="lazy"/><span>{name}<ArrowUpRight size={15}/></span></ExternalLink>)}</div><blockquote className="testimonial"><div className="quote-mark">“</div><p>Hostinger AI Builder makes development incredibly fast. I can quickly design, prototype, and launch ideas without wasting time.</p><div className="quote-author"><img src={images.portfolio} alt=""/><span><b>Riishi Riitambhar</b><small>Tech services</small></span></div></blockquote></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <section className="faq-section section"><div className="container faq-container"><SectionHeading eyebrow="Good to know" title="Hostinger platform FAQs"/><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${open === i ? "expanded" : ""}`} key={question}><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{question}</span><span className="faq-plus">{open === i ? "−" : "+"}</span></button>{open === i && <p>{answer}</p>}</div>)}</div></div></section>;
}

export function Footer({ pricingPage = false }: { pricingPage?: boolean }) {
  return <footer className="site-footer"><div className="footer-cta"><div className="footer-cta-copy"><span className="eyebrow">START SOMETHING GREAT</span><h2>Imagined it.<br/><span>Now make it real.</span></h2><p>30-day money-back guarantee. We migrate your existing site for free.</p><a className="button button-light" href={pricingPage ? "#plan-selector" : "/pricing.html"}>Get started <ArrowRight size={16}/></a></div><img src={images.finale} alt="A website idea ready to launch" loading="lazy"/></div><div className="container footer-container"><div className="footer-top"><HostingerMark/><div className="social-links"><ExternalLink href="https://www.instagram.com/hostinger/">Instagram</ExternalLink><ExternalLink href="https://www.youtube.com/hostinger/">YouTube</ExternalLink><ExternalLink href="https://www.linkedin.com/company/hostinger/">LinkedIn</ExternalLink></div></div><div className="footer-grid">{footerGroups.map((group) => <div className="footer-group" key={group.title}><h3>{group.title}</h3>{group.items.map((item) => item === "Pricing" ? <a href={pricingPage ? "#plan-selector" : "/pricing.html"} key={item}>{item}</a> : <ExternalLink href="https://www.hostinger.com/" key={item}>{item}</ExternalLink>)}</div>)}</div><div className="footer-bottom"><p>© 2004–2026 Hostinger – Launch, grow, and succeed online, supported by AI that puts the power in your hands.</p><span>Prices are listed without VAT.</span></div><div className="replica-note">Independent visual recreation for demonstration · Not affiliated with Hostinger</div></div></footer>;
}

export default function Home() {
  return <main><Hero/><PromoAndPlans/><ToolShowcase/><ProductSections/><MoreTools/><CustomerWork/><FAQ/><Footer/><a className="back-to-top" href="#top" aria-label="Back to top"><ArrowDown size={16}/></a></main>;
}
