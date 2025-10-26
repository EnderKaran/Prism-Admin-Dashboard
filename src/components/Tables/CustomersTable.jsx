import React from 'react';
import { MoreVertical, Search, Filter } from 'lucide-react';

// Sahte (mock) müşteri verisi
const customersData = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Terry Franci',
    email: 'terry.franci@example.com',
    phone: '(201) 555-0123',
    status: 'Active',
    totalSpent: '$2,450.80',
    orders: 12,
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Alena Franci',
    email: 'alena.franci@example.com',
    phone: '(202) 555-0145',
    status: 'Active',
    totalSpent: '$1,820.00',
    orders: 8,
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    name: 'Jocelyn Kenter',
    email: 'jocelyn.kenter@example.com',
    phone: '(203) 555-0167',
    status: 'Banned',
    totalSpent: '$350.50',
    orders: 2,
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Brandon Philips',
    email: 'brandon.philips@example.com',
    phone: '(204) 555-0189',
    status: 'Active',
    totalSpent: '$5,120.00',
    orders: 25,
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    name: 'Mara Vit',
    email: 'mara.vit@example.com',
    phone: '(205) 555-0110',
    status: 'Idle',
    totalSpent: '$890.20',
    orders: 5,
  },
];

const statusColors = {
  Active: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
  Banned: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
  Idle: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400',
};

function CustomersTable({ isDark }) {
  return (
    <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 ${
        isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
    }`}>
      {/* Tablo Başlığı ve Filtreler */}
      <div className="flex flex-col items-center justify-between gap-4 mb-4 md:flex-row">
        <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>All Customers</h3>
        <div className="flex items-center w-full space-x-2 md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
            <input 
              type="text" 
              placeholder="Search customer..." 
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                isDark 
                  ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-500' 
                  : 'bg-slate-100 border-transparent text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>
          <button className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-md border transition-colors ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
            <Filter size={14} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Müşteri Listesi - Tablo */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Tablo Başlıkları */}
          <div className={`grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <div className="col-span-3">Customer</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Phone</div>
            <div className="col-span-1">Orders</div>
            <div className="col-span-2">Total Spent</div>
            <div className="col-span-1 text-center">Status</div>
          </div>

          {/* Müşteri Öğeleri */}
          {customersData.map((customer) => (
            <div key={customer.id} className={`grid grid-cols-12 gap-4 items-center p-4 rounded-lg transition-colors text-sm ${isDark ? 'hover:bg-slate-700/50 text-slate-300' : 'hover:bg-slate-50 text-slate-700'}`}>
              
              {/* Müşteri */}
              <div className="flex items-center col-span-3 space-x-3">
                <img src={customer.avatar} alt={customer.name} className="rounded-full w-9 h-9" />
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{customer.name}</span>
              </div>
              
              {/* Email */}
              <div className="col-span-3">{customer.email}</div>
              
              {/* Phone */}
              <div className="col-span-2">{customer.phone}</div>
              
              {/* Orders */}
              <div className="col-span-1">{customer.orders}</div>
              
              {/* Total Spent */}
              <div className={`col-span-2 font-medium ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
                {customer.totalSpent}
              </div>
              
              {/* Status */}
              <div className="flex justify-center col-span-1">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${statusColors[customer.status]}`}>
                  {customer.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sayfalama (Pagination) */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t">
        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Showing 1-5 of 5 customers
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

export default CustomersTable;
