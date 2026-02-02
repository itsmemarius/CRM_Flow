import React from 'react'
interface SquircleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'dashed'
  active?: boolean
  className?: string
  innerClassName?: string
}
export function Squircle({
  children,
  variant = 'filled',
  active = false,
  className = '',
  innerClassName = '',
  ...props
}: SquircleProps) {
  // Geometry Rule: Outer Radius (16px/rounded-2xl) - Padding (4px/p-1) = Inner Radius (12px/rounded-xl)
  const baseOuter = 'rounded-2xl p-1 transition-all duration-200'
  const variants = {
    filled: active
      ? 'bg-blue-100 border border-blue-200 shadow-sm'
      : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300',
    outlined: 'bg-transparent border border-slate-200',
    dashed:
      'bg-slate-50 border-2 border-dashed border-slate-300 hover:border-slate-400 hover:bg-slate-100 cursor-pointer',
  }
  const innerBase = 'rounded-xl w-full h-full overflow-hidden'
  const innerVariants = {
    filled: active ? 'bg-blue-50/50' : 'bg-slate-50/50',
    outlined: 'bg-transparent',
    dashed: 'bg-transparent',
  }
  return (
    <div
      className={`${baseOuter} ${variants[variant]} ${className}`}
      {...props}
    >
      <div
        className={`${innerBase} ${innerVariants[variant]} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
