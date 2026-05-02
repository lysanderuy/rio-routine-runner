const features = [
  {
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    title: 'Instant setup',
    desc: 'Click + resize = blocks in seconds. No forms. No overthinking.',
  },
  {
    icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></>,
    title: 'Focused work',
    desc: 'One block at a time. Stay present. No distractions.',
  },
  {
    icon: (
      <>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </>
    ),
    title: 'Actually flexible',
    desc: "Plans change. Rio adapts. Reshape blocks mid-day without guilt.",
  },
  {
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    title: 'Honest logging',
    desc: "Log what happened. Quick tags. Optional notes. That's it.",
  },
  {
    icon: (
      <>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      </>
    ),
    title: 'Built for focus',
    desc: 'Low friction. Fewer decisions. Designed to work with how you actually think.',
  },
  {
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
    title: "You'll use it",
    desc: "Because it's honest. Because it respects your time. Because it works.",
  },
];

const steps = [
  { num: 1, title: 'Plan', desc: 'Drag and resize. Shape your day in seconds.' },
  { num: 2, title: 'Work', desc: 'Start a block. Stay focused. One thing at a time.' },
  { num: 3, title: 'Log', desc: 'What happened? Quick tags. Optional notes. Done.' },
  { num: 4, title: 'Learn', desc: 'See your patterns. If you want to. Stats are optional.' },
];

const reasons = [
  { title: 'Not rigid', desc: "Your plan doesn't control you. Change it. Adapt. Breathe." },
  { title: 'Not guilt-inducing', desc: "No red X's. No shame. Just honest tracking of what happened." },
  { title: 'Not overwhelming', desc: 'Less setup. Fewer choices. Rio gets out of your way.' },
  { title: 'Not demanding', desc: "No hours of configuration. Build and go. That's it." },
  { title: 'Not pretend', desc: "You see reality. That's where real learning happens." },
  { title: 'Actually smart', desc: 'Design that respects your brain. Interface that just works.' },
];

const mockupBlocks = [
  { time: '8am', label: 'Morning review', bg: 'var(--purple)', color: '#fff', width: '100%', height: '2.5rem' },
  { time: '9am', label: 'Deep work session', bg: 'var(--coral)', color: '#fff', width: '100%', height: '4rem' },
  { time: '11am', label: 'Email & messages', bg: 'var(--purple-light)', color: 'var(--purple-dark)', width: '75%', height: '2.5rem' },
  { time: '12pm', label: 'Lunch break', bg: 'var(--cream)', color: 'var(--text-muted)', width: '55%', height: '2.5rem', bordered: true },
];

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="py-4 px-2">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <a href="#" className="logo">Rio</a>
          <nav className="flex gap-8 items-center">
            <a href="#how">How</a>
            <a href="#why">Why</a>
            <a href="#cta" className="btn btn-primary px-5 py-2.5 text-sm">Get started</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 px-2">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="section-label mb-4">For people who&apos;ve tried everything else.</div>
              <h1
                className="text-6xl font-bold mb-6 leading-tight"
                style={{ color: 'var(--ink)', letterSpacing: '-0.03em' }}
              >
                Your routine,<br />made simple.
              </h1>
              <p className="text-xl leading-relaxed mb-3" style={{ color: 'var(--ink)' }}>
                Build your day in seconds. Work through it with focus. See what actually happened.
              </p>
              <p className="text-base mb-10" style={{ color: 'var(--text-muted)' }}>
                For anyone who&apos;s quit productivity apps before. You&apos;re not the problem—they were.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn btn-primary text-base px-7 py-3.5">Start free</button>
                <button className="btn btn-secondary text-base px-7 py-3.5">Learn more</button>
              </div>
            </div>
            <div className="lg:col-span-2 app-mockup">
              <div
                className="flex items-center gap-1.5 mb-5 pb-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffb3b3' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffd980' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#a8d5a2' }} />
                <span className="ml-2 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  Today · Friday
                </span>
              </div>
              <div className="space-y-2">
                {mockupBlocks.map((block) => (
                  <div key={block.time} className="flex gap-3 items-center">
                    <span
                      className="text-xs w-8 text-right shrink-0"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {block.time}
                    </span>
                    <div
                      className="rounded-xl flex items-center px-4 text-sm font-medium"
                      style={{
                        background: block.bg,
                        color: block.color,
                        width: block.width,
                        height: block.height,
                        border: block.bordered ? '1px solid var(--border)' : 'none',
                        flexShrink: 0,
                      }}
                    >
                      {block.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-2" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-3">Features</div>
            <h2 className="text-4xl font-bold" style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              What makes Rio different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--text-muted)' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 px-2" id="how">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-3">Process</div>
            <h2 className="text-4xl font-bold" style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="step-num">{step.num}</div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--ink)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--text-muted)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RIO */}
      <section className="py-28 px-2" id="why" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-3">Why Rio</div>
            <h2 className="text-4xl font-bold" style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              For people who&apos;ve quit productivity apps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((item, i) => (
              <div key={i} className="why-card">
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8" id="cta">
        <div className="cta-section p-16 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Ready to build a routine that actually works?
          </h2>
          <p className="text-lg mb-10">
            Join people who finally found a routine app that fits their brain, not their calendar.
          </p>
          <button className="btn btn-cta text-base px-8 py-3.5">Start for free</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-2 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-sm">© 2025 Rio. Made for people who think differently.</p>
          <p className="mt-3 text-sm">
            <a href="#">Privacy</a>
            <span className="mx-3" style={{ opacity: 0.3 }}>·</span>
            <a href="#">Terms</a>
            <span className="mx-3" style={{ opacity: 0.3 }}>·</span>
            <a href="#">Contact</a>
          </p>
        </div>
      </footer>
    </>
  );
}
