export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-charcoal">Partner Dashboard</h1>
        <p className="text-sm text-charcoal/50 mt-1">Manage your property, deals, and bookings on Shuri Access</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Deals", value: "3", change: "1 ending today" },
          { label: "Live Auctions", value: "1", change: "4 bids placed" },
          { label: "Bookings This Month", value: "8", change: "R96k revenue" },
          { label: "Avg. Occupancy Lift", value: "+12%", change: "via Shuri Access" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-charcoal/5 p-5">
            <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-semibold text-charcoal">{stat.value}</p>
            <p className="text-xs text-charcoal/40 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-charcoal/5 p-5">
          <h3 className="font-medium text-charcoal mb-1">Submit a Deal</h3>
          <p className="text-xs text-charcoal/50 mb-3">Offer unsold nights at a discounted rate to members</p>
          <button className="text-sm bg-forest text-white px-4 py-2 rounded-lg hover:bg-forest-light transition-colors">
            New Deal
          </button>
        </div>
        <div className="bg-white rounded-xl border border-charcoal/5 p-5">
          <h3 className="font-medium text-charcoal mb-1">Start an Auction</h3>
          <p className="text-xs text-charcoal/50 mb-3">Let members bid on premium nights — set your reserve</p>
          <button className="text-sm bg-forest text-white px-4 py-2 rounded-lg hover:bg-forest-light transition-colors">
            New Auction
          </button>
        </div>
        <div className="bg-white rounded-xl border border-charcoal/5 p-5">
          <h3 className="font-medium text-charcoal mb-1">Update Property</h3>
          <p className="text-xs text-charcoal/50 mb-3">Edit your listing, photos, and amenities</p>
          <button className="text-sm border border-charcoal/10 text-charcoal px-4 py-2 rounded-lg hover:border-charcoal/30 transition-colors">
            Edit Listing
          </button>
        </div>
      </div>

      {/* Recent bookings */}
      <div className="bg-white rounded-xl border border-charcoal/5 p-6">
        <h2 className="font-medium text-charcoal mb-4">Recent Bookings</h2>
        <div className="space-y-3">
          {[
            { guest: "Thabo M.", dates: "22–24 Jul", nights: 2, total: "R19,980", status: "Confirmed" },
            { guest: "Sarah K.", dates: "28–30 Jul", nights: 2, total: "R15,360", status: "Pending" },
            { guest: "David N.", dates: "1–4 Aug", nights: 3, total: "R25,200", status: "Confirmed" },
          ].map((booking, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-charcoal/5 last:border-0">
              <div>
                <p className="text-sm text-charcoal font-medium">{booking.guest}</p>
                <p className="text-xs text-charcoal/40">{booking.dates} &middot; {booking.nights} nights</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-forest font-medium">{booking.total}</p>
                <span className={`text-xs font-medium ${
                  booking.status === "Confirmed" ? "text-forest" : "text-gold"
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
