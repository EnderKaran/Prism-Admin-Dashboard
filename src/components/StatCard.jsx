import React from 'react';

const StatCard = ({ title, value, change, changeType, isDark }) => {
  const isPositive = changeType === 'positive';
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className={`p-6 rounded-xl border shadow-sm transition-all duration-300 ${
      isDark 
        ? 'bg-slate-800 border-slate-700/50' 
        : 'bg-white border-slate-200/50'
    }`}>
      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{title}</p>
      <p className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
      <p className={`text-xs mt-2 ${changeColor}`}>
        <span className="font-semibold">{change}</span>
        <span className={isDark ? 'text-slate-500' : 'text-slate-400'}> vs last month</span>
      </p>
    </div>
  );
};

export default StatCard;