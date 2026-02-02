import React from 'react'
interface CapsuleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md'
  active?: boolean
}
export function Capsule({
  children,
  variant = 'secondary',
  size = 'md',
  active = false,
  className = '',
  ...props
}: CapsuleProps) {
  const base =
    'rounded-full inline-flex items-center justify-center font-medium transition-colors duration-200 whitespace-nowrap'
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  }
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: active
      ? 'bg-blue-100 text-blue-800 border border-blue-200'
      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-300',
    outline:
      'bg-transparent border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800',
    ghost:
      'bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100',
  }
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
