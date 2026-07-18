export default function PropertyPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-charcoal">Property</h1>
        <p className="text-sm text-charcoal/50 mt-1">Manage your listing on Shuri Access</p>
      </div>

      {/* Property header */}
      <div className="bg-white rounded-xl border border-charcoal/5 p-6 mb-6">
        <div className="flex items-start gap-5">
          <div className="w-24 h-24 bg-charcoal/5 rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-10 h-10 text-charcoal/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-charcoal">Kruger River Lodge</h2>
            <p className="text-sm text-charcoal/50 mb-2">Greater Kruger, Limpopo, South Africa</p>
            <div className="flex gap-4 text-xs text-charcoal/40">
              <span>12 rooms</span>
              <span>&middot;</span>
              <span>4.8 rating</span>
              <span>&middot;</span>
              <span>Listed since Jan 2026</span>
            </div>
          </div>
          <button className="text-sm border border-charcoal/10 text-charcoal px-4 py-2 rounded-lg hover:border-charcoal/30 transition-colors">
            Edit Listing
          </button>
        </div>
      </div>

      {/* Details grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Basic info */}
        <div className="bg-white rounded-xl border border-charcoal/5 p-6">
          <h3 className="font-medium text-charcoal mb-4">Basic Information</h3>
          <div className="space-y-3">
            {[
              { label: "Property Name", value: "Kruger River Lodge" },
              { label: "Type", value: "Safari Lodge" },
              { label: "Location", value: "Hoedspruit, Greater Kruger" },
              { label: "Rooms / Units", value: "12 luxury suites" },
              { label: "Star Rating", value: "5-Star" },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-charcoal/5 last:border-0">
                <span className="text-sm text-charcoal/50">{item.label}</span>
                <span className="text-sm font-medium text-charcoal">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-xl border border-charcoal/5 p-6">
          <h3 className="font-medium text-charcoal mb-4">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Pool", "Spa", "WiFi", "Game Drives", "Bush Walks",
              "Private Deck", "Outdoor Shower", "Bar", "Restaurant",
              "Airstrip", "Kid-Friendly", "Malaria-Free",
            ].map(amenity => (
              <span key={amenity} className="text-xs bg-forest/5 text-forest px-3 py-1.5 rounded-full">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-xl border border-charcoal/5 p-6">
          <h3 className="font-medium text-charcoal mb-4">Rack Rates</h3>
          <div className="space-y-3">
            {[
              { season: "Peak (Dec–Mar)", rate: "R8,400 / night" },
              { season: "High (Jul–Oct)", rate: "R6,800 / night" },
              { season: "Low (Apr–Jun, Nov)", rate: "R4,200 / night" },
            ].map(item => (
              <div key={item.season} className="flex justify-between items-center py-2 border-b border-charcoal/5 last:border-0">
                <span className="text-sm text-charcoal/50">{item.season}</span>
                <span className="text-sm font-medium text-charcoal">{item.rate}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl border border-charcoal/5 p-6">
          <h3 className="font-medium text-charcoal mb-4">Contact Details</h3>
          <div className="space-y-3">
            {[
              { label: "Manager", value: "James Mthembu" },
              { label: "Email", value: "reservations@krugerriver.co.za" },
              { label: "Phone", value: "+27 15 123 4567" },
              { label: "Website", value: "krugerriverlodge.co.za" },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-2 border-b border-charcoal/5 last:border-0">
                <span className="text-sm text-charcoal/50">{item.label}</span>
                <span className="text-sm font-medium text-charcoal">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
