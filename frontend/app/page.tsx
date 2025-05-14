
'use client'

import WalletConnect from '../components/WalletConnect'
import WorldIDWidget from '../components/WorldIDWidget'

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">VoxReward</h1>
      <WalletConnect />
      <WorldIDWidget />
    </main>
  )
}
