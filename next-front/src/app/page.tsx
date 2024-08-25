import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <main>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}