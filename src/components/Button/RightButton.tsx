import { ChevronRight } from 'lucide-react'
import React from 'react'

export const RightButton = ({handleForward, isButtonDisabled, isHidden} : {handleForward : () => void, isButtonDisabled: boolean, isHidden?: boolean}) => {
  return (
    <button
      onClick={handleForward}
      disabled={isButtonDisabled}
      hidden={isHidden}
      className='cursor-pointer transition-transform duration-600 ease-in-out transform hover:translate-x-2'
    >
        <ChevronRight className="text-neutral-300 w-12 h-12" />
    </button>
  )
}
