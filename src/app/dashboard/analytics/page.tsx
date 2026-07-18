export default function AnalyticsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-charcoal">Analytics</h1>
        <p className="text-sm text-charcoal/50 mt-1">Performance insights for your property on Shuri Access</p>
      </div>

      {/* Top-level stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Profile Views", value: "1,284", change: "+18% vs last month" },
          { label: "Deal Clicks", value: "346", change: "+9% vs last month" },
          { label: "Bookings", value: "14", change: "+3 vs last month" },
          { label: "Revenue", value: "R187,400", change: "+22% vs last month" },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-xl border border-charcoal/5 p-5">
            <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-semibold text-charcoal">{stat.value}</p>
            <p className="text-xs text-forest mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Charts placeholder */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-charcoal/5 p-6">
          <h3 className="font-medium text-charcoal mb-4">Bookings Over Time</h3>
          <div className="h-48 flex items-end gap-2">
            {[3, 5, 4, 7, 6, 8, 9, 7, 11, 8, 12, 14].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-forest/20 rounded-t transition-all hover:bg-forest/40"
                  style={{ height: `${(val / 14) * 100}%` }}
                />
                <span className="text-[10px] text-charcoal/30">
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-charcoal/5 p-6">
          <h3 className="font-medium text-charcoal mb-4">Revenue by Channel</h3>
          <div className="space-y-4 mt-6">
            {[
              { channel: "Deals", amount: "R98,200", pct: 52 },
              { channel: "Auctions", amount: "R61,400", pct: 33 },
              { channel: "Last-Minute", amount: "R27,800", pct: 15 },
            ].map(item => (
              <div key={item.channel}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-charcoal">{item.channel}</span>
                  <span className="text-charcoal/60">{item.amount}</span>
                </div>
                <div className="h-2 bg-charcoal/5 rounded-full overflow-hidden">
                  <div className="h-full bg-forest rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Member demographics */}
      <div className="bg-white rounded-xl border border-charcoal/5 p-6">
        <h3 className="font-medium text-charcoal mb-4">Member Demographics</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-3">Top Countries</p>
            <div className="space-y-2">
              {[
                { country: "South Africa", pct: 45 },
                { country: "United Kingdom", pct: 22 },
                { country: "United States", pct: 15 },
                { country: "Germany", pct: 10 },
                { country: "Other", pct: 8 },
              ].map(item => (
                <div key={item.country} className="flex justify-between text-sm">
                  <span className="text-charcoal/60">{item.country}</span>
                  <span className="text-charcoal font-medium">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-3">Booking Source</p>
            <div className="space-y-2">
              {[
                { source: "Direct Browse", pct: 38 },
                { source: "Search", pct: 28 },
                { source: "Newsletter", pct: 20 },
                { source: "Referral", pct: 14 },
              ].map(item => (
                <div key={item.source} className="flex justify-between text-sm">
                  <span className="text-charcoal/60">{item.source}</span>
                  <span className="text-charcoal font-medium">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-3">Stay Length</p>
            <div className="space-y-2">
              {[
                { length: "2 nights", pct: 35 },
                { length: "3 nights", pct: 40 },
                { length: "4–5 nights", pct: 18 },
                { length: "6+ nights", pct: 7 },
              ].map(item => (
                <div key={item.length} className="flex justify-between text-sm">
                  <span className="text-charcoal/60">{item.length}</span>
                  <span className="text-charcoal font-medium">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
