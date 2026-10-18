export type Panel = {
  title: string
  note?: string
  chips?: string[]
  rows?: { label: string; value?: string }[]
}

export type Section = {
  heading: string
  notes?: string[]
  chips?: string[]
  bullets?: string[]
  cards?: { title: string; text: string }[]
  steps?: string[]
  stepsCaption?: string
  lanes?: { title: string; items: string[] }[]
  lanesCaption?: string
  panels?: Panel[]
  table?: { label: string; value: string }[]
  thread?: { who: string; text: string }[]
}

export type CaseCopy = {
  slug: string
  domain: string
  cardTitle: string
  cardDescription: string
  result: string
  title: string
  titleEm: string
  lead: string
  facts: { label: string; value: string }[]
  sections: Section[]
}

export type UiCopy = {
  metaTitle: string
  metaDescription: string
  language: string
  nav: { work: string; about: string; contact: string; allWork: string; resume: string; menu: string }
  hero: { status: string; location: string; before: string; em: string; after: string; copy: string; cta: string }
  proof: { label: string; years: string; domains: string; ownership: string; reach: string; region: string }
  work: { kicker: string; before: string; em: string; intro: string; read: string; system: string }
  about: { kicker: string; before: string; em: string; body: string; more: string }
  footer: { kicker: string; before: string; em: string; cta: string; rights: string; role: string; linkedin: string }
  caseKicker: string
  back: string
  groups: { kicker: string; operations: string; sales: string; commerce: string; products: string }
  view: { label: string; business: string; technical: string; both: string; note: { business: string; technical: string; both: string } }
}

export type Dictionary = {
  ui: UiCopy
  cases: CaseCopy[]
}
