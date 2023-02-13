import './globals.css'
import Topbar from './Header/Topbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html translate="no">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="bg-midnight min-h-screen bg-background-texture">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  )
}


