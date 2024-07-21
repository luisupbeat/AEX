export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        layout principal
        <main>{children}</main>
      </body>
    </html>
  )
}