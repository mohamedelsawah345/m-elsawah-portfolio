import { ArrowLeft, ArrowUpRight, ExternalLink, Mail, Menu, MoveUpRight } from 'lucide-react'
import { LanguageSelect } from '@/components/language-select'
import { ViewSwitch } from '@/components/view-switch'
import { visibleSections } from '@/content/audience'
import { catalog, featuredSlugs, groups } from '@/content/catalog'
import type { CaseCopy, Section, UiCopy } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { caseHref, type PortfolioView } from '@/lib/view'

function ArrowIcon() {
  return <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
}

export function SiteHeader({ locale, ui, homeHref }: { locale: Locale; ui: UiCopy; homeHref: string }) {
  return (
    <header className="site-header">
      <a className="brand" href={homeHref} aria-label={ui.metaTitle}>
        <span className="brand-mark">ME</span>
        <span className="brand-name">Mohamed Elsawah</span>
      </a>
      <nav className="desktop-nav" aria-label={ui.nav.work}>
        <a href={`${homeHref}#work`}>{ui.nav.work}</a>
        <a href={`${homeHref}#about`}>{ui.nav.about}</a>
        <a href={`${homeHref}#contact`}>{ui.nav.contact}</a>
      </nav>
      <div className="header-actions">
        <LanguageSelect locale={locale} label={ui.language} />
        <a className="resume-link" href={`${homeHref}#all-work`}>
          {ui.nav.allWork} <ArrowIcon />
        </a>
        <button className="menu-button" type="button" aria-label={ui.nav.menu}>
          <Menu aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export function HomePage({ locale, ui, cases, view }: { locale: Locale; ui: UiCopy; cases: CaseCopy[]; view: PortfolioView }) {
  const home = `/${locale}`
  const showTags = view !== 'business'
  const featured = featuredSlugs.flatMap((slug) => {
    const item = catalog.find((entry) => entry.slug === slug)
    const study = cases.find((entry) => entry.slug === slug)
    return item && study ? [{ item, study }] : []
  })
  return (
    <main>
      <SiteHeader locale={locale} ui={ui} homeHref={home} />
      <section id="top" className="hero section-shell">
        <div className="eyebrow">
          <span className="status-dot" /> {ui.hero.status} <span className="eyebrow-location">· {ui.hero.location}</span>
        </div>
        <h1>
          {ui.hero.before} <em>{ui.hero.em}</em> {ui.hero.after}
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">{ui.hero.copy}</p>
          <a className="primary-button" href={`${home}#work`}>
            {ui.hero.cta} <ArrowIcon />
          </a>
        </div>
      </section>
      <section className="proof-strip" aria-label={ui.proof.label}>
        <div className="section-shell proof-grid">
          <div><strong>10+</strong><span>{ui.proof.years}</span></div>
          <div><strong>14</strong><span>{ui.proof.domains}</span></div>
          <div><strong>360°</strong><span>{ui.proof.ownership}</span></div>
          <div><strong>EU</strong><span>{ui.proof.region}</span></div>
        </div>
      </section>
      <section id="work" className="work section-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{ui.work.kicker}</p>
            <h2>
              {ui.work.before}
              <br />
              <em>{ui.work.em}</em>
            </h2>
          </div>
          <p className="section-intro">{ui.work.intro}</p>
        </div>
        <div className="case-list">
          {featured.map(({ item, study }) => (
            <article className={`case-card ${item.accent}`} key={item.slug}>
              <div className="case-visual">
                <span className="case-number">{item.number}</span>
                <div className="visual-lines"><i /><i /><i /></div>
                <span className="visual-label">{ui.work.system} / {item.number}</span>
              </div>
              <div className="case-content">
                <p className="case-domain">{study.domain}</p>
                <h3>{study.cardTitle}</h3>
                <p className="case-description">{study.cardDescription}</p>
                <div className="case-meta">
                  <span className="case-result">{study.result}</span>
                  {showTags ? <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div> : null}
                </div>
                <a className="case-link" href={caseHref(locale, item.slug, view)}>{ui.work.read} <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
        <div id="all-work" className="work-groups">
          <p className="section-kicker">{ui.groups.kicker}</p>
          {groups.map((group) => (
            <section className="work-group" key={group} aria-labelledby={`group-${group}`}>
              <h2 id={`group-${group}`}>{ui.groups[group]}</h2>
              <div className="group-list">
                {catalog.filter((item) => item.group === group).map((item) => {
                  const study = cases.find((entry) => entry.slug === item.slug)
                  if (!study) return null
                  return (
                    <a className="group-row" href={caseHref(locale, item.slug, view)} key={item.slug}>
                      <span className="group-number">{item.number}</span>
                      <span>
                        <span className="group-domain">{study.domain}</span>
                        <strong>{study.cardTitle}</strong>
                      </span>
                      {showTags ? <span className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</span> : <span />}
                    </a>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section id="about" className="about section-shell">
        <div className="about-label">
          <span className="section-kicker">{ui.about.kicker}</span>
          <span className="about-line" />
        </div>
        <div>
          <h2>{ui.about.before} <em>{ui.about.em}</em></h2>
          <p>{ui.about.body}</p>
          <a className="text-link" href={`${home}#contact`}>
            {ui.about.more} <MoveUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>
      <footer id="contact" className="footer section-shell">
        <div>
          <p className="section-kicker">{ui.footer.kicker}</p>
          <h2>
            {ui.footer.before}
            <br />
            <em>{ui.footer.em}</em>
          </h2>
        </div>
        <a className="contact-button" href="mailto:hello@alexmorgan.dev">
          {ui.footer.cta} <Mail aria-hidden="true" className="h-4 w-4" />
        </a>
        <div className="footer-bottom">
          <span>{ui.footer.rights}</span>
          <span>{ui.footer.role}</span>
          <a href={`${home}#contact`}>{ui.footer.linkedin} <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
        </div>
      </footer>
    </main>
  )
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="case-section">
      <h2>{section.heading}</h2>
      {section.notes?.map((note) => <p className="case-note" key={note}>{note}</p>)}
      {section.chips ? <div className="chip-row">{section.chips.map((chip) => <span key={chip}>{chip}</span>)}</div> : null}
      {section.bullets ? <ul className="problem-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
      {section.cards ? (
        <div className="impact-grid">
          {section.cards.map((card) => (
            <article key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>
          ))}
        </div>
      ) : null}
      {section.steps ? (
        <figure className="diagram">
          <ol className="step-grid">
            {section.steps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>
            ))}
          </ol>
          {section.stepsCaption ? <p className="diagram-caption">{section.stepsCaption}</p> : null}
        </figure>
      ) : null}
      {section.lanes ? (
        <figure className="diagram">
          <div className="lane-grid">
            {section.lanes.map((lane) => (
              <div key={lane.title}><h3>{lane.title}</h3><ol>{lane.items.map((item) => <li key={item}>{item}</li>)}</ol></div>
            ))}
          </div>
          {section.lanesCaption ? <p className="diagram-caption">{section.lanesCaption}</p> : null}
        </figure>
      ) : null}
      {section.thread ? (
        <ol className="demo-thread">
          {section.thread.map((line) => (
            <li key={line.text} className={line.who === 'Timo' || line.who === 'تيمو' ? 'agent' : 'customer'}>
              <span>{line.who}</span>{line.text}
            </li>
          ))}
        </ol>
      ) : null}
      {section.table ? (
        <table className="stack-table">
          <tbody>
            {section.table.map((row) => (
              <tr key={row.label}><th scope="row">{row.label}</th><td>{row.value}</td></tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </section>
  )
}

export function CaseView({ locale, ui, study, number, view }: { locale: Locale; ui: UiCopy; study: CaseCopy; number: string; view: PortfolioView }) {
  const sections = visibleSections(study.slug, study.sections, view)
  return (
    <main>
      <SiteHeader locale={locale} ui={ui} homeHref={`/${locale}`} />
      <article className="case-page section-shell">
        <a className="back-link" href={`/${locale}#work`}>
          <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> {ui.back}
        </a>
        <p className="section-kicker">{ui.caseKicker} {number}</p>
        <h1>{study.title} <em>{study.titleEm}</em></h1>
        <ViewSwitch view={view} label={ui.view.label} labels={ui.view} />
        <p className="case-lead">{study.lead}</p>
        <dl className="case-facts">
          {study.facts.map((fact) => (
            <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>
        {sections.map((section) => <SectionBlock key={section.heading} section={section} />)}
      </article>
    </main>
  )
}
