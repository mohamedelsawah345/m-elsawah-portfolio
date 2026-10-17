import { casesAr } from './cases/ar'
import { casesDe } from './cases/de'
import { casesEn } from './cases/en'
import { casesEs } from './cases/es'
import { casesIt } from './cases/it'
import { casesPt } from './cases/pt'
import { casesZh } from './cases/zh'
import { catalog } from './catalog'
import type { CaseCopy, Dictionary } from './types'
import { ui } from './ui'
import { isLocale, type Locale } from '@/lib/i18n'

const cases: Record<Locale, CaseCopy[]> = {
  en: casesEn,
  ar: casesAr,
  es: casesEs,
  de: casesDe,
  it: casesIt,
  pt: casesPt,
  zh: casesZh,
}

export function getDictionary(locale: string): Dictionary {
  const key: Locale = isLocale(locale) ? locale : 'en'
  const selected = cases[key]
  if (selected.length !== catalog.length) {
    throw new Error(`Missing case studies for ${key}`)
  }
  return { ui: ui[key], cases: selected }
}
