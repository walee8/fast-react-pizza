import React from 'react'
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick}) {
    const base = 'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800  hover:bg-yellow-300 transition-color duration-300 focus:outline-none disabled:cursor-not-allowed'

    const styles = {
      primary: base + ' px-4 py-3 md:px-6 md:py-4',
      small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
      round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
      secondary: 'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400  hover:bg-stone-300 hover:text-stone-800 transition-color duration-300 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5'
    }

    if(to)
    return(
        <Link to={to} className={styles[type]}>        {children}
        </Link>
    );

    if(onClick){
      return (
      <button
        onClick={onClick}
        disabled={disabled} 
        className={styles[type]}
      >
        {children}  
    </button>
  )
    }

  return (
    <button
        disabled={disabled} 
        className={styles[type]}
    >
        {children}  
    </button>
  )
}
