import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [ { name: 'Jan', uv: 120, pv: 75 }, { name: 'Feb', pv: 110, uv: 180 }, { name: 'Mar', uv: 150, pv: 100 }, { name: 'Apr', uv: 210, pv: 140 }, { name: 'May', uv: 190, pv: 160 }, { name: 'Jun', uv: 250, pv: 180 }, { name: 'Jul', uv: 280, pv: 210 }, { name: 'Aug', uv: 260, pv: 230 }, { name: 'Sep', uv: 320, pv: 250 }, { name: 'Oct', uv: 300, pv: 220 }, { name: 'Nov', uv: 350, pv: 280 }, { name: 'Dec', uv: 390, pv: 320 }, ];
const quarterlyData = [ { name: 'Q1', uv: 450, pv: 285 }, { name: 'Q2', pv: 480, uv: 650 }, { name: 'Q3', uv: 860, pv: 700 }, { name: 'Q4', uv: 1040, pv: 850 }, ];
const annuallyData = [ { name: '2022', uv: 1800, pv: 1500 }, { name: '2023', uv: 2500, pv: 2100 }, { name: '2024', uv: 3100, pv: 2800 }, ];
const dataMap = { 'Monthly': monthlyData, 'Quarterly': quarterlyData, 'Annually': annuallyData, };
const filterButtons = ['Monthly', 'Quarterly', 'Annually'];


function StatisticsChart({ isDark }) { 
  const [activeFilter, setActiveFilter] = useState('Monthly');

  const axisTickColor = isDark ? '#94a3b8' : '#64748b';
  const gridLineColor = isDark ? '#334155' : '#e2e8f0';
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#e2e8f0';
  const tooltipTextColor = isDark ? '#cbd5e1' : '#334155';

  const currentData = dataMap[activeFilter];

  return (
    <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 ${
        isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
    }`}>
      {/* Kart Başlığı ve Filtre Butonları */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Statistics</h3>
        <div className={`flex items-center p-1 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
          {filterButtons.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeFilter === filter
                  ? `${isDark ? 'bg-slate-600 text-indigo-300' : 'bg-white text-indigo-600'} font-semibold shadow-sm`
                  : `${isDark ? 'text-slate-400 hover:bg-slate-600/50' : 'text-slate-500 hover:bg-white/50'}`
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Recharts Grafik Alanı */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={currentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818CF8" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#818CF8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: axisTickColor, fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: axisTickColor, fontSize: 12 }} tickFormatter={(value) => `${value}k`} />
            <CartesianGrid strokeDasharray="3 3" stroke={gridLineColor} vertical={false} />
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: tooltipBg, 
                    border: `1px solid ${tooltipBorder}`, 
                    borderRadius: '0.75rem',
                    color: tooltipTextColor
                }} 
            />
            <Area type="monotone" dataKey="uv" stroke="#6366F1" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" dot={{ r: 4, fill: '#6366F1', stroke: isDark ? tooltipBg : '#fff', strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Area type="monotone" dataKey="pv" stroke="#0EA5E9" strokeWidth={2} fillOpacity={1} fill="url(#colorPv)" dot={{ r: 4, fill: '#0EA5E9', stroke: isDark ? tooltipBg : '#fff', strokeWidth: 2 }} activeDot={{ r: 6 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StatisticsChart;