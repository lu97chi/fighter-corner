'use client';

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleDateClick = (arg: { dateStr: string }) => {
    setSelectedDate(arg.dateStr);
    setShowModal(true);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Schedule Training Session</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose your preferred date and time for a personalized training session. 
          All sessions are one-on-one with our professional fighter.
        </p>
      </div>

      <div className="card p-6">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          height="auto"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
          }}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 modal-overlay">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full modal-content shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Available Times for {selectedDate}</h2>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className="bg-gray-100 hover:bg-gray-200 p-4 rounded-xl text-center transition-all
                           hover:shadow-md active:scale-95"
                  onClick={() => {
                    alert(`Booking confirmed for ${selectedDate} at ${time}`);
                    setShowModal(false);
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
            <button
              className="mt-8 w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800 
                       transition-colors active:scale-95"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 