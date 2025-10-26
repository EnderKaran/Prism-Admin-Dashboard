import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import CountryFlag from 'react-country-flag';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { MoreVertical } from 'lucide-react';

// Harita verisi için URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Sahte (mock) veri
const demographicsData = [
  { countryCode: 'US', countryName: 'USA', customerCount: '2,379', percentage: 79 },
  { countryCode: 'FR', countryName: 'France', customerCount: '589', percentage: 23 },
];

const markers = [
    { name: "USA", coordinates: [-100.0, 39.0] },
    { name: "France", coordinates: [2.3522, 48.8566] },
    { name: "India", coordinates: [78.9629, 20.5937] },
    { name: "Australia", coordinates: [133.7751, -25.2744] },
];

function DemographicsMap({ isDark }) {

  return (
    // DÜZELTME 1: Ana kart div'i flex-col ve sabit yükseklikte (h-[500px]) yapıldı
    <div className={`p-6 rounded-xl border shadow-sm transition-colors duration-300 flex flex-col h-[500px] ${
        isDark 
            ? 'bg-slate-800 border-slate-700/50' 
            : 'bg-white border-slate-200/50'
    }`}>
      {/* Kart Başlığı (flex-shrink-0 ile boyutu sabitlendi) */}
      <div className="flex items-center justify-between flex-shrink-0 mb-4">
        <div>
          <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Customers Demographic</h3>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Number of customer based on country</p>
        </div>
        <button className={isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}>
            <MoreVertical size={20} />
        </button>
      </div>

      {/* DÜZELTME 2: Harita Konteyneri (h-72 kaldırıldı, flex-1 eklendi) */}
      <div className='flex-1 w-full mb-6' data-tooltip-id="country-tooltip">
        <ComposableMap 
            // DÜZELTME 3: Haritanın kapsayıcıyı %100 doldurması için style eklendi
            style={{ width: '100%', height: '100%' }}
            projectionConfig={{ 
                scale: 160,
                center: [15, 20] 
            }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  
                  data-tooltip-content={geo.properties.name}
                  style={{
                    default: { fill: isDark ? "#475569" : "#E2E8F0", outline: "none" },
                    hover: { fill: isDark ? "#6366F1" : "#A5B4FC", outline: "none" },
                    pressed: { fill: isDark ? "#4F46E5" : "#818CF8", outline: "none" },
                 }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
                <circle r={4} fill="#6366F1" stroke={isDark ? '#1E293B' : '#FFF'} strokeWidth={1.5} />
            </Marker>
          ))}
        </ComposableMap>
        
        <ReactTooltip 
            id="country-tooltip"
            variant={isDark ? 'light' : 'dark'} 
            style={{ 
                borderRadius: '6px', 
                padding: '4px 10px', 
                fontSize: '12px',
                zIndex: 999 // Her zaman en üstte görünmesini sağlar
            }}
        />
      </div>

      {/* Ülke Listesi (flex-shrink-0 ile boyutu sabitlendi) */}
      <div className="flex-shrink-0 space-y-4">
        {demographicsData.map(item => (
          <div key={item.countryCode}>
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-3">
                    <CountryFlag 
                        countryCode={item.countryCode} 
                        svg 
                        style={{ 
                            width: '1.5em', 
                            height: '1.5em', 
                            borderRadius: '4px' 
                        }} 
                    />
                    <div>
                        <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.countryName}</p>
                        <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.customerCount} Customers</p>
                    </div>
                </div>
                <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.percentage}%</span>
            </div>
            <div className={`w-full rounded-full h-1.5 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DemographicsMap;
