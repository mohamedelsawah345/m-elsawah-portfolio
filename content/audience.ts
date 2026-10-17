import type { PortfolioView } from '@/lib/view'
import type { CaseSlug } from './catalog'
import type { Section } from './types'

export type Audience = 'business' | 'technical' | 'shared'

export const sectionAudience: Record<CaseSlug, Audience[]> = {
  'construction-erp': ['business', 'business', 'technical', 'shared', 'technical', 'technical'],
  'jisr-ai': ['business', 'business', 'technical', 'shared', 'technical', 'technical'],
  'textile-production': ['business', 'business', 'technical', 'technical'],
  'sales-crm': ['business', 'business', 'shared', 'technical'],
  pura: ['business', 'business', 'shared', 'technical'],
  'loyalty-coupons': ['business', 'business', 'shared', 'technical'],
  'audio-books': ['business', 'business', 'shared', 'technical'],
  'omnichannel-inbox': ['business', 'business', 'shared', 'technical'],
  'ai-sales-agent': ['business', 'business', 'shared', 'shared'],
  'attendance-ops': ['business', 'business', 'shared', 'technical'],
  'sales-sync': ['business', 'business', 'shared', 'technical'],
  'ad-performance': ['business', 'business', 'shared', 'technical'],
  'master-protection': ['business', 'business', 'shared', 'shared', 'technical'],
  'ads-library': ['business', 'business', 'shared', 'technical'],
}

export function visibleSections(slug: string, sections: Section[], view: PortfolioView) {
  const audiences = sectionAudience[slug as CaseSlug]
  if (!audiences || audiences.length !== sections.length) {
    throw new Error(`Audience map mismatch for ${slug}`)
  }
  if (view === 'both') return sections
  return sections.filter((_, index) => audiences[index] === view || audiences[index] === 'shared')
}
