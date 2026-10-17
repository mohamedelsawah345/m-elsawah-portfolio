import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { HomePage } from '@/components/site'
import { getDictionary } from '@/content'
import { isLocale, locales } from '@/lib/i18n'
import { parseView, viewCookie } from '@/lib/view'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { ui } = getDictionary(locale)
  return { title: ui.metaTitle, description: ui.metaDescription }
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { ui, cases } = getDictionary(locale)
  const stored = (await cookies()).get(viewCookie)?.value
  return <HomePage locale={locale} ui={ui} cases={cases} view={parseView(stored) ?? 'both'} />
}
