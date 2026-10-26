'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck, Award, Zap } from 'lucide-react';
import { LogoLoop } from '@/components/ui/logo-loop';
import { clientsRow1, clientsRow2 } from './ClientLogos';

export function ClientsSection() {
  return (
    <section
      id="clients-section"
      className="w-full py-16 md:py-24 overflow-hidden relative"
      style={{
        backgroundColor: 'var(--surface-base)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Background radial gradient accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--brand-blue, #008CFC) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs"
            style={{
              backgroundColor: 'var(--surface-tint)',
              color: 'var(--brand-blue, #008CFC)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE CLIENT PORTFOLIO</span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Trusted by India&apos;s Industry Leaders
          </h2>

          <p
            className="text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            From national infrastructure mega-projects and oil refineries to automotive factories and high-bay logistics hubs, India&apos;s top public and private enterprises depend on Reach International for reliable aerial access and material handling equipment.
          </p>

          {/* Quick Credibility Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto">
            <div
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-2.5 justify-center shadow-2xs"
              style={{
                backgroundColor: 'var(--surface-sunken)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <ShieldCheck className="w-4 h-4 text-[var(--icon-accent)] flex-none" />
              <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                100% Certified Fleet
              </span>
            </div>

            <div
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-2.5 justify-center shadow-2xs"
              style={{
                backgroundColor: 'var(--surface-sunken)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <Zap className="w-4 h-4 text-[var(--icon-accent)] flex-none" />
              <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                &lt;5% Target Breakdown
              </span>
            </div>

            <div
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-2.5 justify-center shadow-2xs"
              style={{
                backgroundColor: 'var(--surface-sunken)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <Award className="w-4 h-4 text-[var(--icon-accent)] flex-none" />
              <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                10+ Years Excellence
              </span>
            </div>

            <div
              className="px-3.5 py-2.5 rounded-xl border flex items-center gap-2.5 justify-center shadow-2xs"
              style={{
                backgroundColor: 'var(--surface-sunken)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <Building2 className="w-4 h-4 text-[var(--icon-accent)] flex-none" />
              <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                Pan-India Deployment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Dual Logo Tracks */}
      <div className="w-full flex flex-col gap-6 md:gap-8 my-2">
        {/* Track 1: Left-to-Right Scrolling */}
        <div className="w-full">
          <LogoLoop
            logos={clientsRow1}
            direction="right"
            speed={45}
            logoHeight={64}
            gap={24}
            pauseOnHover={true}
            draggable={true}
            scaleOnHover={true}
            labels="hover"
            fadeOut={true}
            fadeOutWidth={0.12}
            ariaLabel="Enterprise clients row 1"
          />
        </div>

        {/* Track 2: Right-to-Left Scrolling */}
        <div className="w-full">
          <LogoLoop
            logos={clientsRow2}
            direction="left"
            speed={45}
            logoHeight={64}
            gap={24}
            pauseOnHover={true}
            draggable={true}
            scaleOnHover={true}
            labels="hover"
            fadeOut={true}
            fadeOutWidth={0.12}
            ariaLabel="Enterprise clients row 2"
          />
        </div>
      </div>

      {/* Footer CTA & Hint */}
      <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 mt-10 text-center relative z-10">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          <span>Hover over any client emblem to see company details.</span>
          <span className="hidden sm:inline">&bull;</span>
          <Link
            href="/request-a-quote/"
            className="inline-flex items-center gap-1 font-bold transition-all hover:underline"
            style={{ color: 'var(--brand-blue, #008CFC)' }}
          >
            <span>Partner with Reach International</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
