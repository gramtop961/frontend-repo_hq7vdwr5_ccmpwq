export default function Guide() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">How the migration works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl bg-gray-50">
            <div className="text-sm font-semibold text-gray-600 mb-2">Step 1</div>
            <h3 className="text-xl font-bold mb-2">Connect Wallet</h3>
            <p className="text-gray-600">Connect your Solana wallet to verify ownership and view your eligible balance for migration.</p>
          </div>
          <div className="p-6 border rounded-xl bg-gray-50">
            <div className="text-sm font-semibold text-gray-600 mb-2">Step 2</div>
            <h3 className="text-xl font-bold mb-2">Verify Old Token</h3>
            <p className="text-gray-600">Paste the old token mint address. We fetch your holdings and compute the migration amount.</p>
          </div>
          <div className="p-6 border rounded-xl bg-gray-50">
            <div className="text-sm font-semibold text-gray-600 mb-2">Step 3</div>
            <h3 className="text-xl font-bold mb-2">Migrate</h3>
            <p className="text-gray-600">Approve the transaction. Your old tokens are burned or locked and you receive the new tokens.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
