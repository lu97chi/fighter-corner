'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] rounded-2xl overflow-hidden mb-12">
        <Image
          src="/portrait.jpg"
          alt="Fight Club Gym"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Fight Club
          </h1>
          <p className="text-xl text-gray-300">
            Where champions are forged
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="prose prose-lg prose-invert">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p>
            Founded in 2015, Fight Club has grown from a small local gym into one of the most
            respected MMA training facilities in the region. Our journey began with a simple
            mission: to provide world-class training in a welcoming environment.
          </p>
          <p>
            Today, we continue to push the boundaries of what&apos;s possible, helping both
            beginners and professional fighters achieve their goals through dedication,
            discipline, and expert guidance.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/portrait-2.jpg"
            alt="Training at Fight Club"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-bold mb-8">Our Trainers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { name: 'John "The Rock" Smith', role: 'Head Coach', specialty: 'Brazilian Jiu-Jitsu', image: '/portrait-4.jpg' },
          { name: 'Sarah "Lightning" Johnson', role: 'Striking Coach', specialty: 'Muay Thai', image: '/portrait-5.jpg' },
          { name: 'Mike "Ground King" Wilson', role: 'Grappling Coach', specialty: 'Wrestling', image: '/portrait-6.jpg' },
        ].map((trainer) => (
          <div key={trainer.name} className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="relative h-64">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
              <p className="text-gray-400 mb-2">{trainer.role}</p>
              <p className="text-[var(--primary)]">{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Facilities Section */}
      <h2 className="text-3xl font-bold mb-8">Our Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Training Area', description: '5,000 sq ft of mat space', image: '/portrait-7.jpg' },
          { name: 'Boxing Ring', description: 'Professional boxing ring', image: '/portrait-8.jpg' },
          { name: 'Weight Room', description: 'Full strength training equipment', image: '/portrait-9.jpg' },
          { name: 'Recovery Zone', description: 'Ice baths and recovery tools', image: '/portrait-10.jpg' },
          { name: 'Cardio Section', description: 'State-of-the-art cardio machines', image: '/portrait-11.jpg' },
          { name: 'Locker Rooms', description: 'Modern locker rooms with showers', image: '/portrait-12.jpg' },
        ].map((facility) => (
          <div key={facility.name} className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
              <p className="text-gray-400">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 