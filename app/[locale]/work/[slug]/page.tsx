import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { CaseView } from '@/components/site'
import { catalog } from '@/content/catalog'
import { getDictionary } from '@/content'
import { isLocale, locales } from '@/lib/i18n'
import { parseView, viewCookie } from '@/lib/view'

export function generateStaticParams() {
  return locales.flatMap((locale) => catalog.map((item) => ({ locale, slug: item.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const { ui, cases } = getDictionary(locale)
  const study = cases.find((entry) => entry.slug === slug)
  if (!study) return {}
  return { title: `${study.title} ${study.titleEm} — Mohamed Elsawah`, description: study.lead }
}

export default async function CasePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>
  searchParams: Promise<{ view?: string }>
}) {
  const { locale, slug } = await params
  const { view: requested } = await searchParams
  if (!isLocale(locale)) notFound()
  const item = catalog.find((entry) => entry.slug === slug)
  const { ui, cases } = getDictionary(locale)
  const study = cases.find((entry) => entry.slug === slug)
  if (!item || !study) notFound()
  const stored = (await cookies()).get(viewCookie)?.value
  const view = parseView(requested) ?? parseView(stored) ?? 'both'
  return <CaseView locale={locale} ui={ui} study={study} number={item.number} view={view} />
}
