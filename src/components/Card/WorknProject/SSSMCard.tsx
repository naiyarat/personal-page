import React from 'react'
import { WorkCard } from '../WorkCard'

export const SSSMCard = () => {
  return (
      <WorkCard
        title="Silverspoon Stock Management"
        role="Fullstack Developer"
        timeline="2021 – 2023"
        imageURL="/SSSM.png"
        size={640}
        alt='SSSM'
        subtitle='Creating an ERP tailored towards restaurants'
      />
  )
}
