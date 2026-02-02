import React from 'react'
import { Layout, BookOpen, PenTool } from 'lucide-react'
export type ViewType = 'process' | 'knowledge' | 'tool'
interface SegmentedToggleProps {
  activeView: ViewType
  onChange: (view: ViewType) => void
}
export function SegmentedToggle({
  activeView,
  onChange,
}: SegmentedToggleProps) {
  const options: {
    id: ViewType
    label: string
    icon: React.ElementType
  }[] = [
    {
      id: 'process',
      label: 'Process Diagram',
      icon: Layout,
    },
    {
      id: 'tool',
      label: 'Tool Diagram',
      icon: PenTool,
    },
    {
      id: 'knowledge',
      label: 'Knowledge Diagram',
      icon: BookOpen,
    },
  ]
  return (
    <div className="bg-slate-100 p-1 rounded-full inline-flex border border-slate-200">
      {options.map((option) => {
        const isActive = activeView === option.id
        const Icon = option.icon
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`
              relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${isActive ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}
            `}
          >
            <Icon size={14} />
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
