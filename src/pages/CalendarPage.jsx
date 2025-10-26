import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { addMonths, subMonths } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US';
import EventModal from '../components/Modals/EventModal'; 
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; 

// locales, localizer, initialEvents
const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });
const initialEvents = [
  { id: uuidv4(), title: 'Team Sync', start: new Date(2025, 9, 3, 10, 30), end: new Date(2025, 9, 3, 12, 30), color: '#10B981' },
  { id: uuidv4(), title: 'Client Meeting', start: new Date(2025, 9, 10, 14, 0), end: new Date(2025, 9, 10, 15, 30), color: '#6366F1' },
  { id: uuidv4(), title: 'Project Deadline', start: new Date(2025, 9, 10), end: new Date(2025, 9, 10), allDay: true, color: '#EF4444' },
  { id: uuidv4(), title: 'Design Review', start: new Date(2025, 9, 26, 16, 0), end: new Date(2025, 9, 26, 17, 0), color: '#A855F7' },
];

function CalendarPage({ theme }) {
  const isDark = theme === 'dark';
  const [events, setEvents] = useState(initialEvents);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
  const [view, setView] = useState('month');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handlePrev = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNext = () => setCurrentDate(addMonths(currentDate, 1));

  const handleSelectSlot = (slotInfo) => {
    setSelectedEvent({ start: slotInfo.start, end: slotInfo.end });
    setModalOpen(true);
  };
 
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleAddEventClick = () => {
    setSelectedEvent(null); 
    setModalOpen(true);
  };
 
  const handleSaveEvent = (eventData) => {
    if (eventData.id) {
      setEvents(events.map(e => e.id === eventData.id ? eventData : e));
    } else {
      setEvents([...events, { ...eventData, id: uuidv4() }]);
    }
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event) => ({
    style: { backgroundColor: event.color, borderRadius: '6px', opacity: 1, color: 'white', border: '0px', display: 'block' }
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Sol Navigasyon Butonları */}
        <div className="flex items-center space-x-2">
            <button onClick={handlePrev} className={`p-1.5 rounded-md transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-500 hover:bg-slate-100'}`}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} className={`p-1.5 rounded-md transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-500 hover:bg-slate-100'}`}>
              <ChevronRight size={20} />
            </button>
        </div>
        
        {/* Sağ Kontrol Butonları */}
        <div className="flex items-center space-x-4">
          {/* Month/Week/Day Buton Grubu */}
          <div className={`flex items-center p-1 rounded-lg ${isDark ? 'bg-[#212B36]' : 'bg-slate-200'}`}>
            <button onClick={() => setView('month')} className={`px-3 py-1 text-sm rounded-md transition-colors ${
                view === 'month' 
                  ? `shadow-sm ${isDark ? 'bg-[#39434F] text-white' : 'bg-white text-indigo-600'}` 
                  : `${isDark ? 'text-slate-400 hover:bg-slate-700/50' : 'text-slate-500 hover:bg-slate-100'}`
              }`}>
                Month
            </button>
            <button onClick={() => setView('week')} className={`px-3 py-1 text-sm rounded-md transition-colors ${
                view === 'week' 
                  ? `shadow-sm ${isDark ? 'bg-[#39434F] text-white' : 'bg-white text-indigo-600'}` 
                  : `${isDark ? 'text-slate-400 hover:bg-slate-700/50' : 'text-slate-500 hover:bg-slate-100'}`
              }`}>
                Week
            </button>
            <button onClick={() => setView('day')} className={`px-3 py-1 text-sm rounded-md transition-colors ${
                view === 'day' 
                  ? `shadow-sm ${isDark ? 'bg-[#39434F] text-white' : 'bg-white text-indigo-600'}` 
                  : `${isDark ? 'text-slate-400 hover:bg-slate-700/50' : 'text-slate-500 hover:bg-slate-100'}`
              }`}>
                Day
            </button>
          </div>
          
          {/* Add Event Butonu */}
          <button onClick={handleAddEventClick} className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg font-semibold transition-colors ${
            isDark ? 'text-slate-300 hover:text-white' : 'text-indigo-600 hover:bg-indigo-50'
            }`}>
            <Plus size={16}/>
            <span>Add Event</span>
          </button>
        </div>
      </div>

      <div className={`h-auto ${isDark ? 'rbc-dark' : ''}`}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          view={view}
          onView={(view) => setView(view)}
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          eventPropGetter={eventStyleGetter}
          components={{ toolbar: () => null }}
          
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable 
        />
      </div>
      
      {/* Modal */}
      <EventModal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveEvent}
        event={selectedEvent}
        isDark={isDark}
      />
    </>
  );
}

export default CalendarPage;

