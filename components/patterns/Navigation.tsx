'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { ThemeToggle } from './ThemeToggle'
import { ReachLogo } from '@/components/primitives/ReachLogo'
import { Button } from '@/components/base/buttons/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuArrow,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation'
import {
  ArrowRight,
  Menu,
  X,
  Truck,
  Wrench,
  Building2,
  Warehouse,
  Factory,
  HardHat,
  ChevronRight,
} from 'lucide-react'

const equipmentLinks = {
  access: [
    { href: '/equipment/boom-lifts/', label: 'Boom Lifts', desc: 'Articulated and telescopic heavy reach.' },
    { href: '/equipment/scissor-lifts/', label: 'Scissor Lifts', desc: 'Electric and rough-terrain slab lifts.' },
    { href: '/equipment/vertical-mast-lifts/', label: 'Vertical Mast Lifts', desc: 'Zero-tailswing indoor solutions.' },
    { href: '/equipment/spider-lifts/', label: 'Spider Lifts', desc: 'Tracked crawlers for sensitive floors.' },
  ],
  mhe: [
    { href: '/equipment/forklifts/', label: 'Forklifts', desc: 'Diesel, LPG and electric counterbalanced.' },
    { href: '/equipment/reach-trucks/', label: 'Reach Trucks', desc: 'Narrow-aisle high-density stacking.' },
    { href: '/equipment/material-lifts/', label: 'Material Lifts', desc: 'Compact portable crank lifts.' },
    { href: '/equipment/scaffolding/', label: 'Scaffolding', desc: 'Modular mobile tower systems.' },
  ],
}

const serviceLinks = [
  {
    href: '/services/rental/',
    label: 'Equipment Rental',
    desc: 'Flexible short & long term rental across India.',
    icon: Truck,
  },
  {
    href: '/services/equipment-sales/',
    label: 'Equipment Sales',
    desc: 'New and certified pre-owned heavy machinery.',
    icon: Wrench,
  },
]

const industryLinks = [
  {
    href: '/industries/construction/',
    label: 'Construction',
    desc: 'Rough-terrain lifts for job sites.',
    icon: HardHat,
  },
  {
    href: '/industries/warehousing-logistics/',
    label: 'Warehousing & Logistics',
    desc: 'Narrow-aisle reach trucks and stackers.',
    icon: Warehouse,
  },
  {
    href: '/industries/manufacturing/',
    label: 'Manufacturing',
    desc: 'Safe indoor vertical access.',
    icon: Factory,
  },
  {
    href: '/industries/infrastructure/',
    label: 'Infrastructure',
    desc: 'High-reach access for major developments.',
    icon: Building2,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
      style={{
        backgroundColor: 'var(--surface-base)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="h-[72px] max-w-wide mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Navigation */}
        <div className="flex items-center gap-6 xl:gap-8">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <ReachLogo height={48} priority />
          </Link>

          {/* Desktop Navigation Menu via @/components/ui/navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Home Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={
                      <Link
                        href="/"
                        className={navigationMenuTriggerStyle({
                          className: pathname === '/' ? 'text-foreground font-semibold' : 'text-muted-foreground',
                        })}
                      />
                    }
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Equipment Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={pathname.startsWith('/equipment') ? 'text-foreground font-semibold' : ''}>
                    Equipment
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-12 gap-5 p-2 w-[780px] lg:w-[860px]">
                      {/* Featured Visual Card */}
                      <div className="col-span-4 rounded-lg overflow-hidden border border-border bg-muted/40 p-4 flex flex-col justify-between relative group">
                        <div className="relative h-28 w-full rounded-md overflow-hidden mb-3">
                          <Image
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
                            alt="Reach International equipment in operation"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="260px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute bottom-2 left-2 text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                            AWP & MHE Fleet
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Reaching All Heights</h4>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            Certified boom lifts, scissor lifts, reach trucks & forklifts across India.
                          </p>
                        </div>
                        <NavigationMenuLink
                          render={
                            <Link
                              href="/equipment/"
                              className="mt-4 flex items-center justify-between text-xs font-medium text-accent-foreground hover:underline pt-2 border-t border-border"
                            />
                          }
                        >
                          <span>Browse all equipment</span>
                          <ChevronRight className="size-3.5" />
                        </NavigationMenuLink>
                      </div>

                      {/* Access Equipment Column */}
                      <div className="col-span-4">
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground px-2 py-1.5 mb-1 border-b border-border">
                          Access Equipment
                        </div>
                        <ul className="space-y-1">
                          {equipmentLinks.access.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink
                                render={
                                  <Link
                                    href={item.href}
                                    className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground block transition-colors group"
                                  />
                                }
                              >
                                <div className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                                  {item.label}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1">{item.desc}</div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Material Handling Column */}
                      <div className="col-span-4">
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground px-2 py-1.5 mb-1 border-b border-border">
                          Material Handling
                        </div>
                        <ul className="space-y-1">
                          {equipmentLinks.mhe.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink
                                render={
                                  <Link
                                    href={item.href}
                                    className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground block transition-colors group"
                                  />
                                }
                              >
                                <div className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                                  {item.label}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1">{item.desc}</div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={pathname.startsWith('/services') ? 'text-foreground font-semibold' : ''}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[340px] gap-2 p-3">
                      {serviceLinks.map((service) => {
                        const Icon = service.icon
                        return (
                          <li key={service.href}>
                            <NavigationMenuLink
                              render={
                                <Link
                                  href={service.href}
                                  className="flex items-start gap-3 p-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                                />
                              }
                            >
                              <div className="p-2 rounded-md bg-muted text-foreground group-hover:bg-accent-foreground/10 group-hover:text-accent-foreground transition-colors shrink-0">
                                <Icon className="size-4" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                                  {service.label}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5">{service.desc}</div>
                              </div>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={pathname.startsWith('/industries') ? 'text-foreground font-semibold' : ''}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[480px] p-3">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-border px-1">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                          Industries We Serve
                        </span>
                        <NavigationMenuLink
                          render={
                            <Link href="/industries/" className="text-xs font-medium text-accent-foreground hover:underline" />
                          }
                        >
                          View all
                        </NavigationMenuLink>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {industryLinks.map((ind) => {
                          const Icon = ind.icon
                          return (
                            <NavigationMenuLink
                              key={ind.href}
                              render={
                                <Link
                                  href={ind.href}
                                  className="flex items-start gap-2.5 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                                />
                              }
                            >
                              <div className="p-1.5 rounded-md bg-muted text-foreground group-hover:bg-accent-foreground/10 group-hover:text-accent-foreground shrink-0 mt-0.5">
                                <Icon className="size-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-medium text-foreground group-hover:text-accent-foreground">
                                  {ind.label}
                                </div>
                                <div className="text-[11px] text-muted-foreground line-clamp-1">{ind.desc}</div>
                              </div>
                            </NavigationMenuLink>
                          )
                        })}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={
                      <Link
                        href="/about/"
                        className={navigationMenuTriggerStyle({
                          className: pathname.startsWith('/about') ? 'text-foreground font-semibold' : 'text-muted-foreground',
                        })}
                      />
                    }
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    render={
                      <Link
                        href="/contact/"
                        className={navigationMenuTriggerStyle({
                          className: pathname.startsWith('/contact') ? 'text-foreground font-semibold' : 'text-muted-foreground',
                        })}
                      />
                    }
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>

              {/* Popup Positioner and Viewport */}
              <NavigationMenuPositioner className="z-50">
                <NavigationMenuPopup>
                  <NavigationMenuArrow />
                </NavigationMenuPopup>
              </NavigationMenuPositioner>
            </NavigationMenu>
          </nav>
        </div>

        {/* Right actions: ThemeToggle + CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button
            href="/request-a-quote/"
            color="primary"
            size="md"
            className="hidden sm:inline-flex rounded-full px-5 shadow-xs"
            iconTrailing={<ArrowRight className="size-4" />}
          >
            Request a Quote
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors"
            style={{
              color: 'var(--text-primary)',
              backgroundColor: 'var(--surface-sunken)',
            }}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen navigation drawer */}
      <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: 'var(--surface-overlay)' }}
          />
          <Dialog.Content
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm flex flex-col overflow-y-auto"
            style={{ backgroundColor: 'var(--surface-base)' }}
            onEscapeKeyDown={() => setMobileOpen(false)}
          >
            <VisuallyHidden.Root>
              <Dialog.Title>Navigation menu</Dialog.Title>
            </VisuallyHidden.Root>

            {/* Mobile nav header */}
            <div
              className="flex items-center justify-between px-4 h-[72px] shrink-0"
              style={{ borderBottom: '1px solid var(--border-subtle)' }}
            >
              <Dialog.Close asChild>
                <Link href="/" className="flex items-center shrink-0">
                  <ReachLogo height={40} />
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="flex items-center justify-center w-10 h-10 rounded-md"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <X className="size-5" />
                </button>
              </Dialog.Close>
            </div>

            {/* Mobile nav links */}
            <nav aria-label="Mobile navigation" className="flex-1 p-4 space-y-1">
              <div className="space-y-1 mb-4">
                <p className="text-overline uppercase tracking-widest px-3 py-2 text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Access Equipment
                </p>
                {equipmentLinks.access.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>

              <div className="space-y-1 mb-4" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <p className="text-overline uppercase tracking-widest px-3 py-2 text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Material Handling
                </p>
                {equipmentLinks.mhe.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>

              <div className="space-y-1 mb-4" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <p className="text-overline uppercase tracking-widest px-3 py-2 text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                  Services
                </p>
                {serviceLinks.map((service) => (
                  <Dialog.Close asChild key={service.href}>
                    <Link
                      href={service.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {service.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>

              <div className="space-y-1" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <Dialog.Close asChild>
                  <Link
                    href="/industries/"
                    className="block px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Industries
                  </Link>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Link
                    href="/about/"
                    className="block px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    About Us
                  </Link>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Link
                    href="/contact/"
                    className="block px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Contact
                  </Link>
                </Dialog.Close>
              </div>
            </nav>

            {/* Mobile CTA */}
            <div className="p-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <Dialog.Close asChild>
                <Link
                  href="/request-a-quote/"
                  className="flex items-center justify-center w-full h-11 rounded-md text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--action-primary-bg)',
                    color: 'var(--action-primary-fg)',
                  }}
                >
                  Request a quote
                </Link>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  )
}
