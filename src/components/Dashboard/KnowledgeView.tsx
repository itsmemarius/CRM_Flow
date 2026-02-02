import { Squircle } from '../ui/Squircle'
import { FileText, User, Clock, GitCommit } from 'lucide-react'
interface DocNodeProps {
  title: string
  items: string[]
  owner: string
  updated: string
  version: string
}
function DocNode({ title, items, owner, updated, version }: DocNodeProps) {
  return (
    <Squircle className="group hover:border-blue-300 transition-colors">
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
          <FileText size={14} className="text-slate-400" />
        </div>

        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-xs text-slate-600 flex items-start gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="pt-3 mt-2 border-t border-slate-100 flex flex-wrap gap-2">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-full">
            <User size={10} /> {owner}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-full">
            <Clock size={10} /> {updated}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-full">
            <GitCommit size={10} /> {version}
          </div>
        </div>
      </div>
    </Squircle>
  )
}
export function KnowledgeViewColumn1() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1">
      <DocNode
        title="ML & AI Governance Rules"
        items={[
          'Model Cards',
          'Data Lineage',
          'Bias/Drift monitoring SOP',
          'Approval checklist',
        ]}
        owner="Data Science"
        updated="2d ago"
        version="v2.4"
      />
      <DocNode
        title="Drop-offs"
        items={[
          'Customer Journey Maps',
          'Drop-off Taxonomy',
          'Detection rules',
        ]}
        owner="Product"
        updated="1w ago"
        version="v1.1"
      />
      <DocNode
        title="Real-Time Triggers"
        items={[
          'Trigger Catalog',
          'Event schemas',
          'Eligibility & consent rules',
        ]}
        owner="Engineering"
        updated="3d ago"
        version="v3.0"
      />
      <DocNode
        title="Expert Campaigns"
        items={[
          'Best-Practice Library',
          'Audience playbooks',
          'Channel mix & KPIs',
        ]}
        owner="Marketing"
        updated="5d ago"
        version="v1.8"
      />
    </div>
  )
}
export function KnowledgeViewColumn2() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1">
      <DocNode
        title="Offer Library"
        items={[
          'Benefits structure',
          'Terms & Conditions',
          'Margin impact analysis',
        ]}
        owner="Commercial"
        updated="1d ago"
        version="v4.2"
      />
      <DocNode
        title="Copy/Creative Patterns"
        items={[
          'Subject lines database',
          'Message frameworks',
          'Tone of voice guide',
        ]}
        owner="Brand"
        updated="2w ago"
        version="v2.0"
      />
      <DocNode
        title="Eligibility Rules"
        items={[
          'Product eligibility matrix',
          'Segment suppression',
          'Risk & compliance checks',
        ]}
        owner="Risk"
        updated="12h ago"
        version="v5.1"
      />
    </div>
  )
}
export function KnowledgeViewColumn3() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1">
      <DocNode
        title="Send-time Rules"
        items={[
          'ML best-send-time logic',
          'Channel affinity scoring',
          'Quiet hours policy',
        ]}
        owner="Data Science"
        updated="1mo ago"
        version="v1.0"
      />
      <DocNode
        title="Channel Playbooks"
        items={[
          'WhatsApp/SMS templates',
          'Push notification guides',
          'Telesales scripts',
          'Consent management',
        ]}
        owner="Channels"
        updated="4d ago"
        version="v2.3"
      />
      <DocNode
        title="Operational Runbooks"
        items={['Launch checklists', 'Rollback plans', 'Incident response']}
        owner="Ops"
        updated="1w ago"
        version="v1.5"
      />
    </div>
  )
}
export function KnowledgeViewColumn4() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1">
      <DocNode
        title="Measurement Framework"
        items={[
          'Incremental lift calc',
          'Profit/contact metrics',
          'Payback period',
          'LTV:CAC models',
        ]}
        owner="Analytics"
        updated="2d ago"
        version="v3.1"
      />
      <DocNode
        title="Decision Rules"
        items={['Scale thresholds', 'Pause triggers', 'Tweak parameters']}
        owner="Strategy"
        updated="1mo ago"
        version="v1.0"
      />
      <DocNode
        title="Experiment Backlog"
        items={[
          'Hypothesis templates',
          'Result tracking',
          'Next action workflows',
        ]}
        owner="Growth"
        updated="3d ago"
        version="v2.2"
      />
      <DocNode
        title="Learning Log"
        items={[
          'Insight repository',
          'Model update history',
          'Rule deprecation log',
        ]}
        owner="All"
        updated="1h ago"
        version="v9.9"
      />
    </div>
  )
}
