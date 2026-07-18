"use client";

import { useState } from "react";

const MOCK_BOOKINGS = [
  { id: "b1", guest: "Thabo Mokoena", email: "thabo@email.com", dates: "22–24 Jul 2026", nights: 2, total: 19980, type: "Deal", status: "confirmed" },
  { id: "b2", guest: "Sarah Kimathi", email: "sarah.k@email.com", dates: "28–30 Jul 2026", nights: 2, total: 15360, type: "Deal", status: "pending" },
  { id: "b3", guest: "David Nkosi", email: "dnkosi@email.com", dates: "1–4 Aug 2026", nights: 3, total: 25200, type: "Auction", status: "confirmed" },
  { id: "b4", guest: "Anna van Wyk", email: "anna.vw@email.com", dates: "8–10 Aug 2026", nights: 2, total: 12800, type: "Last-Minute", status: "confirmed" },
  { id: "b5", guest: "Michael Obi", email: "m.obi@email.com", dates: "15–18 Aug 2026", nights: 3, total: 31500, type: "Deal", status: "cancelled" },
];

export default function BookingsPage() {
  const [filter, setFilter] = useState<"all" | "confirmed" | "pending" | "cancelled">("all");

  const filtered = filter === "all" ? MOCK_BOOKINGS : MOCK_BOOKINGS.filter(b => b.status === filter);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-charcoal">Bookings</h1>
        <p className="text-sm text-charcoal/50 mt-1">All reservations made through Shuri Access</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-charcoal/5 p-4">
          <p className="text-xs text-charcoal/40 uppercase tracking-wider">This Month</p>
          <p className="text-xl font-semibold text-charcoal mt-1">8 bookings</p>
        </div>
        <div className="bg-white rounded-xl border border-charcoal/5 p-4">
          <p className="text-xs text-charcoal/40 uppercase tracking-wider">Revenue</p>
          <p className="text-xl font-semibold text-forest mt-1">R104,840</p>
        </div>
        <div className="bg-white rounded-xl border border-charcoal/5 p-4">
          <p className="text-xs text-charcoal/40 uppercase tracking-wider">Avg. Stay</p>
          <p className="text-xl font-semibold text-charcoal mt-1">2.4 nights</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {(["all", "confirmed", "pending", "cancelled"] as const).map(tab => (
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

      {/* Table */}
      <div className="bg-white rounded-xl border border-charcoal/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-charcoal/5">
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Guest</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Dates</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Type</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Total</th>
              <th className="text-left text-xs font-medium text-charcoal/40 uppercase tracking-wider px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(booking => (
              <tr key={booking.id} className="border-b border-charcoal/5 last:border-0 hover:bg-ivory/50 transition-colors">
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-charcoal">{booking.guest}</p>
                  <p className="text-xs text-charcoal/40">{booking.email}</p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm text-charcoal">{booking.dates}</p>
                  <p className="text-xs text-charcoal/40">{booking.nights} nights</p>
                </td>
                <td className="px-5 py-4">
                  <span className="text-xs bg-charcoal/5 text-charcoal/60 px-2 py-1 rounded">{booking.type}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-medium text-charcoal">R{booking.total.toLocaleString()}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    booking.status === "confirmed" ? "bg-forest/10 text-forest" :
                    booking.status === "pending" ? "bg-gold/10 text-gold" :
                    "bg-urgent/10 text-urgent"
                  }`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
