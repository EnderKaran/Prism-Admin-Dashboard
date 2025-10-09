import React from 'react';

function FormInput({ label, value, onChange, isDark, type = 'text' }) {
  return (
    <div>
      <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        {label}
      </label>
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        className={`w-full rounded-md border p-2 text-sm transition-colors ${
          isDark 
            ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-500' 
            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
        }`} 
      />
    </div>
  );
}

export default FormInput;