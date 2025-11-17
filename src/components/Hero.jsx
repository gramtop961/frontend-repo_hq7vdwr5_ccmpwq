import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">Solana Token Migration</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Seamless migration to your new token standard
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Connect your wallet, verify your old token, and swap to the new token in a few clicks. Secure. Fast. On Solana.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
