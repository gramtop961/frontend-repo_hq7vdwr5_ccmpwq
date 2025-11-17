import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-wide">Solama Migration</a>
        <nav className="flex items-center gap-6 text-white/80">
          <a href="#guide" className="hover:text-white">Guide</a>
          <a href="#portal" className="hover:text-white">Portal</a>
          <WalletMultiButton className="!bg-white !text-black !px-4 !py-2 !rounded-md" />
        </nav>
      </div>
    </header>
  )
}
