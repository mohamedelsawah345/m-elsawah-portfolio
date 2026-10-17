'use client'

import { usePathname } from 'next/navigation'
import { languages, type Locale } from '@/lib/i18n'

export function LanguageSelect({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()

  return (
    <select
      aria-label={label}
      className="lang-select"
      value={locale}
      onChange={(event) => {
        const next = event.target.value
        const parts = pathname.split('/')
        parts[1] = next
        const target = parts.join('/') || `/${next}`
        window.location.assign(`${target}${window.location.search}`)
      }}
    >
      {languages.map((language) => (
        <option key={language.id} value={language.id}>
          {language.name}
        </option>
      ))}
    </select>
  )
}
