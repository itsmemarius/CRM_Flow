import { Squircle } from '../ui/Squircle'
import { Capsule } from '../ui/Capsule'
import { Tooltip } from '../ui/Tooltip'
import { Plus, Info } from 'lucide-react'
export function ProcessViewColumn1() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="space-y-3 flex-1">
        <Tooltip
          side="right"
          content={
            <div className="space-y-2">
              <div className="font-semibold border-b border-slate-700 pb-1 mb-1">
                NBP - Next Best Products
              </div>
              <ol className="list-decimal pl-4 space-y-0.5 text-[10px] leading-tight text-slate-300">
                <li>Espresso</li>
                <li>Espresso Extra</li>
                <li>BNPL</li>
                <li>Revolving</li>
                <li>Refinance</li>
                <li>Mortgage</li>
                <li>Prima Casa</li>
                <li>CPI Insurance</li>
                <li>RCA Insurance</li>
                <li>Travel Insurance</li>
                <li>Green Card</li>
                <li>Multioptional + Deposit</li>
                <li>Maib Classic Deposit</li>
                <li>Maib Classic+ Deposit</li>
                <li>Maib Capital</li>
                <li>Maib junior card</li>
                <li>Maib daily card</li>
                <li>Gama premium card</li>
                <li>Gama universal card</li>
              </ol>
            </div>
          }
        >
          <Squircle className="cursor-help group">
            <div className="p-4 flex items-center justify-between">
              <span className="font-semibold text-slate-700">
                ML (Machine Learning)
              </span>
              <Info
                size={16}
                className="text-slate-400 group-hover:text-blue-500"
              />
            </div>
          </Squircle>
        </Tooltip>

        <Squircle>
          <div className="p-4 font-semibold text-slate-700">Drop offs</div>
        </Squircle>

        <Tooltip
          side="right"
          content={
            <div className="space-y-2">
              <div className="font-semibold border-b border-slate-700 pb-1 mb-1">
                Real Time Triggers
              </div>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                <li>Declined Transaction (Insufficient Funds)</li>
                <li>Near border crossing Travel insurance sell</li>
                <li>Big-Ticket Purchases (≥ 1,000 MDL)</li>
                <li>Utilities Payment (≥ 1,000 MDL)</li>
                <li>Service Incidents</li>
                <li>Intensive Recent Spending</li>
              </ul>
            </div>
          }
        >
          <Squircle className="cursor-help group">
            <div className="p-4 flex items-center justify-between">
              <span className="font-semibold text-slate-700">
                Real Time Triggers
              </span>
              <Info
                size={16}
                className="text-slate-400 group-hover:text-blue-500"
              />
            </div>
          </Squircle>
        </Tooltip>

        <Squircle>
          <div className="p-4 font-semibold text-slate-700">
            Expert Campaigns
          </div>
        </Squircle>
      </div>

      <Squircle variant="dashed" className="mt-auto">
        <div className="p-3 flex items-center justify-center gap-2 text-slate-500 font-medium">
          <Plus size={16} />
          Add Source
        </div>
      </Squircle>
    </div>
  )
}
export function ProcessViewColumn2() {
  return (
    <div className="h-full">
      <Squircle className="h-full">
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-4 gap-2 p-3 border-b border-slate-200 bg-slate-50/80 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div>c_id</div>
            <div>product</div>
            <div>offer</div>
            <div>text</div>
          </div>
          <div className="flex-1 p-2 space-y-1 overflow-y-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-2 p-2 text-xs text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-default"
              >
                <div className="font-mono text-slate-400">#849{i}</div>
                <div>Espresso</div>
                <div>-20% Rate</div>
                <div className="truncate">Special offer for loyal...</div>
              </div>
            ))}
          </div>
        </div>
      </Squircle>
    </div>
  )
}
export function ProcessViewColumn3() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          When
        </h3>
        <div className="flex flex-wrap gap-2">
          <Capsule variant="secondary" size="sm">
            ML-determined optimal timing
          </Capsule>
          <Capsule variant="secondary" size="sm">
            Customer's last offer read time
          </Capsule>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          Where
        </h3>

        <div className="space-y-2">
          <div className="text-xs font-medium text-slate-500 px-1">Digital</div>
          <div className="flex flex-wrap gap-2">
            <Capsule size="sm">in-app widgets</Capsule>
            <Capsule size="sm">app stories</Capsule>
            <Capsule size="sm">push notifications</Capsule>
            <Capsule size="sm">pop-ups</Capsule>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium text-slate-500 px-1">
            Human-assisted
          </div>
          <div className="flex flex-wrap gap-2">
            <Capsule size="sm">telesales</Capsule>
            <Capsule size="sm">teller (NBO)</Capsule>
            <Capsule size="sm">branch teller calls</Capsule>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium text-slate-500 px-1">
            Paid media
          </div>
          <div className="flex flex-wrap gap-2">
            <Capsule size="sm">Meta Custom Audience</Capsule>
            <Capsule size="sm">Google Custom Audience</Capsule>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-medium text-slate-500 px-1">
            Direct messaging
          </div>
          <div className="flex flex-wrap gap-2">
            <Capsule size="sm">WhatsApp</Capsule>
            <Capsule size="sm">SMS</Capsule>
            <Capsule size="sm">Viber</Capsule>
          </div>
        </div>
      </div>
    </div>
  )
}
export function ProcessViewColumn4() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          Feedback
        </h3>
        <div className="flex flex-wrap gap-2">
          <Capsule variant="primary" size="sm">
            Open Rate
          </Capsule>
          <Capsule variant="primary" size="sm">
            CTR
          </Capsule>
          <Capsule variant="primary" size="sm">
            Conversion Rate
          </Capsule>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          ROI Analysis
        </h3>
        <Squircle className="bg-slate-50">
          <div className="p-3 space-y-3">
            <div className="flex gap-2 text-xs font-medium text-slate-600 justify-between px-1">
              <span>ROI?</span>
              <span className="text-slate-300">|</span>
              <span>Scale?</span>
              <span className="text-slate-300">|</span>
              <span>Stop?</span>
            </div>
            <div className="space-y-2">
              {[
                'Espresso pre-approved PS rata speciala GROUP A',
                'Espresso pre-approved PS rata speciala GROUP B',
                'Espresso NBP Model',
              ].map((campaign, i) => (
                <div
                  key={i}
                  className="text-xs p-2 bg-white rounded-lg border border-slate-100 shadow-sm text-slate-600"
                >
                  {campaign}
                </div>
              ))}
            </div>
          </div>
        </Squircle>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          Learn
        </h3>
        <Squircle className="bg-blue-50 border-blue-100">
          <div className="p-3 text-xs text-blue-800 leading-relaxed">
            Feed results into ML (send-time, channel affinity) & enforce
            frequency caps.
          </div>
        </Squircle>
      </div>
    </div>
  )
}
