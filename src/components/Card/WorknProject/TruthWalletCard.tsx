import React from 'react'
import { WorkCard } from '../WorkCard'

export const TruthWalletCard = () => {
  return (
      <WorkCard
        title="Truth Wallet"
        role="Fullstack Developer"
        timeline="2024"
        imageURL="/TruthWallet.png"
        alt='Truth wallet'
        size={520}  
        subtitle='Designing a finance system for an amusement park'
      />
  )
}
