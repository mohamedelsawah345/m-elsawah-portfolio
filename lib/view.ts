export const views = ['business', 'technical', 'both'] as const

export type PortfolioView = (typeof views)[number]

export const viewCookie = 'portfolio-view'

export function parseView(value: string | undefined | null): PortfolioView | null {
  if (value === 'business' || value === 'technical' || value === 'both') return value
  return null
}

export function caseHref(locale: string, slug: string, view: PortfolioView) {
  const path = `/${locale}/work/${slug}`
  return view === 'both' ? path : `${path}?view=${view}`
}
