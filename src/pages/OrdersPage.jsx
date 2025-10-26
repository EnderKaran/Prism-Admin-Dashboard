import React from 'react';
import OrdersTable from '../components/Tables/OrdersTable';

function OrdersPage({ theme }) {
  const isDark = theme === 'dark';

  return (
    <main className={`flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto transition-all duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Sayfa Başlığı ve Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Orders
        </h1>
        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="cursor-pointer hover:text-indigo-500">Home</span> 
          <span className="mx-2">&gt;</span> 
          <span>Orders</span>
        </div>
      </div>
      
      {/* Sipariş Tablosu */}
      <OrdersTable isDark={isDark} />
      
    </main>
  );
}

export default OrdersPage;
