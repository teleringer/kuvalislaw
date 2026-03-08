export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#021327] text-white">
      <style>{`
        .stat-rotator {
          position: relative;
          min-height: 180px;
          overflow: hidden;
        }

        .stat-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          transform: translateY(16px) scale(0.98);
          animation: statCycle 16s infinite;
          padding: 1rem;
        }

        .stat-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .stat-slide:nth-child(2) {
          animation-delay: 4s;
        }

        .stat-slide:nth-child(3) {
          animation-delay: 8s;
        }

        .stat-slide:nth-child(4) {
          animation-delay: 12s;
        }

        @keyframes statCycle {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          6% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          21% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          25% {
            opacity: 0;
            transform: translateY(-10px) scale(1.01);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px) scale(1.01);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-slide {
            animation: none !important;
            opacity: 0;
            transform: none;
          }

          .stat-slide:first-child {
            opacity: 1;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#021327]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              src="/kuvalis-logo.png"
              alt="Kuvalis Law Demo"
              className="h-20 w-auto sm:h-24 md:h-28"
            />
          </div>

          <div className="hidden text-center md:block">
            <a
              href="tel:8774620561"
              className="text-xl font-extrabold tracking-wide text-yellow-400 transition hover:text-yellow-300 lg:text-2xl"
            >
              Call Demo Now: 877-462-0561
            </a>
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="tel:8774620561"
              className="rounded-md border border-yellow-400/40 px-3 py-2 text-sm font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black md:hidden"
            >
              Call Now
            </a>

            <a
              href="https://legalclientintake.com/#info"
              className="rounded-md border border-yellow-400/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black sm:text-base"
            >
              Contact Us
            </a>
          </nav>
        </div>

        <div className="border-t border-white/10 px-4 pb-3 pt-2 text-center md:hidden">
          <a
            href="tel:8774620561"
            className="text-lg font-extrabold tracking-wide text-yellow-400 transition hover:text-yellow-300"
          >
            Call Demo Now: 877-462-0561
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* LEFT SIDE — LCI DEMO */}
          <div className="flex min-h-[560px] flex-col justify-center">
            <div className="mb-5">
              <p className="mb-3 inline-block rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                Built for Attorneys & Small Law Firms
              </p>

              <h2 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
                Hear how an AI legal receptionist could answer after-hours calls
                for your law firm.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Call the demo number to experience a realistic legal intake flow.
                This is not about a fictional firm. It is a live demonstration of
                how your office could sound when no one is available to answer.
              </p>
            </div>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:8774620561"
                className="rounded-xl bg-yellow-400 px-6 py-4 text-center text-base font-bold text-black transition hover:bg-yellow-300"
              >
                Call 877-462-0561
              </a>

              <a
                href="https://legalclientintake.com/#info"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Request Info from LCI
              </a>
            </div>

            {/* COLLAGE / IMAGE SECTION */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/placeholder-1.jpg"
                  alt="Attorney office intake consultation"
                  className="h-[200px] w-full object-cover"
                />
              </div>

              <div className="col-span-5 translate-y-6 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/placeholder-2.jpg"
                  alt="Person calling Kuvalis Law on mobile phone"
                  className="h-[180px] w-full object-cover"
                />
              </div>

              <div className="col-span-5 -translate-y-2 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/placeholder-3.jpg"
                  alt="Accident scene with call to lawyer"
                  className="h-[180px] w-full object-cover"
                />
              </div>

              <div className="col-span-7 rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#102545] via-[#0b1a31] to-[#061224] p-5 shadow-[0_0_0_1px_rgba(250,204,21,0.08)]">
                <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-300">
                  Why After-Hours Coverage Matters
                </div>

                <div className="stat-rotator rounded-2xl border border-white/10 bg-[#081629]/90">
                  <div className="stat-slide">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">
                      Prospective Calls
                    </div>
                    <div className="mb-2 text-4xl font-black leading-none text-yellow-400 sm:text-5xl">
                      35%
                    </div>
                    <div className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      of prospective-client calls go unanswered
                    </div>
                    <div className="mt-2 text-xs leading-5 text-slate-400">
                      Source: Clio citing a law firm client-intake study
                    </div>
                  </div>

                  <div className="stat-slide">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">
                      Speed Wins Clients
                    </div>
                    <div className="mb-2 text-4xl font-black leading-none text-yellow-400 sm:text-5xl">
                      67%
                    </div>
                    <div className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      say responding “right away” matters most
                    </div>
                    <div className="mt-2 text-xs leading-5 text-slate-400">
                      Source: Martindale-Avvo citing 2017 Clio research
                    </div>
                  </div>

                  <div className="stat-slide">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">
                      The Risk
                    </div>
                    <div className="mb-2 text-2xl font-black leading-tight text-yellow-400 sm:text-3xl">
                      Miss the call.
                    </div>
                    <div className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      Another lawyer may get the case first.
                    </div>
                    <div className="mt-2 text-xs leading-5 text-slate-400">
                      Faster response improves intake and conversion.
                    </div>
                  </div>

                  <div className="stat-slide">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300">
                      Your Opportunity
                    </div>
                    <div className="mb-2 text-2xl font-black leading-tight text-yellow-400 sm:text-3xl">
                      Answer after hours.
                    </div>
                    <div className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      Let LCI capture leads when your office is closed.
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://legalclientintake.com/#info"
                        className="inline-flex rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300"
                      >
                        Learn More About LCI
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-6 text-slate-200">
              <strong className="text-white">Important:</strong> This page is a
              demo environment created by Legal Client Intake to help attorneys
              experience how an AI receptionist could handle missed calls and
              after-hours intake for their own firm.
            </div>
          </div>

          {/* RIGHT SIDE — YOUR FIRM MODE */}
          <div className="relative min-h-[560px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a1c35] shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35 blur-[2px]"
              style={{
                backgroundImage: "url('/hero-lawyer.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#021327]/90 via-[#021327]/70 to-[#021327]/95" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="mb-3 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                  Imagine This Is Your Law Firm
                </p>

                <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
                  Your firm. Your missed calls. Your next client.
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                  This side is intentionally styled like a real local law firm so
                  you can picture how your office could present itself while LCI
                  answers calls, gathers intake details, and helps reduce missed
                  opportunities.
                </p>

                <div className="mt-6 mx-auto max-w-md rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-md">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                    Why LCI Feels Different
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Not just answering. Legal intake.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    Generic answering services focus on taking a message. LCI is
                    positioned around legal intake — helping capture matter type,
                    urgency, location, basic case context, and callback details so
                    your firm receives more useful information, not just a name and
                    phone number.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                      Solo Attorney
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                      General Practice
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                      Lackawanna County PA
                    </span>
                  </div>
                </div>
              </div>

              {/* GOLD DIVIDER */}
              <div className="my-6 flex justify-center">
                <img
                  src="/divider-gold-leaf.png"
                  alt="Decorative gold divider"
                  className="h-auto w-[240px] max-w-full object-contain"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  Practice Areas This Demo Simulates
                </h2>

                <div className="grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2 sm:text-base">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Landlord-Tenant Matters
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Real Estate Deeds
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Powers of Attorney
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Wills & Estates
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Divorce & Custody
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Adoptions
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    DUI & Theft Cases
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    LLC & Incorporation Help
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Bankruptcies
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    Personal Injury
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  The purpose of this demo is to help attorneys imagine how LCI
                  could answer calls for their own practice, especially after
                  hours, during lunch, while in court, or anytime staff are
                  unavailable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR SECTION */}
      <section className="bg-[#061224] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
              The Real Marketing Angle
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Legal intake is not the same as generic message taking.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Many services promise live answering. LCI is positioned around what
              law firms actually need: better intake context, better lead capture,
              and better follow-up potential.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Built Around Legal Matters
              </h3>
              <p className="leading-7 text-slate-300">
                Instead of only taking a message, the system can be structured to
                ask about matter type, urgency, county, and callback details so
                the attorney receives a more useful intake summary.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Designed for Missed-Call Recovery
              </h3>
              <p className="leading-7 text-slate-300">
                The biggest loss often happens after hours or when no one answers.
                LCI helps turn those silent losses into captured opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Stronger First Impression
              </h3>
              <p className="leading-7 text-slate-300">
                A caller who reaches a calm, professional legal-intake experience
                is more likely to feel that the firm is responsive, modern, and
                organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white px-4 py-16 text-[#111827] sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-block rounded-full border border-[#d4af37]/40 bg-[#fff8e1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a00]">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              How the Demo Works
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
              These FAQs explain what callers are hearing and how the demo helps
              attorneys understand what Legal Client Intake could do for their own
              practice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                Is Kuvalis Law a real law firm?
              </h3>
              <p className="leading-7 text-slate-700">
                No. Kuvalis Law is a demonstration environment created to help
                attorneys hear how an AI legal receptionist could answer calls for
                their own office.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                What happens when I call 877-462-0561?
              </h3>
              <p className="leading-7 text-slate-700">
                You will hear a live demonstration of how Legal Client Intake can
                answer missed or after-hours law firm calls in a professional,
                intake-focused way.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                Who is this demo meant for?
              </h3>
              <p className="leading-7 text-slate-700">
                This demo is primarily for solo attorneys and small law firms that
                want to hear how a legal-intake-first AI receptionist could sound
                for their own practice.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                What makes this different from generic answering services?
              </h3>
              <p className="leading-7 text-slate-700">
                The positioning is different: LCI focuses on structured legal
                intake and missed-call opportunity capture, not just message
                taking.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                Does calling create an attorney-client relationship?
              </h3>
              <p className="leading-7 text-slate-700">
                No. Calling this demo number does not create an attorney-client
                relationship, and this site should not be used to seek actual
                legal advice.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#111827]">
                How do I get this for my law firm?
              </h3>
              <p className="leading-7 text-slate-700">
                Use the contact button on this page to reach Legal Client Intake
                and learn how your firm can deploy its own natural-sounding AI
                receptionist and intake flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#021327] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="mb-10 flex w-full max-w-5xl items-center justify-between">
            <a
              href="https://kuvalislaw.com"
              className="transition hover:opacity-90"
            >
              <img
                src="/kuvalis-logo.png"
                alt="Kuvalis Law"
                className="h-20 w-auto"
              />
            </a>

            <a
              href="https://legalclientintake.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-90"
            >
              <img
                src="/lci-logo.png"
                alt="Legal Client Intake"
                className="h-18 w-auto sm:h-20"
              />
            </a>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 sm:text-base">
            <a
              href="https://legalclientintake.com/#info"
              className="transition hover:text-yellow-300"
            >
              Contact
            </a>
            <a
              href="tel:8774620561"
              className="transition hover:text-yellow-300"
            >
              877-462-0561
            </a>
          </div>

          <p className="max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
            Copyright© {currentYear}. Kuvalis Law is a demo website for Legal
            Client Intake (LCI). LCI is owned and operated by Teleringer LLC.
            All rights reserved.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-red-300">
            This is NOT a real law firm website and does not offer legal
            services. No attorney-client relationship is created by visiting this
            website, submitting information, or calling the demonstration number.
          </p>
        </div>
      </footer>
    </main>
  );
}