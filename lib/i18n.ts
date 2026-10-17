export const locales = ['en', 'ar', 'es', 'de', 'it', 'pt', 'zh'] as const

export type Locale = (typeof locales)[number]

export const languages: { id: Locale; name: string; dir: 'ltr' | 'rtl' }[] = [
  { id: 'en', name: 'English', dir: 'ltr' },
  { id: 'ar', name: 'العربية', dir: 'rtl' },
  { id: 'es', name: 'Español', dir: 'ltr' },
  { id: 'de', name: 'Deutsch', dir: 'ltr' },
  { id: 'it', name: 'Italiano', dir: 'ltr' },
  { id: 'pt', name: 'Português', dir: 'ltr' },
  { id: 'zh', name: '中文', dir: 'ltr' },
]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localeDir(locale: string): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}
