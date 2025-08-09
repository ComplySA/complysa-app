import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f11] to-[#333] text-white antialiased">
      <Head><title>ComplySA - Safety Guide</title></Head>
      <header className="p-4 bg-cover rounded-b-3xl shadow-xl">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-extrabold">Safety Guide</div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0014ff] to-[#6b00ff] flex items-center justify-center shadow-lg">
            <div className="text-xs font-bold">ComplySA</div>
          </div>
        </div>
      </header>
      <main className="p-4 pb-24">
        <section className="grid grid-cols-2 gap-4 mt-4">
          <Link href="/emergency"><a className="block"><div className="w-full h-36 rounded-2xl bg-gradient-to-br from-black/30 to-white/5 shadow-md flex flex-col items-center justify-center gap-3">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2A00FF" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>
            <span className="text-white text-sm font-medium">Emergency Contact List</span>
          </div></a></Link>
          <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-black/30 to-white/5 shadow-md flex flex-col items-center justify-center gap-3">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="1.5"><path d="M12 2v6"/></svg>
            <span className="text-white text-sm font-medium">Incident / Accident Reporting</span>
          </div>
        </section>
      </main>
    </div>
  )
}
