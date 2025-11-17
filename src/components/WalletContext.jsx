import { useEffect, useMemo, useState } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import '@solana/wallet-adapter-react-ui/styles.css'

const SOLANA_RPC = import.meta.env.VITE_SOLANA_RPC || 'https://api.mainnet-beta.solana.com'

export default function WalletContext({ children }) {
  const [wallets, setWallets] = useState([])
  const network = WalletAdapterNetwork.Mainnet

  // Dynamically import wallet adapters to avoid bundling Node polyfills at startup
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import('@solana/wallet-adapter-wallets')
        const { PhantomWalletAdapter, SolflareWalletAdapter, BackpackWalletAdapter } = mod
        const instances = [
          new PhantomWalletAdapter(),
          new SolflareWalletAdapter(),
          new BackpackWalletAdapter(),
        ]
        if (!cancelled) setWallets(instances)
      } catch (e) {
        console.error('Failed to load wallet adapters', e)
      }
    })()
    return () => { cancelled = true }
  }, [])

  const endpoint = useMemo(() => SOLANA_RPC, [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
