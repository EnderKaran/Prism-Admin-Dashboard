import React from 'react';
import StatCard from '../components/StatCard';
import CustomersTable from '../components/Tables/CustomersTable';
import { Users, UserCheck, UserX } from 'lucide-react';

function CustomersPage({ theme }) {
  const isDark = theme === 'dark';

  return (
    <main className={`flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto transition-all duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Sayfa Başlığı ve Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Customers
        </h1>
        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="cursor-pointer hover:text-indigo-500">Home</span> 
          <span className="mx-2">&gt;</span> 
          <span>Customers</span>
        </div>
      </div>
      
      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total Customers" value="12,500" change="+12.5%" changeType="positive" isDark={isDark} />
        <StatCard title="New Customers (Month)" value="320" change="+8.2%" changeType="positive" isDark={isDark} />
        <StatCard title="Active Customers" value="10,840" change="-1.1%" changeType="negative" isDark={isDark} />
      </div>
      
      {/* Müşteri Tablosu */}
      <CustomersTable isDark={isDark} />
      
    </main>
  );
}

export default CustomersPage;
