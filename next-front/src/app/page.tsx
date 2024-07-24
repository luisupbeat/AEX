import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <main>

      <Link href="/dashboard">Dashboard</Link>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1>Hello world!</h1>
    </main>
  )
}