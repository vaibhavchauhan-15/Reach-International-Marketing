'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { StatusBadge } from '@/components/spectrumui/status-badge'
import { User01, Mail01, Phone, MarkerPin01, Send01, CheckCircle } from '@untitledui/icons'

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    equipmentType: 'Boom Lifts',
    requirement: 'Rental',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <Card className="p-8 md:p-10 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="flex justify-center mb-3">
          <StatusBadge status="success" label="Inquiry Received" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">
          Thank you, {formData.name || 'there'}!
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Your quote inquiry for {formData.equipmentType} ({formData.requirement}) has been recorded. Our heavy machinery specialists will connect with you promptly.
        </p>
        <Button
          variant="secondary"
          size="md"
          className="rounded-full"
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              location: '',
              equipmentType: 'Boom Lifts',
              requirement: 'Rental',
              message: '',
            })
          }}
        >
          Submit Another Request
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="e.g. Rajesh Sharma"
            isRequired
            icon={User01}
            value={formData.name}
            onChange={(val) => setFormData((prev) => ({ ...prev, name: val }))}
          />
          <Input
            label="Business Email"
            type="email"
            placeholder="e.g. rajesh@company.in"
            isRequired
            icon={Mail01}
            value={formData.email}
            onChange={(val) => setFormData((prev) => ({ ...prev, email: val }))}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            isRequired
            icon={Phone}
            value={formData.phone}
            onChange={(val) => setFormData((prev) => ({ ...prev, phone: val }))}
          />
          <Input
            label="Project Location"
            placeholder="e.g. Bhiwandi, Maharashtra"
            isRequired
            icon={MarkerPin01}
            value={formData.location}
            onChange={(val) => setFormData((prev) => ({ ...prev, location: val }))}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-foreground/80 tracking-wide">
              Equipment Category
            </label>
            <select
              value={formData.equipmentType}
              onChange={(e) => setFormData((prev) => ({ ...prev, equipmentType: e.target.value }))}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm font-medium transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring"
            >
              <option value="Boom Lifts">Articulated &amp; Telescopic Boom Lifts</option>
              <option value="Scissor Lifts">Electric &amp; Rough-Terrain Scissor Lifts</option>
              <option value="Forklifts">Electric &amp; Diesel Counterbalanced Forklifts</option>
              <option value="Reach Trucks">High-Bay Reach Trucks</option>
              <option value="Vertical Mast Lifts">Vertical Mast Lifts</option>
              <option value="Spider Lifts">Tracked Spider Lifts</option>
              <option value="Material Lifts">Portable Material Lifts</option>
              <option value="Modular Scaffolding">Modular Aluminum Scaffolding</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 text-foreground/80 tracking-wide">
              Commercial Requirement
            </label>
            <select
              value={formData.requirement}
              onChange={(e) => setFormData((prev) => ({ ...prev, requirement: e.target.value }))}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm font-medium transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring"
            >
              <option value="Rental">Equipment Rental (Short &amp; Long-Term Fleet)</option>
              <option value="Purchase / Sales">Equipment Purchase (New / Certified Refurbished)</option>
              <option value="Both">Both Rental &amp; Purchase Evaluation</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1.5 text-foreground/80 tracking-wide">
            Project Scope &amp; Working Height / Payload Details
          </label>
          <textarea
            rows={3}
            placeholder="Specify working height (e.g. 16m), tonnage capacity, site floor type, or estimated rental duration..."
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full p-3 rounded-lg border border-input bg-background text-foreground text-sm leading-relaxed transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Free technical consultation &amp; rapid mobilization quote within 24 hours.
          </p>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={loading}
            iconTrailing={Send01}
            className="w-full sm:w-auto rounded-full px-8 shadow-sm"
          >
            Submit Quote Request
          </Button>
        </div>
      </form>
    </Card>
  )
}
