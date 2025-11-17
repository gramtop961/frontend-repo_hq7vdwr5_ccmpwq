import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Guide from './components/Guide'
import MigrationWidget from './components/MigrationWidget'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section id="portal" className="relative -mt-24 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">Swap your tokens</h2>
              <p className="text-white/70 mb-6">Enter your old mint to check eligibility and migrate to the new token. This demo shows the flow and wallet connection; wire it to your program for production.</p>
              <MigrationWidget />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Quick notes</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Supports Phantom, Solflare, Backpack (others easy to add).</li>
                <li>Uses your RPC endpoint; set VITE_SOLANA_RPC to override.</li>
                <li>Add your on-chain program or backend signer for actual migration.</li>
                <li>This UI never stores secrets; all signing stays in the wallet.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="guide">
        <Guide />
      </div>

      <footer className="py-10 text-center text-white/60">© {new Date().getFullYear()} Solama Migration Portal</footer>
    </div>
  )
}

export default App
