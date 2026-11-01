import Image from 'next/image'
import Link from 'next/link'

const logoSrc = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grok_1793372659421.jpg-QD5NJajGTz160ptr1ThYLauuCOXbP8.jpeg'

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-white text-[#111111]"><header className="border-b border-neutral-200"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"><Link href="/" aria-label="HM Business Services home"><Image src={logoSrc} alt="HM Business Services" width={180} height={96} priority className="h-auto w-[132px]" /></Link><Link className="text-sm text-neutral-600 underline-offset-4 hover:underline" href="/">Back to home</Link></div></header><article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">HM Business Services LLC</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h1><p className="mt-4 text-sm text-neutral-500">Last updated: 31 October 2026</p><div className="mt-10 space-y-8 text-sm leading-7 text-neutral-700">{children}</div></article><footer className="border-t border-neutral-200 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 HM Business Services LLC</span><a className="underline underline-offset-4" href="mailto:info@hmbservices.cc">info@hmbservices.cc</a></div></footer></main>
}
