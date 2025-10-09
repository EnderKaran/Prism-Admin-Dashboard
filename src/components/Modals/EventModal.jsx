import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const colorOptions = [
  { name: 'Danger', value: '#EF4444', ring: 'ring-red-500' },
  { name: 'Success', value: '#10B981', ring: 'ring-green-500' },
  { name: 'Primary', value: '#6366F1', ring: 'ring-indigo-500' },
  { name: 'Warning', value: '#F59E0B', ring: 'ring-amber-500' },
];

function EventModal({ isOpen, onClose, onSave, event, isDark }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#6366F1');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  useEffect(() => {
    if (event) {
      setTitle(event.title || '');
      setColor(event.color || '#6366F1');
      setStart(event.start ? new Date(event.start) : new Date());
      setEnd(event.end ? new Date(event.end) : new Date());
    }
  }, [event]);

  if (!isOpen) return null;
  
  const isEditing = event && event.title;

  const handleSave = () => {
    onSave({ ...event, title, start, end, color });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl transition-all ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
        <button onClick={onClose} className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${isDark ? 'text-slate-400 hover:bg-slate-700' : 'text-slate-500 hover:bg-slate-100'}`}>
          <X size={20} />
        </button>

        <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{isEditing ? 'Edit Event' : 'Add Event'}</h2>

        <div className="space-y-4">
          <div>
            <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Event Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={`mt-1 w-full rounded-lg border p-2.5 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
          </div>

          <div>
            <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Event Color</label>
            <div className="flex items-center space-x-4 mt-2">
              {colorOptions.map(opt => (
                <label key={opt.name} className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="event-color" value={opt.value} checked={color === opt.value} onChange={() => setColor(opt.value)} className="hidden" />
                  <span className={`h-5 w-5 rounded-full ring-2 ring-offset-2 transition-all ${color === opt.value ? opt.ring : 'ring-transparent'} ${isDark ? 'ring-offset-slate-800' : 'ring-offset-white'}`} style={{ backgroundColor: opt.value }}></span>
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{opt.name}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Start Date</label>
              <div className="relative mt-1">
                <input type="text" readOnly value={format(start, 'MM/dd/yyyy')} className={`w-full rounded-lg border p-2.5 pr-10 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                <CalendarIcon size={18} className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
              </div>
            </div>
            <div>
              <label className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>End Date</label>
              <div className="relative mt-1">
                <input type="text" readOnly value={format(end, 'MM/dd/yyyy')} className={`w-full rounded-lg border p-2.5 pr-10 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                <CalendarIcon size={18} className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 mt-8">
          <button onClick={onClose} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}>Close</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
            {isEditing ? 'Update Changes' : 'Add Event'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventModal;