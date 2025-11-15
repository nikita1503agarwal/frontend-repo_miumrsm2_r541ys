import React from 'react'
import Spline from '@splinetool/react-spline'

function MinimalIcon({ type = 'hex', className = '' }) {
  const stroke = 'stroke-amber-300'
  const base = 'w-8 h-8 text-amber-300'
  const cn = `${base} ${className}`

  if (type === 'chain') {
    return (
      <svg viewBox="0 0 48 48" className={cn} fill="none" strokeWidth="1.25">
        <g className={stroke}>
          <rect x="6" y="20" width="16" height="16" rx="3" className="fill-transparent" />
          <rect x="26" y="12" width="16" height="16" rx="3" className="fill-transparent" />
          <path d="M22 24h4" />
          <path d="M18 20l12-8" />
          <circle cx="14" cy="28" r="2" />
          <circle cx="34" cy="20" r="2" />
        </g>
      </svg>
    )
  }

  if (type === 'tree') {
    return (
      <svg viewBox="0 0 48 48" className={cn} fill="none" strokeWidth="1.25">
        <g className={stroke}>
          <path d="M24 8v10" />
          <path d="M24 18c-6 3-10 8-12 14" />
          <path d="M24 18c6 3 10 8 12 14" />
          <circle cx="24" cy="18" r="2" />
          <circle cx="12" cy="34" r="2" />
          <circle cx="36" cy="34" r="2" />
        </g>
      </svg>
    )
  }

  // hexagon (default)
  return (
    <svg viewBox="0 0 48 48" className={cn} fill="none" strokeWidth="1.25">
      <g className={stroke}>
        <path d="M24 6l14 8v20l-14 8-14-8V14z" className="fill-transparent" />
        <path d="M24 14l8 4v12l-8 4-8-4V18z" className="fill-transparent" />
      </g>
    </svg>
  )
}

function Divider() {
  return (
    <div className="relative h-px w-full my-24">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 selection:bg-amber-300/20 selection:text-amber-200">
      {/* Hero */}
      <section className="relative h-[88vh] overflow-hidden isolate">
        {/* Spline cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Amber gradient veils + grain */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -inset-40 bg-amber-field opacity-[0.12] mix-blend-screen" />
          <div className="absolute inset-0 noise-overlay opacity-[0.06]" />
          <div className="absolute inset-0 radial-fade" />
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-6 lg:px-10 flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-black/20 px-4 py-1.5 backdrop-blur-sm shadow-[0_0_1px_#f59e0b]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80 shadow-[0_0_12px_#f59e0b]" />
              <span className="text-sm tracking-widest text-amber-200/80 uppercase">Decentralized Prediction Primitive</span>
            </div>
            <h1 className="mt-6 font-light leading-[1.05] tracking-tight text-[clamp(2.6rem,6vw,5.2rem)] text-amber-50">
              DIKE Protocol
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-amber-100/80 font-extralight">
              Unlocking capital efficiency in prediction markets through composable, chainable payoff structures and trustless settlement.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#solve" className="group inline-flex items-center gap-3 border border-amber-300/30 text-amber-200/90 hover:text-amber-100 rounded-full px-5 py-2.5 hover:border-amber-300/60 transition-colors">
                <span className="text-sm tracking-wide">Explore the primitive</span>
                <span className="h-5 w-5 rounded-full grid place-items-center border border-amber-300/40">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-300"><path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="1.25"/></svg>
                </span>
              </a>
              <span className="text-sm text-amber-200/60">Minimal. Mathematical. Composable.</span>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        {/* What it solves */}
        <section id="solve" className="container mx-auto px-6 lg:px-10 pt-20">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-amber-200/70">
                <div className="h-px w-8 bg-amber-300/50" />
                <span className="uppercase tracking-widest text-xs">Problem</span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-light text-amber-50">Capital leakage in traditional prediction markets</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-neutral-300/90 leading-relaxed font-extralight">
                Conventional markets isolate liquidity per outcome. Capital is fragmented across events, expiration windows, and venues — creating deadweight loss. DIKE consolidates exposure through a single, chainable primitive that routes payoff across branches without duplicating stake.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl border border-amber-300/20 bg-white/5 backdrop-blur-[2px] hover:border-amber-300/40 transition-colors">
                  <MinimalIcon type="hex" />
                  <p className="mt-3 text-sm text-amber-100/80">Unified collateral across correlated outcomes</p>
                </div>
                <div className="p-5 rounded-xl border border-amber-300/20 bg-white/5 backdrop-blur-[2px] hover:border-amber-300/40 transition-colors">
                  <MinimalIcon type="chain" />
                  <p className="mt-3 text-sm text-amber-100/80">Capital that flows through branches, not around them</p>
                </div>
                <div className="p-5 rounded-xl border border-amber-300/20 bg-white/5 backdrop-blur-[2px] hover:border-amber-300/40 transition-colors">
                  <MinimalIcon type="tree" />
                  <p className="mt-3 text-sm text-amber-100/80">Outcome trees without liquidity silos</p>
                </div>
              </div>
            </div>
          </div>
          <Divider />
        </section>

        {/* Prediction Chaining */}
        <section id="chaining" className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-amber-200/70">
                <div className="h-px w-8 bg-amber-300/50" />
                <span className="uppercase tracking-widest text-xs">Mechanism</span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-light text-amber-50">Prediction Chaining</h2>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-amber-300/20 bg-white/5 p-6 backdrop-blur-[2px]">
                <div className="grid sm:grid-cols-3 gap-6">
                  {["Stake once", "Branch dynamically", "Settle trustlessly"].map((t, i) => (
                    <div key={i} className="relative p-4 rounded-lg border border-amber-300/10 bg-black/20">
                      <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-amber-300/20 border border-amber-300/40 grid place-items-center text-xs text-amber-100/80">{i+1}</div>
                      <p className="text-sm text-amber-100/90 font-light">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-neutral-300/90 font-extralight leading-relaxed">
                  Structure payouts as composable functions over event trees. Exposure transfers along realized paths, conserving collateral while preserving expressivity. The result is deep markets with fewer capital requirements.
                </p>
              </div>
            </div>
          </div>
          <Divider />
        </section>

        {/* Benefits */}
        <section id="benefits" className="container mx-auto px-6 lg:px-10 pb-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-amber-200/70">
                <div className="h-px w-8 bg-amber-300/50" />
                <span className="uppercase tracking-widest text-xs">Benefits</span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-light text-amber-50">Capital efficiency, composability, trustless settlement</h2>
            </div>
            <div className="md:col-span-7">
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { t: 'Capital Efficiency', d: 'Reuse collateral across paths with conserved exposure.', i: 'hex' },
                  { t: 'Composable', d: 'Chain payoffs like primitives in a functional graph.', i: 'chain' },
                  { t: 'Trustless', d: 'On-chain settlement with transparent resolution.', i: 'tree' },
                ].map((b, i) => (
                  <div key={i} className="group p-5 rounded-xl border border-amber-300/20 bg-white/5 backdrop-blur-[2px] hover:border-amber-300/50 transition-colors">
                    <MinimalIcon type={b.i} />
                    <h3 className="mt-3 text-amber-50 font-medium tracking-tight">{b.t}</h3>
                    <p className="mt-1 text-sm text-amber-100/80 font-extralight">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Subtle background honeycomb hint */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.08]">
        <div className="absolute inset-0 pattern-honeycomb" />
      </div>

      {/* Footer */}
      <footer className="border-t border-amber-300/10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-10 py-8 text-xs text-amber-200/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} DIKE Protocol</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-amber-300/70 shadow-[0_0_10px_#f59e0b]" />
            Minimal. Mathematical. Futuristic.
          </span>
        </div>
      </footer>
    </div>
  )
}
