import React from 'react'

export const Badge = ({ children }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 
      rounded-full uppercase font-semibold tracking-wide">
        
        {children}
    </span>
  )
}
