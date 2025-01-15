'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format, addDays, isBefore, startOfToday } from 'date-fns';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock time slots
  const allTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        // Simulate random availability (in a real app, this would come from an API)
        const available = allTimeSlots.filter(() => Math.random() > 0.3);
        setAvailableSlots(available);
        setIsLoading(false);
      }, 500);
    }
  }, [selectedDate]);

  const handleDateClick = (arg: { dateStr: string; date: Date }) => {
    const today = startOfToday();
    if (isBefore(arg.date, today)) {
      alert("Cannot book sessions in the past");
      return;
    }
    
    const maxBookingDate = addDays(today, 30);
    if (isBefore(maxBookingDate, arg.date)) {
      alert("Cannot book sessions more than 30 days in advance");
      return;
    }

    setSelectedDate(arg.dateStr);
    setShowModal(true);
  };

  const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'EEEE, MMMM do, yyyy');
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="section-title">Schedule Your Training</h1>
        <div className="h-1 w-20 bg-[var(--primary)] mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg">
          Choose your preferred date and time for a personalized training session. 
          All sessions are one-on-one with our professional fighter.
        </p>
      </div>

      <div className="card p-0 overflow-hidden">
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
          dayMaxEvents={true}
          fixedWeekCount={false}
          showNonCurrentDates={false}
          validRange={{
            start: new Date(),
            end: addDays(new Date(), 31)
          }}
        />
      </div>

      {showModal && selectedDate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 modal-overlay z-50">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-w-md w-full modal-content shadow-2xl border border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-2">Available Times</h2>
              <div className="h-1 w-12 bg-[var(--primary)] mx-auto mb-3"></div>
              <p className="text-gray-400">{formatDate(selectedDate)}</p>
            </div>
            
            {isLoading ? (
              <div className="py-12 text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-[var(--primary)] border-t-transparent mx-auto"></div>
                <p className="text-gray-400 mt-4">Loading available times...</p>
              </div>
            ) : availableSlots.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-300 text-lg">
                  No available slots for this date.
                </p>
                <p className="text-gray-500 mt-2">
                  Please try selecting another day.
                </p>
              </div>
            ) : (
              <div className="time-slots-grid">
                {allTimeSlots.map((time) => {
                  const isAvailable = availableSlots.includes(time);
                  return (
                    <button
                      key={time}
                      className={`time-slot-btn ${isAvailable ? 'available' : 'unavailable'}`}
                      onClick={() => {
                        if (isAvailable) {
                          alert(`Booking confirmed for ${formatDate(selectedDate)} at ${time}`);
                          setShowModal(false);
                        }
                      }}
                      disabled={!isAvailable}
                    >
                      {time}
                      {!isAvailable && (
                        <span className="block text-xs mt-1 text-gray-500">Unavailable</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
            
            <button
              className="mt-8 w-full bg-[var(--primary)] text-white p-3 rounded-lg 
                       hover:bg-[var(--primary-dark)] transition-colors active:scale-95
                       uppercase tracking-wider font-bold"
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