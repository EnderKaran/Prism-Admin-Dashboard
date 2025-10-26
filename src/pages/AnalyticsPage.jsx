import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import StatCard from '../components/StatCard';
import StatisticsChart from '../components/Charts/StatisticsChart';
import DemographicsMap from '../components/Charts/DemographicsMap';

// Sahte (mock) veri
const trafficData = [
  { name: 'Google', value: 400 },
  { name: 'Facebook', value: 300 },
  { name: 'X.com', value: 200 },
  { name: 'Direct', value: 100 },
];
const TRAFFIC_COLORS = ['#3B82F6', '#6366F1', '#14B8A6', '#F59E0B'];

const salesByCategoryData = [
  { name: 'Electronics', sales: 4500 },
  { name: 'Apparel', sales: 3200 },
  { name: 'Books', sales: 1800 },
  { name: 'Home Goods', sales: 2400 },
  { name: 'Toys', sales: 1200 },
];

function AnalyticsPage({ theme }) {
  const isDark = theme === 'dark';
  const axisTickColor = isDark ? '#94a3b8' : '#64748b';
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipTextColor = isDark ? '#cbd5e1' : '#334155';
  
  return (
    <main className={`flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto transition-all duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Sayfa Başlığı ve Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Analytics
        </h1>
        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="cursor-pointer hover:text-indigo-500">Home</span> 
          <span className="mx-2">&gt;</span> 
          <span>Analytics</span>
        </div>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Bounce Rate" value="45.2%" change="-2.5%" changeType="negative" isDark={isDark} />
        <StatCard title="Avg. Session" value="2m 15s" change="+0.8%" changeType="positive" isDark={isDark} />
        <StatCard title="Page Views" value="1.2M" change="+15.3%" changeType="positive" isDark={isDark} />
        <StatCard title="New Users" value="8,940" change="+5.1%" changeType="positive" isDark={isDark} />
      </div>

      {/* Ana İstatistik Grafiği */}
      <div className="mb-8">
        <StatisticsChart isDark={isDark} />
      </div>

      {/* Ek Grafik Alanı */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Trafik Kaynağı - Pie Chart */}
        <div className={`lg:col-span-1 p-6 rounded-xl border shadow-sm transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700/50' : 'bg-white border-slate-200/50'}`}>
          <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Traffic by Source</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={trafficData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={TRAFFIC_COLORS[index % TRAFFIC_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: tooltipBg, 
                    border: `1px solid ${tooltipBorder}`, 
                    borderRadius: '0.75rem',
                    color: tooltipTextColor
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {trafficData.map((entry, index) => (
              <div key={entry.name} className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: TRAFFIC_COLORS[index] }}></span>
                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kategoriye Göre Satış - Bar Chart */}
        <div className={`lg:col-span-2 p-6 rounded-xl border shadow-sm transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700/50' : 'bg-white border-slate-200/50'}`}>
          <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Sales by Category</h3>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesByCategoryData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: axisTickColor, fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: axisTickColor, fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: isDark ? 'rgba(100, 116, 139, 0.2)' : 'rgba(100, 116, 139, 0.1)' }}
                  contentStyle={{ 
                    backgroundColor: tooltipBg, 
                    border: `1px solid ${tooltipBorder}`,
                    borderRadius: '0.75rem',
                    color: tooltipTextColor
                  }} 
                />
                <Bar dataKey="sales" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Demografi Haritası */}
      <div className="mt-8">
        <DemographicsMap isDark={isDark} />
      </div>

    </main>
  );
}

export default AnalyticsPage;
