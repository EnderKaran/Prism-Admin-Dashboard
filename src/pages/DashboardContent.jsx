import React from 'react';
import StatCard from '../components/StatCard';
import StatisticsChart from '../components/Charts/StatisticsChart';
import DemographicsMap from '../components/Charts/DemographicsMap';
import RecentOrders from '../components/Tables/RecentOrders';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const monthlySalesData = [
  { name: 'Jan', sales: 2400 },
  { name: 'Feb', sales: 3100 },
  { name: 'Mar', sales: 2800 },
  { name: 'Apr', sales: 3500 },
  { name: 'May', sales: 2900 },
  { name: 'Jun', sales: 4200 },
  { name: 'Jul', sales: 4800 },
];

const monthlyTargetData = [
  { name: 'Achieved', value: 75 },
  { name: 'Remaining', value: 25 },
];

function DashboardContent({ theme }) {
  const isDark = theme === 'dark';
  const pieTrailColor = isDark ? '#334155' : '#E5E7EB';
  const axisTickColor = isDark ? '#94a3b8' : '#64748b';
  const tooltipBackgroundColor = isDark ? '#1e293b' : '#ffffff';
  const tooltipBorderColor = isDark ? '#334155' : '#e2e8f0';
  const tooltipTextColor = isDark ? '#cbd5e1' : '#334155';
  
  const PIE_COLORS = ['#6366F1', pieTrailColor];

  return (
    <main className={`flex-1 p-8 overflow-y-auto transition-all duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Customers" value="12,500" change="+12.5%" changeType="positive" isDark={isDark} />
        <StatCard title="Orders" value="7,230" change="+8.2%" changeType="positive" isDark={isDark} />
        <StatCard title="Revenue" value="$58,940" change="+21.3%" changeType="positive" isDark={isDark} />
        <StatCard title="Growth" value="+15.3%" change="-1.1%" changeType="negative" isDark={isDark} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Monthly Target - Pie Chart */}
        <div className={`lg:col-span-1 p-6 rounded-xl border shadow-sm transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
        }`}>
          <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Monthly Target</h3>
          <div className="relative h-48 w-48 mx-auto my-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={monthlyTargetData} 
                  cx="50%" 
                  cy="50%" 
                  innerRadius={60} 
                  outerRadius={80} 
                  startAngle={90} 
                  endAngle={450} 
                  paddingAngle={0} 
                  dataKey="value"
                >
                  {monthlyTargetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>75%</span>
              <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Achieved</span>
            </div>
          </div>
          <p className="text-center text-sm font-medium text-green-500">This Month +5%</p>
        </div>

        {/* Monthly Sales - Bar Chart */}
        <div className={`lg:col-span-2 p-6 rounded-xl border shadow-sm transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
        }`}>
          <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Monthly Sales</h3>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={monthlySalesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{ fill: axisTickColor }} 
                />
                <Tooltip 
                  cursor={{ fill: isDark ? 'rgba(100, 116, 139, 0.2)' : 'rgba(100, 116, 139, 0.1)' }}
                  contentStyle={{ 
                    background: tooltipBackgroundColor, 
                    border: `1px solid ${tooltipBorderColor}`,
                    borderRadius: '0.75rem',
                    color: tooltipTextColor
                  }} 
                />
                <Bar dataKey="sales" fill="#6366F1" radius={[8, 8, 8, 8]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <StatisticsChart isDark={isDark} />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1">
            <DemographicsMap isDark={isDark} />
        </div>
        
        <div className="lg:col-span-2">
             <RecentOrders isDark={isDark} />
        </div>
      </div>

    </main>
  );
}

export default DashboardContent;