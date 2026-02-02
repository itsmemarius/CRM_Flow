import { Squircle } from '../ui/Squircle'
import { Plus, Server, Database, Send, BarChart3, PieChart } from 'lucide-react'
const Placeholder = ({
  label,
  icon: Icon,
}: {
  label: string
  icon?: React.ElementType
}) => (
  <Squircle variant="dashed" className="h-36 group">
    <div className="h-full flex flex-col items-center justify-center gap-3 text-slate-400 group-hover:text-slate-500 transition-colors">
      <div className="p-3 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
        {Icon ? <Icon size={20} /> : <Plus size={20} />}
      </div>
      <span className="text-xs font-medium text-center px-2">{label}</span>
    </div>
  </Squircle>
)
// Brand logo components (stylized representations)
export const BrandLogo = ({  name,
  bgColor,
  textColor,
  subtitle,
}: {
  name: string
  bgColor: string
  textColor: string
  subtitle?: string
}) => (
  <Squircle className="h-28">
    <div
      className={`h-full flex flex-col items-center justify-center gap-1 ${bgColor} rounded-xl`}
    >
      <span className={`text-sm font-bold ${textColor}`}>{name}</span>
      {subtitle && (
        <span className={`text-[10px] ${textColor} opacity-70`}>
          {subtitle}
        </span>
      )}
    </div>
  </Squircle>
)
export function ToolViewColumn1() {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* PFM Service - Backend event generator */}
      <Squircle className="bg-slate-800 border-slate-700">
        <div className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/20">
            <Server size={18} className="text-emerald-400" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">PFM Service</div>
            <div className="text-[10px] text-slate-400">
              Backend Event Generator
            </div>
          </div>
        </div>
      </Squircle>

      <Placeholder label="Configure ML Source" icon={Database} />
      <Placeholder label="Add Trigger Tool" />
    </div>
  )
}
export function ToolViewColumn2() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <Placeholder label="Connect Offer Engine" />
      <Placeholder label="Creative Management" />
      <Placeholder label="Content Library" />
    </div>
  )
}
export function ToolViewColumn3() {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Creatio Marketing */}
      <Squircle className="bg-gradient-to-br from-orange-500 to-red-500 border-orange-400">
        <div className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/20">
            <Send size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Creatio</div>
            <div className="text-[10px] text-white/80">
              Marketing Automation
            </div>
          </div>
        </div>
      </Squircle>

      {/* Maib Bank */}
      <Squircle className="bg-gradient-to-br from-green-600 to-green-700 border-green-500">
        <div className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/20">
            <Database size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">maib</div>
            <div className="text-[10px] text-white/80">Bank Integration</div>
          </div>
        </div>
      </Squircle>

      <Placeholder label="Channel Integration" />
      <Placeholder label="Timing Optimization" />
    </div>
  )
}
export function ToolViewColumn4() {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Amplitude */}
      <Squircle className="bg-gradient-to-br from-blue-600 to-indigo-600 border-blue-500">
        <div className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/20">
            <BarChart3 size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Amplitude</div>
            <div className="text-[10px] text-white/80">Product Analytics</div>
          </div>
        </div>
      </Squircle>

      {/* Power BI */}
      <Squircle className="bg-gradient-to-br from-yellow-500 to-amber-600 border-yellow-400">
        <div className="p-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/20">
            <PieChart size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Power BI</div>
            <div className="text-[10px] text-white/80">
              Business Intelligence
            </div>
          </div>
        </div>
      </Squircle>

      <Placeholder label="Feedback Loop Config" />
    </div>
  )
}
