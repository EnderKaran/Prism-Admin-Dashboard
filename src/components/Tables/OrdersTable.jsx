import React, { useState } from 'react';
import { MoreVertical, Search, Filter } from 'lucide-react';

// Sahte (mock) sipariş verisi 
const allOrdersData = [
  { id: '#1256', customer: 'Terry Franci', date: 'Oct 25, 2025', total: '$2399.00', status: 'Delivered' },
  { id: '#1257', customer: 'Alena Franci', date: 'Oct 25, 2025', total: '$879.00', status: 'Pending' },
  { id: '#1258', customer: 'Brandon Philips', date: 'Oct 24, 2025', total: '$1869.00', status: 'Delivered' },
  { id: '#1259', customer: 'Jocelyn Kenter', date: 'Oct 24, 2025', total: '$1699.00', status: 'Canceled' },
  { id: '#1260', customer: 'Mara Vit', date: 'Oct 23, 2025', total: '$240.00', status: 'Delivered' },
  { id: '#1261', customer: 'Terry Franci', date: 'Oct 22, 2025', total: '$55.00', status: 'Delivered' },
  { id: '#1262', customer: 'Brandon Philips', date: 'Oct 21, 2025', total: '$320.00', status: 'Pending' },
  { id: '#1263', customer: 'Alena Franci', date: 'Oct 20, 2025', total: '$199.90', status: 'Delivered' },
];

const statusColors = {
  Delivered: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
  Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400',
  Canceled: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
};

const filterTabs = ['All', 'Delivered', 'Pending', 'Canceled'];

function OrdersTable({ isDark }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = allOrdersData.filter(order => {
    // 1. Durum (Tab) filtresi
    const statusMatch = activeTab === 'All' ? true : order.status === activeTab;

    // 2. Arama filtresi (ID veya Müşteri adı)
    const searchMatch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    // Her iki koşul da doğru olmalı
    return statusMatch && searchMatch;
  });

  return (
    <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 ${
        isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
    }`}>
      {/* Tablo Başlığı ve Filtreler */}
      <div className="flex flex-col items-center justify-between gap-4 mb-4 md:flex-row">
        <div className="flex items-center space-x-2">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                activeTab === tab
                  ? `text-indigo-600 ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-50'}`
                  : `${isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'}`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center w-full space-x-2 md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
            <input 
              type="text" 
              placeholder="Search order ID or customer..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                isDark 
                  ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-500' 
                  : 'bg-slate-100 border-transparent text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Sipariş Listesi - Tablo */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Tablo Başlıkları */}
          <div className={`grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <div className="col-span-2">Order ID</div>
            <div className="col-span-3">Customer</div>
            <div className="col-span-3">Date</div>
            <div className="col-span-2">Total</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Sipariş Öğeleri */}
          {filteredOrders.map((order) => (
            <div key={order.id} className={`grid grid-cols-12 gap-4 items-center p-4 rounded-lg transition-colors text-sm ${isDark ? 'hover:bg-slate-700/50 text-slate-300' : 'hover:bg-slate-50 text-slate-700'}`}>
              
              {/* Order ID */}
              <div className={`col-span-2 font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{order.id}</div>
              
              {/* Customer */}
              <div className="col-span-3">{order.customer}</div>
              
              {/* Date */}
              <div className="col-span-3">{order.date}</div>
              
              {/* Total */}
              <div className={`col-span-2 font-medium ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>{order.total}</div>
              
              {/* Status */}
              <div className="flex justify-end col-span-2">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sayfalama (Pagination) */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t">
        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Showing {filteredOrders.length} of {allOrdersData.length} orders
        </span>
        <div className="flex items-center space-x-1">
          <button className={`px-2.5 py-1 text-sm rounded-md ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Previous</button>
          <button className={`px-2.5 py-1 text-sm rounded-md ${isDark ? 'bg-slate-700 text-white' : 'bg-indigo-600 text-white'}`}>1</button>
          <button className={`px-2.5 py-1 text-sm rounded-md ${isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-slate-100'}`}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;

