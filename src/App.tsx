import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  Plus, 
  ShieldCheck, 
  Star, 
  Navigation, 
  ArrowRight,
  CheckCircle2,
  Users,
  CreditCard,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface Ride {
  id: string;
  driverName: string;
  driverAvatar: string;
  driverRating: number;
  origin: string;
  destination: string;
  date: string;
  time: string;
  seatsAvailable: number;
  price: number;
  carModel: string;
  verified: boolean;
}

// --- Mock Data ---

const MOCK_RIDES: Ride[] = [
  {
    id: '1',
    driverName: 'Sarah Jenkins',
    driverAvatar: 'https://picsum.photos/seed/sarah/100/100',
    driverRating: 4.8,
    origin: 'Downtown San Francisco',
    destination: 'Palo Alto',
    date: '2024-05-20',
    time: '08:30 AM',
    seatsAvailable: 3,
    price: 12,
    carModel: 'Tesla Model 3',
    verified: true,
  },
  {
    id: '2',
    driverName: 'Michael Chen',
    driverAvatar: 'https://picsum.photos/seed/michael/100/100',
    driverRating: 4.9,
    origin: 'Oakland',
    destination: 'San Jose',
    date: '2024-05-20',
    time: '09:00 AM',
    seatsAvailable: 2,
    price: 15,
    carModel: 'Toyota Prius',
    verified: true,
  },
  {
    id: '3',
    driverName: 'Elena Rodriguez',
    driverAvatar: 'https://picsum.photos/seed/elena/100/100',
    driverRating: 4.7,
    origin: 'Berkeley',
    destination: 'San Francisco',
    date: '2024-05-21',
    time: '07:45 AM',
    seatsAvailable: 1,
    price: 8,
    carModel: 'Honda Civic',
    verified: false,
  }
];

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-2">
              <Navigation className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">Route</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('search')} className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors flex items-center">
              <Search className="w-4 h-4 mr-1" /> Find a Ride
            </button>
            <button onClick={() => onNavigate('post')} className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-1" /> Post a Ride
            </button>
            <div className="h-4 w-px bg-zinc-200"></div>
            <button className="text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">Login</button>
            <button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm">Sign Up</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => { onNavigate('search'); setIsOpen(false); }} className="block w-full text-left text-zinc-600 font-medium">Find a Ride</button>
              <button onClick={() => { onNavigate('post'); setIsOpen(false); }} className="block w-full text-left text-zinc-600 font-medium">Post a Ride</button>
              <button className="block w-full text-left text-zinc-600 font-medium">Login</button>
              <button className="block w-full bg-zinc-900 text-white px-4 py-2 rounded-lg text-center font-medium">Sign Up</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onSearch }: { onSearch: () => void }) => (
  <section className="relative py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            Community-Powered Commuting
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6 leading-tight">
            Your daily commute, <br />
            <span className="text-emerald-600">shared and simplified.</span>
          </h1>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Route connects you with people traveling the same way. Save money, reduce traffic, and make your journey more social.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-xl border border-zinc-100 flex flex-col md:flex-row items-center gap-2"
      >
        <div className="flex-1 w-full relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Leaving from..." 
            className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
        <div className="flex-1 w-full relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Going to..." 
            className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400"
          />
        </div>
        <div className="w-full md:w-48 relative">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input 
            type="date" 
            className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 bg-zinc-50 text-zinc-900"
          />
        </div>
        <button 
          onClick={onSearch}
          className="w-full md:w-auto bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </motion.div>
    </div>
    
    {/* Background Elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
    </div>
  </section>
);

const RideCard = ({ ride }: { ride: Ride }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <img src={ride.driverAvatar} alt={ride.driverName} className="w-12 h-12 rounded-full object-cover ring-2 ring-zinc-50" />
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-bold text-zinc-900">{ride.driverName}</h3>
            {ride.verified && <ShieldCheck className="w-4 h-4 text-emerald-500 fill-emerald-50" />}
          </div>
          <div className="flex items-center text-xs text-zinc-500 gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>{ride.driverRating} • {ride.carModel}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-2xl font-bold text-zinc-900">${ride.price}</span>
        <p className="text-xs text-zinc-500">per seat</p>
      </div>
    </div>

    <div className="space-y-4 relative">
      <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-zinc-100 border-l border-dashed border-zinc-300"></div>
      
      <div className="flex items-start gap-4 relative">
        <div className="w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center z-10">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
        </div>
        <div>
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Origin</p>
          <p className="text-sm font-semibold text-zinc-800">{ride.origin}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 relative">
        <div className="w-6 h-6 rounded-full bg-white border-2 border-zinc-300 flex items-center justify-center z-10">
          <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
        </div>
        <div>
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Destination</p>
          <p className="text-sm font-semibold text-zinc-800">{ride.destination}</p>
        </div>
      </div>
    </div>

    <div className="mt-6 pt-6 border-t border-zinc-50 flex justify-between items-center">
      <div className="flex gap-4">
        <div className="flex items-center text-zinc-500 text-xs gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{ride.time}</span>
        </div>
        <div className="flex items-center text-zinc-500 text-xs gap-1">
          <Users className="w-3.5 h-3.5" />
          <span>{ride.seatsAvailable} seats left</span>
        </div>
      </div>
      <button className="text-emerald-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
        View Details <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const SearchPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="w-full md:w-64 space-y-8">
        <div>
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Sort By</h3>
          <div className="space-y-2">
            {['Earliest', 'Lowest Price', 'Highest Rating'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="sort" className="w-4 h-4 text-emerald-600 border-zinc-300 focus:ring-emerald-500" />
                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Departure Time</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
              <button key={time} className="px-3 py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:border-emerald-500 hover:text-emerald-600 transition-all">
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-zinc-900 rounded-2xl text-white">
          <h4 className="font-bold mb-2">Verified Only</h4>
          <p className="text-xs text-zinc-400 mb-4">Show rides from drivers with verified identity and vehicle.</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Enable</span>
            <div className="w-10 h-5 bg-emerald-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Results */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-zinc-900">3 rides found</h2>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>SF Bay Area</span>
            <ArrowRight className="w-3 h-3" />
            <span>South Bay</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MOCK_RIDES.map(ride => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      </main>
    </div>
  </div>
);

const PostRidePage = () => (
  <div className="max-w-3xl mx-auto px-4 py-12">
    <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-12 shadow-sm">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Post a Ride</h1>
        <p className="text-zinc-500">Share your journey and cover your fuel costs.</p>
      </div>

      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Leaving From</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input type="text" placeholder="City or address" className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Going To</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input type="text" placeholder="City or address" className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Date</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Time</label>
            <input type="time" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Seats Available</label>
            <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none bg-white">
              {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} seats</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">Price per Seat ($)</label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input type="number" placeholder="10" className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <p className="text-xs text-zinc-400">We suggest $12 for this route based on fuel costs.</p>
        </div>

        <div className="pt-4">
          <button type="button" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
            Publish Ride
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-zinc-50 border-t border-zinc-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-2">
              <Navigation className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">Route</span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Making commuting better for everyone. Share rides, save money, and help the planet.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="hover:text-emerald-600 cursor-pointer">Find a Ride</li>
            <li className="hover:text-emerald-600 cursor-pointer">Post a Ride</li>
            <li className="hover:text-emerald-600 cursor-pointer">How it Works</li>
            <li className="hover:text-emerald-600 cursor-pointer">Safety</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="hover:text-emerald-600 cursor-pointer">About Us</li>
            <li className="hover:text-emerald-600 cursor-pointer">Careers</li>
            <li className="hover:text-emerald-600 cursor-pointer">Press</li>
            <li className="hover:text-emerald-600 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li className="hover:text-emerald-600 cursor-pointer">Help Center</li>
            <li className="hover:text-emerald-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-emerald-600 cursor-pointer">Terms</li>
            <li className="hover:text-emerald-600 cursor-pointer">Privacy</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-zinc-400">© 2024 Route Technologies Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 transition-all cursor-pointer">
            <Users className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 transition-all cursor-pointer">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 transition-all cursor-pointer">
            <Bell className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'search': return <SearchPage />;
      case 'post': return <PostRidePage />;
      default: return (
        <>
          <Hero onSearch={() => setCurrentPage('search')} />
          <section className="py-20 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">Popular Routes</h2>
                  <p className="text-zinc-500">Check out where people are heading today.</p>
                </div>
                <button onClick={() => setCurrentPage('search')} className="text-emerald-600 font-bold flex items-center gap-2 group">
                  View all rides <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_RIDES.map(ride => (
                  <RideCard key={ride.id} ride={ride} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">
                    Why choose <span className="text-emerald-600">Route</span> for your next journey?
                  </h2>
                  <div className="space-y-8">
                    {[
                      {
                        title: 'Save on Fuel Costs',
                        desc: 'Split the cost of gas and tolls with others traveling your way.',
                        icon: <CreditCard className="w-6 h-6 text-emerald-600" />
                      },
                      {
                        title: 'Verified Community',
                        desc: 'Every driver and passenger is verified for a safe and trusted experience.',
                        icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
                      },
                      {
                        title: 'Eco-Friendly',
                        desc: 'Reduce your carbon footprint by filling empty seats and taking cars off the road.',
                        icon: <Navigation className="w-6 h-6 text-emerald-600" />
                      }
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 mb-1">{feature.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://picsum.photos/seed/commute/800/800" 
                      alt="Commuting" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-xs">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <span className="font-bold text-zinc-900">1.2M+ Tons</span>
                    </div>
                    <p className="text-xs text-zinc-500">CO2 emissions saved by our community in the last 12 months.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
