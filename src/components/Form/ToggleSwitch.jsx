import React from 'react';

/**
 * Yeniden kullanılabilir, animasyonlu bir toggle (açma/kapama) bileşeni.
 * @param {object} props
 * @param {boolean} props.enabled - Toggle'ın 'açık' (true) veya 'kapalı' (false) durumu.
 * @param {function} props.setEnabled - Toggle'ın durumunu değiştiren state fonksiyonu.
 * @param {string} props.label - Toggle'ın yanında görünecek etiket metni.
 * @param {boolean} props.isDark - Mevcut tema (koyu mod için true).
 */
function ToggleSwitch({ enabled, setEnabled, label, isDark }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
        {label}
      </span>
      <button
        onClick={() => setEnabled(!enabled)}
        type="button"
        className={`relative inline-flex items-center h-6 w-11 flex-shrink-0 rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDark ? 'focus:ring-offset-slate-800' : 'focus:ring-offset-white'
        } ${enabled ? 'bg-indigo-600 focus:ring-indigo-500' : `${isDark ? 'bg-slate-700' : 'bg-slate-200'} focus:ring-slate-500`}`}
        role="switch"
        aria-checked={enabled}
      >
        <span
          aria-hidden="true"
          className={`inline-block w-4 h-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </label>
  );
}

export default ToggleSwitch;
