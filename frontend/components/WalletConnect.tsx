
'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function WalletConnect() {
  const { isConnected, address } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div className="text-sm">
        <p>Carteira conectada: {address}</p>
        <button onClick={() => disconnect()}>Desconectar</button>
      </div>
    )

  return (
    <button onClick={() => connect({ connector: connectors[0] })}>
      Conectar Carteira
    </button>
  )
}
