import React, { useState } from 'react'
import { SegmentedToggle, type ViewType } from './SegmentedToggle'
import {
  ProcessViewColumn1,
  ProcessViewColumn2,
  ProcessViewColumn3,
  ProcessViewColumn4,
} from './ProcessView'
import {
  KnowledgeViewColumn1,
  KnowledgeViewColumn2,
  KnowledgeViewColumn3,
  KnowledgeViewColumn4,
} from './KnowledgeView'
import {
  ToolViewColumn1,
  ToolViewColumn2,
  ToolViewColumn3,
  ToolViewColumn4,
} from './ToolView'
// Stage container with distinct visual isolation
function StageContainer({
  children,
  stageNumber,
  title,
  accentColor,
}: {
  children: React.ReactNode
  stageNumber: number
  title: string
  accentColor: string
}) {
  return (
    <section className="flex flex-col min-h-0">
      {/* Stage wrapper with distinct background and border accent */}
      <div
        className={`flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden`}
      >
        {/* Header with colored accent bar */}
        <header
          className={`px-5 py-4 border-b border-slate-100 bg-gradient-to-r ${accentColor}`}
        >
          <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-white/80 text-slate-700 text-xs font-bold shadow-sm">
              {stageNumber}
            </span>
            {title}
          </h2>
        </header>
        {/* Content area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4">{children}</div>
      </div>
    </section>
  )
}
export function CRMDashboard() {
  const [activeView, setActiveView] = useState<ViewType>('process')
  // Different accent colors for each stage to create visual distinction
  const stageAccents = [
    'from-emerald-50 to-teal-50/50',
    'from-amber-50 to-orange-50/50',
    'from-sky-50 to-blue-50/50',
    'from-violet-50 to-purple-50/50', // Stage 4: Then What - Purple tint
  ]
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans p-6">
      <div className="max-w-[1800px] mx-auto flex flex-col h-[calc(100vh-3rem)]">
        {/* Header */}
        <header className="flex items-center justify-between mb-6 shrink-0">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Strategic CRM Ecosystem
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Orchestration, decisioning, and feedback loops
            </p>
          </div>
          <SegmentedToggle activeView={activeView} onChange={setActiveView} />
        </header>

        {/* Main Grid with isolated stage containers */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 min-h-0">
          <StageContainer
            stageNumber={1}
            title="Who? What?"
            accentColor={stageAccents[0]}
          >
            {activeView === 'process' && <ProcessViewColumn1 />}
            {activeView === 'knowledge' && <KnowledgeViewColumn1 />}
            {activeView === 'tool' && <ToolViewColumn1 />}
          </StageContainer>

          <StageContainer
            stageNumber={2}
            title="What offer?"
            accentColor={stageAccents[1]}
          >
            {activeView === 'process' && <ProcessViewColumn2 />}
            {activeView === 'knowledge' && <KnowledgeViewColumn2 />}
            {activeView === 'tool' && <ToolViewColumn2 />}
          </StageContainer>

          <StageContainer
            stageNumber={3}
            title="Where and When?"
            accentColor={stageAccents[2]}
          >
            {activeView === 'process' && <ProcessViewColumn3 />}
            {activeView === 'knowledge' && <KnowledgeViewColumn3 />}
            {activeView === 'tool' && <ToolViewColumn3 />}
          </StageContainer>

          <StageContainer
            stageNumber={4}
            title="Then What?"
            accentColor={stageAccents[3]}
          >
            {activeView === 'process' && <ProcessViewColumn4 />}
            {activeView === 'knowledge' && <KnowledgeViewColumn4 />}
            {activeView === 'tool' && <ToolViewColumn4 />}
          </StageContainer>
        </main>
      </div>
    </div>
  )
}
