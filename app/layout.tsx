import './globals.css'
import Topbar from './Header/Topbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>

      <div className="bg-midnight min-h-screen bg-background-texture">

        {children}
        <Topbar />
      </div>

    </section>
  )
}
