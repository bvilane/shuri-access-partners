"use client";

import { useState } from "react";

const MOCK_DEALS = [
  { id: "d1", title: "Winter Special – 3 Nights", discount: 35, originalPrice: 12600, nights: 3, status: "active", bookings: 4, expiresIn: "3 days" },
  { id: "d2", title: "Midweek Escape – 2 Nights", discount: 25, originalPrice: 8400, nights: 2, status: "active", bookings: 2, expiresIn: "5 days" },
  { id: "d3", title: "Last-Minute Weekend", discount: 40, originalPrice: 9800, nights: 2, status: "expired", bookings: 6, expiresIn: "Ended" },
  { id: "d4", title: "Extended Stay – 5 Nights", discount: 30, originalPrice: 21000, nights: 5, status: "draft", bookings: 0, expiresIn: "—" },
];

export default function DealsPage() {
  const [filter, setFilter] = useState<"all" | "active" | "expired" | "draft">("all");

  const filtered = filter === "all" ? MOCK_DEALS : MOCK_DEALS.filter(d => d.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal">My Deals</h1>
          <p className="text-sm text-charcoal/50 mt-1">Create and manage discounted offers for members</p>
        </div>
        <button className="bg-forest text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-forest-light transition-colors">
          + New Deal
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {(["all", "active", "expired", "draft"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
              filter === tab
                ? "bg-forest text-white"
                : "bg-white border border-charcoal/10 text-charcoal/60 hover:border-charcoal/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Deals table */}
      <div className="bg-white rounded-xl border border-charcoal/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-charcoal/5">
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Deal</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Discount</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Bookings</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Expires</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(deal => (
              <tr key={deal.id} className="border-b border-charcoal/5 last:border-0 hover:bg-ivory/50 transition-colors">
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-charcoal">{deal.title}</p>
                  <p className="text-xs text-charcoal/40">{deal.nights} nights &middot; R{deal.originalPrice.toLocaleString()}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-forest">{deal.discount}% off</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-charcoal">{deal.bookings}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-charcoal/60">{deal.expiresIn}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    deal.status === "active" ? "bg-forest/10 text-forest" :
                    deal.status === "expired" ? "bg-charcoal/10 text-charcoal/50" :
                    "bg-gold/10 text-gold"
                  }`}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="text-xs text-charcoal/40 hover:text-charcoal transition-colors">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
