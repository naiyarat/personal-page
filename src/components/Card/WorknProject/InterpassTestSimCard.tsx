import React from 'react'
import { WorkCard } from '../WorkCard'

export const TestSimCard = () => {
  return (
      <WorkCard
        title="Interpass SelfU Redesign"
        role="Fullstack Developer"
        timeline="2024 – present"
        imageURL="/InterpassTestSimulator.png"
        alt='Truth wallet'
        bgColor="blue-400/20"      
        size={480}
        subtitle='Redesigning an outdated testing system'
      />
  )
}
