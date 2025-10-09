import React from 'react';
import { Filter } from 'lucide-react';

// Sahte (mock) veri
const ordersData = [
  {
    image: 'https://cdn.cimri.io/image/1000x1000/apple-macbook-pro-m2-8gb-ram-256gb-ssd-macos-13-3-inc-laptop-notebook_828585134.jpg',
    name: 'MacBook Pro 13"',
    variants: '2 Variants',
    price: '$2399.00',
    category: 'Laptop',
    status: 'Delivered',
  },
  {
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYPD3ref_VW_34FR+watch-case-49-titanium-black-ultra3_VW_34FR+watch-face-49-ocean-ultra3_VW_34FR_GEO_TR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VEREVGFsQzRDQXZXemdUckh4dmo3M2pDV2hhem5qNnpDenFtKzI1OXdzWjRaeVR4RW9XWXhWVHRHeXZEa3AwcDZpTzZlS09Bd0x4ZHpLanhpRFM3bEpiVmVXUVJPYnV1S0FZc3FMLzd3SDRjOUJ3L2xvMzd3UE9qbmZuSVYvRTI4MkhEUlhTQnRRVFdmMHh5VFp4Y2RraVFLdTFzYmxUaFFDNm1xa01lM2lVOFBQS2x2VWhqZG9GTVZlWWZiMG9CMEFOOTk2REk1TmtlVWE1WWZZSVQzZHlQais3RytGWWJ0Nm83bWZDUVNRRQ',
    name: 'Apple Watch Ultra',
    variants: '1 Variant',
    price: '$879.00',
    category: 'Watch',
    status: 'Pending',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81-hBEU+ZdL._UF1000,1000_QL80_.jpg',
    name: 'iPhone 15 Pro Max',
    variants: '2 Variants',
    price: '$1869.00',
    category: 'SmartPhone',
    status: 'Delivered',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81c+9BOQNWL.jpg',
    name: 'iPad Pro',
    variants: '2 Variants',
    price: '$1699.00',
    category: 'Electronics',
    status: 'Canceled',
  },
  {
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181',
    name: 'AirPods Pro 2nd Gen',
    variants: '1 Variant',
    price: '$240.00',
    category: 'Accessories',
    status: 'Delivered',
  },
];


const statusColors = {
    Delivered: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
    Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400',
    Canceled: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
};

function RecentOrders({ isDark }) {
  return (
    <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 ${
        isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
    }`}>
      {/* Kart Başlığı ve Butonlar */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>Recent Orders</h3>
        <div className="flex items-center space-x-2">
            <button className={`flex items-center space-x-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
                <Filter size={14} />
                <span>Filter</span>
            </button>
            <button className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${isDark ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
                See all
            </button>
        </div>
      </div>

      {/* Sipariş Listesi */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
            {/* Tablo Başlıkları */}
            <div className={`grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="col-span-5">Products</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-3">Category</div>
                <div className="col-span-2 text-right">Status</div>
            </div>

            {/* Sipariş Öğeleri */}
            {ordersData.map((order, index) => (
                <div key={index} className={`grid grid-cols-12 gap-4 items-center p-4 rounded-lg transition-colors ${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'}`}>
                    {/* Ürün */}
                    <div className="col-span-5 flex items-center space-x-4">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                            <img src={order.image} alt={order.name} className="w-10 h-10 object-contain"/>
                        </div>
                        <div>
                            <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>{order.name}</p>
                            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{order.variants}</p>
                        </div>
                    </div>
                    {/* Fiyat */}
                    <div className={`col-span-2 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {order.price}
                    </div>
                    {/* Kategori */}
                    <div className={`col-span-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {order.category}
                    </div>
                    {/* Durum */}
                    <div className="col-span-2 flex justify-end">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[order.status]}`}>
                            {order.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecentOrders;