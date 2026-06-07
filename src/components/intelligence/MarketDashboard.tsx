export default function MarketDashboard() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {[
        { title: 'Global Luxury Index', value: '+4.2%', trend: 'up' },
        { title: 'Virtual Wearables Vol', value: '$2.4B', trend: 'up' },
        { title: 'Sustainability Score', value: '68/100', trend: 'down' },
      ].map((metric, i) => (
        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-sm">
          <h4 className="text-white/50 uppercase tracking-widest text-xs mb-2">{metric.title}</h4>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-serif text-white">{metric.value}</span>
            <span className={`text-sm mb-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
              {metric.trend === 'up' ? '▲' : '▼'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
