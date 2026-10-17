export const groups = ['operations', 'sales', 'commerce', 'products'] as const

export type WorkGroup = (typeof groups)[number]

export const featuredSlugs = ['construction-erp', 'jisr-ai', 'ai-sales-agent', 'omnichannel-inbox'] as const

export const catalog = [
  { slug: 'construction-erp', number: '01', accent: 'blue', group: 'operations', tags: ['Next.js', '.NET', 'PostgreSQL', 'In-app AI'] },
  { slug: 'jisr-ai', number: '02', accent: 'violet', group: 'products', tags: ['Next.js', 'Prisma', 'Clinical AI'] },
  { slug: 'textile-production', number: '03', accent: 'orange', group: 'operations', tags: ['Next.js', 'PostgreSQL', 'Scheduling'] },
  { slug: 'sales-crm', number: '04', accent: 'blue', group: 'sales', tags: ['Next.js', 'Supabase', 'Meta Lead Ads'] },
  { slug: 'pura', number: '05', accent: 'violet', group: 'products', tags: ['Next.js', 'Supabase', 'Resend'] },
  { slug: 'loyalty-coupons', number: '06', accent: 'orange', group: 'operations', tags: ['ASP.NET', 'SQL Server', 'QR'] },
  { slug: 'audio-books', number: '07', accent: 'blue', group: 'products', tags: ['Python', 'GPT-4o', 'ElevenLabs'] },
  { slug: 'omnichannel-inbox', number: '08', accent: 'violet', group: 'sales', tags: ['React Native', 'Chatwoot', 'Meta APIs'] },
  { slug: 'ai-sales-agent', number: '09', accent: 'orange', group: 'sales', tags: ['Next.js', 'WhatsApp API', 'n8n'] },
  { slug: 'attendance-ops', number: '10', accent: 'blue', group: 'operations', tags: ['Python', 'Discord', 'Google Sheets'] },
  { slug: 'sales-sync', number: '11', accent: 'violet', group: 'commerce', tags: ['n8n', 'WooCommerce', 'Google Sheets'] },
  { slug: 'ad-performance', number: '12', accent: 'orange', group: 'commerce', tags: ['n8n', 'Meta API', 'Google Sheets'] },
  { slug: 'master-protection', number: '13', accent: 'blue', group: 'sales', tags: ['n8n', 'WhatsApp', 'SuiteCRM'] },
  { slug: 'ads-library', number: '14', accent: 'violet', group: 'commerce', tags: ['Python', 'Selenium', 'Excel'] },
] as const

export type CaseSlug = (typeof catalog)[number]['slug']
