import { ChevronLeft } from 'lucide-react'
import React from 'react'

export const LeftButton = ({handleBack, isButtonDisabled, isHidden} : {handleBack : () => void, isButtonDisabled: boolean, isHidden?: boolean}) => {
  return (
    <button
        onClick={handleBack}
        disabled={isButtonDisabled}
        hidden={isHidden}
        className="cursor-pointer transition-transform duration-600 ease-in-out transform hover:translate-x-[-0.5rem]"
        >
        <ChevronLeft className="text-neutral-300 w-12 h-12" />
    </button>
  )
}
