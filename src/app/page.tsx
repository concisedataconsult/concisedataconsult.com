import Image from "next/image"

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
]

const stats = [
  { value: "40%", label: "of leadership time often disappears into manual reporting cycles" },
  { value: "60 days", label: "to stand up a pilot dashboard and reporting workflow" },
  { value: "1 source", label: "of truth across dashboards, board packs, and investor updates" },
]

const features = [
  {
    title: "Executive Dashboard",
    body: "One live command center for production, cost, throughput, risk, and site-level drill-down.",
  },
  {
    title: "AI Insight Engine",
    body: "Ask natural-language questions and get grounded answers, charts, and cited KPI drivers.",
  },
  {
    title: "Board Pack Generator",
    body: "Generate board-ready reports, investor updates, and operating summaries from the same governed data layer.",
  },
  {
    title: "Validation Layer",
    body: "Business rules, anomaly checks, and lineage controls keep bad numbers out of executive circulation.",
  },
]

const steps = [
  {
    number: "01",
    title: "Connect existing systems",
    body: "Link ERP, spreadsheets, lab systems, maintenance tools, and safety platforms without forcing a rip-and-replace project.",
    bullets: ["ERP and CSV ingestion", "Flexible KPI mapping", "Fast onboarding"],
  },
  {
    number: "02",
    title: "Standardize and validate",
    body: "ConciseOne cleans, governs, and structures the raw data into a trusted executive intelligence layer.",
    bullets: ["Validation rules", "Anomaly detection", "Traceable metrics"],
  },
  {
    number: "03",
    title: "Deliver decisions faster",
    body: "Leadership gets live dashboards, AI summaries, and scheduled reports built from the same source of truth.",
    bullets: ["Live KPI views", "Board-ready outputs", "Approval workflow"],
  },
]

const industries = [
  {
    name: "Junior Mining",
    state: "Live focus",
    body: "Built first for TSX and TSX-V operators that need operational clarity without enterprise BI overhead.",
  },
  {
    name: "Energy",
    state: "Next",
    body: "Reporting workflows for asset-heavy teams managing throughput, uptime, and field performance.",
  },
  {
    name: "Agriculture",
    state: "Next",
    body: "Unified visibility across production cycles, logistics, and cost performance.",
  },
  {
    name: "Manufacturing",
    state: "Next",
    body: "Board-level reporting from plant, inventory, and operations data without spreadsheet stitching.",
  },
]

const comparisons = [
  {
    name: "Traditional BI",
    tone: "muted",
    points: ["Strong analytics depth", "Slow executive adoption", "Heavy analyst dependency"],
  },
  {
    name: "ConciseOne",
    tone: "featured",
    points: ["Executive-first UX", "AI-guided reporting", "Fast deployment for operating teams"],
  },
  {
    name: "ERP Reporting",
    tone: "muted",
    points: ["System-of-record coverage", "Rigid outputs", "Weak narrative and board-pack workflow"],
  },
]

const traction = [
  { value: "8", label: "pipeline and governance stages designed into the platform model" },
  { value: "10", label: "average pilot seats assumed in the initial commercial model" },
  { value: "4", label: "core report classes supported by the product vision from day one" },
]

const plans = [
  {
    name: "Pilot",
    price: "$500/mo",
    detail: "+ $50 per user",
    featured: false,
    items: [
      "Executive dashboard",
      "AI insight engine",
      "Board pack generator",
      "Up to 3 data source integrations",
      "Onboarding support",
    ],
  },
  {
    name: "Growth",
    price: "$1,000/mo",
    detail: "+ $50 per user",
    featured: true,
    items: [
      "Everything in Pilot",
      "Unlimited integrations",
      "Approval workflow and audit trail",
      "Priority support",
      "Multi-site reporting",
    ],
  },
]

const team = {
  founders: [
    {
      initials: "N",
      name: "Nana [Last Name]",
      role: "Co-Founder & CEO",
      bio: "Operations and analytics leader focused on turning fragmented reporting into faster executive decisions.",
    },
    {
      initials: "EO",
      name: "Eugene Ofosu-Hene",
      role: "Co-Founder & COO",
      bio: "Operations analyst with direct experience in performance reporting and process visibility in industrial contexts.",
    },
  ],
  advisors: [
    {
      initials: "OO",
      name: "Olu Osunrinde",
      role: "Industry Coach",
      bio: "Supporting go-to-market direction and pilot execution through startup and operator coaching.",
    },
    {
      initials: "DO",
      name: "Prof. Divinus Oppong-Tawiah",
      role: "Academic Advisor",
      bio: "Brings research depth in information systems, digital platforms, and AI adoption in organizations.",
    },
  ],
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="section-eyebrow">{children}</div>
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="ConciseData home">
          <span className="brand-mark">
            <Image src="/logo.webp" alt="ConciseData logo" width={96} height={96} className="brand-image" />
          </span>
          <span className="brand-text">
            <strong>ConciseData</strong>
            <span>ConciseOne Platform</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary button-compact" href="#pilot">
          Book a Demo
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="hero-kicker">Executive intelligence for operations-driven companies</p>
          <h1>
            Replace spreadsheet-heavy reporting with a <span>live executive system</span>.
          </h1>
          <p className="hero-body">
            ConciseOne brings dashboards, AI-generated reporting, and governed KPI visibility into one
            Vercel-ready product experience built for fast-moving operating teams.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pilot">
              Request a Pilot Demo
            </a>
            <a className="button button-secondary" href="#product">
              Explore the Platform
            </a>
          </div>
          <div className="hero-proof">
            <span>Built for leadership teams</span>
            <span>Board-pack workflow included</span>
            <span>White-label reporting ready</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-window">
            <div className="panel-topline">
              <span className="panel-dot red" />
              <span className="panel-dot amber" />
              <span className="panel-dot blue" />
              <p>ConciseOne Executive Command</p>
            </div>
            <div className="panel-body">
              <div className="panel-metrics">
                <div>
                  <span>Production</span>
                  <strong>96.4%</strong>
                </div>
                <div>
                  <span>Cost variance</span>
                  <strong>+2.1%</strong>
                </div>
                <div>
                  <span>Board pack status</span>
                  <strong>Ready</strong>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-head">
                  <span>Monthly operational trend</span>
                  <strong>Live</strong>
                </div>
                <div className="chart-bars" aria-hidden="true">
                  {[56, 64, 61, 72, 68, 79, 76, 86, 90].map((height) => (
                    <span key={height} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="insight-card">
                <span className="insight-label">AI Insight</span>
                <p>
                  Throughput improved for a third straight period. Primary driver: mill uptime and lower
                  unplanned maintenance hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band stats-band">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section two-column" id="problem">
        <div className="section-intro">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2>Executives need confidence and speed, not another reporting queue.</h2>
        </div>
        <div className="narrative-card">
          <p>
            Most reporting stacks were built for analysts, not operators. Leadership still waits on manual
            exports, spreadsheet stitching, and narrative assembly before decisions can happen.
          </p>
          <p>
            ConciseOne compresses that process into one governed interface: live KPIs, clear explanations,
            and ready-to-send reporting outputs.
          </p>
        </div>
      </section>

      <section className="section" id="product">
        <div className="section-head">
          <div>
            <SectionEyebrow>The Solution</SectionEyebrow>
            <h2>ConciseOne combines dashboarding, AI interpretation, and report generation.</h2>
          </div>
          <p>
            The platform is designed to feel premium, simple, and operationally credible for teams that
            cannot afford long BI implementations.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-head">
          <div>
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2>Three stages from raw operating data to executive clarity.</h2>
          </div>
          <p>Fast pilot deployment, governed metrics, and outputs built for the boardroom instead of the BI team.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <ul>
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-head">
          <div>
            <SectionEyebrow>Industries</SectionEyebrow>
            <h2>Focused on mining first, extensible across other operations-heavy sectors.</h2>
          </div>
          <p>The same reporting architecture adapts well to organizations with distributed assets, cost pressure, and board accountability.</p>
        </div>
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <article key={industry.name} className={`industry-card${index === 0 ? " active" : ""}`}>
              <span className="pill">{industry.state}</span>
              <h3>{industry.name}</h3>
              <p>{industry.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="positioning">
        <div className="section-head">
          <div>
            <SectionEyebrow>Positioning</SectionEyebrow>
            <h2>Sharper than generic BI, lighter than enterprise ERP reporting.</h2>
          </div>
        </div>
        <div className="comparison-grid">
          {comparisons.map((comparison) => (
            <article
              key={comparison.name}
              className={`comparison-card${comparison.tone === "featured" ? " comparison-card-featured" : ""}`}
            >
              <h3>{comparison.name}</h3>
              <ul>
                {comparison.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section traction-section" id="traction">
        <div className="section-head">
          <div>
            <SectionEyebrow>Validation</SectionEyebrow>
            <h2>A product story built around speed, governance, and board-level usability.</h2>
          </div>
        </div>
        <div className="traction-grid">
          {traction.map((item) => (
            <article key={item.label} className="traction-card">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-head">
          <div>
            <SectionEyebrow>Pricing</SectionEyebrow>
            <h2>Simple pricing for pilot adoption and full rollout.</h2>
          </div>
          <p>Positioned well below heavyweight enterprise tooling while keeping the implementation compact.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`}>
              <span className="pricing-label">{plan.featured ? "Most Popular" : "Pilot Tier"}</span>
              <h3>{plan.name}</h3>
              <div className="pricing-amount">{plan.price}</div>
              <p className="pricing-detail">{plan.detail}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className={`button ${plan.featured ? "button-primary" : "button-secondary"}`} href="#pilot">
                {plan.featured ? "Get Started" : "Apply for Pilot"}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="team">
        <div className="section-head">
          <div>
            <SectionEyebrow>Team</SectionEyebrow>
            <h2>Built by operators and shaped by startup and research guidance.</h2>
          </div>
        </div>
        <div className="team-stack">
          <div className="team-group">
            <p className="group-label">Founders</p>
            <div className="team-grid">
              {team.founders.map((person) => (
                <article key={person.name} className="team-card">
                  <div className="avatar">{person.initials}</div>
                  <div>
                    <h3>{person.name}</h3>
                    <span>{person.role}</span>
                    <p>{person.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="team-group">
            <p className="group-label">Advisors</p>
            <div className="team-grid">
              {team.advisors.map((person) => (
                <article key={person.name} className="team-card team-card-small">
                  <div className="avatar">{person.initials}</div>
                  <div>
                    <h3>{person.name}</h3>
                    <span>{person.role}</span>
                    <p>{person.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-block" id="pilot">
        <div>
          <SectionEyebrow>Pilot Program</SectionEyebrow>
          <h2>Ready to see ConciseOne rebuilt around your data and reporting workflow?</h2>
          <p>
            Start with a focused pilot. ConciseData maps your inputs, configures executive views, and
            delivers a polished reporting layer without a long enterprise rollout.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button button-primary" href="mailto:hello@concisedataconsult.com">
            Request a Pilot Demo
          </a>
          <a className="button button-secondary" href="mailto:hello@concisedataconsult.com">
            Schedule a Call
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand-block">
          <a className="brand brand-footer" href="#hero">
            <span className="brand-mark">
              <Image src="/logo.webp" alt="ConciseData logo" width={96} height={96} className="brand-image" />
            </span>
            <span className="brand-text">
              <strong>ConciseData</strong>
              <span>Executive Intelligence Platform</span>
            </span>
          </a>
          <p>
            ConciseData Consult Limited builds decision-grade reporting systems for operations-driven
            leadership teams.
          </p>
        </div>
        <div className="footer-links-grid">
          <a href="#product">Platform</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#team">Team</a>
          <a href="mailto:hello@concisedataconsult.com">hello@concisedataconsult.com</a>
        </div>
      </footer>
    </main>
  )
}
