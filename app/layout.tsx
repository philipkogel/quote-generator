import './globals.css'

export const metadata = {
  title: 'Quote Generator',
  description: 'Checkout quotes fenerated by the app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
