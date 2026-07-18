"use client";

const MOCK_AUCTIONS = [
  { id: "a1", title: "Luxury Suite – New Year's Eve", reserve: 8500, currentBid: 12400, bids: 7, endsIn: "2 days", status: "live" },
  { id: "a2", title: "Honeymoon Package – 4 Nights", reserve: 15000, currentBid: 18200, bids: 11, endsIn: "5 hours", status: "live" },
  { id: "a3", title: "Safari Fly-In – 3 Nights", reserve: 22000, currentBid: 22000, bids: 3, endsIn: "Ended", status: "ended" },
];

export default function AuctionsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-charcoal">Auctions</h1>
          <p className="text-sm text-charcoal/50 mt-1">Let members bid on premium experiences</p>
        </div>
        <button className="bg-forest text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-forest-light transition-colors">
          + New Auction
        </button>
      </div>

      {/* Auction cards */}
      <div className="grid gap-4">
        {MOCK_AUCTIONS.map(auction => (
          <div key={auction.id} className="bg-white rounded-xl border border-charcoal/5 p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-charcoal">{auction.title}</h3>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                    auction.status === "live" ? "bg-forest/10 text-forest" : "bg-charcoal/10 text-charcoal/50"
                  }`}>
                    {auction.status === "live" ? "Live" : "Ended"}
                  </span>
                </div>
                <p className="text-xs text-charcoal/40">Reserve: R{auction.reserve.toLocaleString()} &middot; {auction.bids} bids &middot; Ends: {auction.endsIn}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-forest">R{auction.currentBid.toLocaleString()}</p>
                <p className="text-xs text-charcoal/40">current bid</p>
              </div>
            </div>

            {/* Bid progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-charcoal/40 mb-1">
                <span>Reserve: R{auction.reserve.toLocaleString()}</span>
                <span>{Math.round(((auction.currentBid - auction.reserve) / auction.reserve) * 100)}% above reserve</span>
              </div>
              <div className="h-2 bg-charcoal/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest rounded-full transition-all"
                  style={{ width: `${Math.min(100, (auction.currentBid / (auction.reserve * 2)) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
