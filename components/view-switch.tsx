'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { PortfolioView } from '@/lib/view'
import { viewCookie } from '@/lib/view'

const options: PortfolioView[] = ['business', 'technical', 'both']

export function ViewSwitch({
  view,
  label,
  labels,
}: {
  view: PortfolioView
  label: string
  labels: { label: string; business: string; technical: string; both: string; note: Record<PortfolioView, string> }
}) {
  const router = useRouter()

  useEffect(() => {
    window.sessionStorage.setItem(viewCookie, view)
    document.cookie = `${viewCookie}=${view}; Path=/; Max-Age=2592000; SameSite=Lax`
  }, [view])

  function choose(next: PortfolioView) {
    window.sessionStorage.setItem(viewCookie, next)
    document.cookie = `${viewCookie}=${next}; Path=/; Max-Age=2592000; SameSite=Lax`
    const url = new URL(window.location.href)
    if (next === 'both') url.searchParams.delete('view')
    else url.searchParams.set('view', next)
    router.replace(`${url.pathname}${url.search}`, { scroll: false })
  }

  return (
    <div className="view-switch">
      <p className="view-switch-label">{label}</p>
      <div role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={view === option}
            className={view === option ? 'is-active' : undefined}
            onClick={() => choose(option)}
          >
            {labels[option]}
          </button>
        ))}
      </div>
      <p className="view-switch-note">{labels.note[view]}</p>
    </div>
  )
}
