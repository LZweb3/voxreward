
'use client'

import { IDKitWidget, ISuccessResult } from '@worldcoin/idkit'

export default function WorldIDWidget() {
  const handleProof = async (proof: ISuccessResult) => {
    console.log('Proof:', proof)
    alert('Verificado com sucesso via World ID!')
  }

  return (
    <IDKitWidget
      app_id={process.env.NEXT_PUBLIC_WORLD_ID_APP_ID!}
      action="vote-voxreward"
      signal="signal"
      onSuccess={handleProof}
      handleVerify={() => Promise.resolve()}
    >
      {({ open }) => (
        <button onClick={open} className="bg-black text-white px-4 py-2 rounded">
          Verificar com World ID
        </button>
      )}
    </IDKitWidget>
  )
}
