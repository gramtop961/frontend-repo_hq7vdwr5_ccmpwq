import { useMemo, useState } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const SOLANA_RPC = import.meta.env.VITE_SOLANA_RPC || 'https://api.mainnet-beta.solana.com'

export default function MigrationWidget() {
  const { publicKey } = useWallet()
  const [oldMint, setOldMint] = useState('')
  const [eligible, setEligible] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const connection = useMemo(() => new Connection(SOLANA_RPC, 'confirmed'), [])

  const fetchEligibility = async () => {
    setError('')
    setEligible(null)
    if (!publicKey) { setError('Connect your wallet first.'); return }
    if (!oldMint) { setError('Enter old token mint.'); return }
    try {
      setLoading(true)
      const owner = new PublicKey(publicKey.toBase58())
      const mint = new PublicKey(oldMint)
      const resp = await connection.getTokenAccountsByOwner(owner, { mint })
      let total = 0n
      for (const acc of resp.value) {
        const amount = acc.account.data.readBigUInt64LE ? acc.account.data.readBigUInt64LE(64) : 0n
        total += amount
      }
      setEligible({ amountRaw: total.toString(), amount: Number(total) / 1e9 })
    } catch (e) {
      setError(e.message || 'Failed to check balance')
    } finally {
      setLoading(false)
    }
  }

  const onMigrate = async () => {
    if (!publicKey || !eligible) return
    alert('This demo shows the flow. Hook this to your migration program or backend signer.')
  }

  return (
    <div className="p-6 bg-white/80 backdrop-blur border rounded-2xl shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold">Migration Portal</h3>
        <WalletMultiButton className="!bg-black !text-white" />
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Old Token Mint</label>
          <input value={oldMint} onChange={e => setOldMint(e.target.value)} placeholder="Enter old mint address" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <button onClick={fetchEligibility} disabled={loading} className="w-full rounded-md bg-black text-white py-2 font-semibold hover:bg-gray-900 disabled:opacity-60">
          {loading ? 'Checking…' : 'Check Eligibility'}
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}

        {eligible && (
          <div className="rounded-lg bg-gray-50 p-3 text-sm">
            <div className="flex items-center justify-between"><span>Eligible Amount</span><span className="font-mono">{eligible.amount}</span></div>
            <button onClick={onMigrate} className="mt-3 w-full rounded-md bg-emerald-600 text-white py-2 font-semibold hover:bg-emerald-700">Migrate</button>
          </div>
        )}
      </div>
    </div>
  )
}
