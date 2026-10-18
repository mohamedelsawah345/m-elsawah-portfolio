import type { PortfolioView } from '@/lib/view'
import type { CaseSlug } from './catalog'
import type { Section } from './types'

export type Audience = 'business' | 'technical' | 'shared'

export const sectionAudience: Record<CaseSlug, Audience[]> = {
  'construction-erp': ['business', 'business', 'technical', 'technical', 'technical', 'technical'],
  'jisr-ai': ['business', 'business', 'technical', 'business', 'technical', 'technical'],
  'textile-production': ['business', 'business', 'technical', 'technical'],
  'sales-crm': ['business', 'business', 'business', 'technical'],
  pura: ['business', 'business', 'technical', 'technical'],
  'loyalty-coupons': ['business', 'business', 'business', 'technical'],
  'audio-books': ['business', 'business', 'technical', 'technical'],
  'omnichannel-inbox': ['business', 'business', 'business', 'technical'],
  'ai-sales-agent': ['business', 'business', 'business', 'technical'],
  'attendance-ops': ['business', 'business', 'business', 'technical'],
  'sales-sync': ['business', 'business', 'technical', 'technical'],
  'ad-performance': ['business', 'business', 'technical', 'technical'],
  'master-protection': ['business', 'business', 'technical', 'shared', 'technical'],
  'ads-library': ['business', 'business', 'technical', 'technical'],
}

export function visibleSections(slug: string, sections: Section[], view: PortfolioView) {
  const audiences = sectionAudience[slug as CaseSlug]
  if (!audiences || audiences.length !== sections.length) {
    throw new Error(`Audience map mismatch for ${slug}`)
  }
  if (view === 'both') return sections
  return sections.filter((_, index) => audiences[index] === view || audiences[index] === 'shared')
}
