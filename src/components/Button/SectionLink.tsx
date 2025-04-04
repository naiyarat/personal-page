import React from 'react'

export const SectionLink = ({sectionId, title}: {sectionId: string, title: string}) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <p className="text-l font-semibold cursor-pointer" onClick={() => scrollToSection(sectionId)}>
        {title}
    </p>
  )
}
