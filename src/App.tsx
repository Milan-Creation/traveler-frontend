import React, { useState } from 'react';
import { Plane, Hotel, Car, Search, Calendar, MapPin, Users, ChevronDown } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Plane className="text-blue-600 h-8 w-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TravelEase</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">My Trips</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Offers</a>
            <a href="#" className="font-medium text-gray-700 hover:text-blue-600 transition">Support</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
          filter: "brightness(0.7)"
        }}></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Perfect Journey</h1>
          <p className="text-xl md:text-2xl mb-8">Find and book the best deals on flights, hotels, and transfers</p>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6">
          {/* Tabs */}
          <div className="flex mb-6 border-b">
            <button 
              className={`flex items-center px-6 py-3 font-medium ${activeTab === 'flights' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => setActiveTab('flights')}
            >
              <Plane className="mr-2 h-5 w-5" />
              Flights
            </button>
            <button 
              className={`flex items-center px-6 py-3 font-medium ${activeTab === 'hotels' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => setActiveTab('hotels')}
            >
              <Hotel className="mr-2 h-5 w-5" />
              Hotels
            </button>
            <button 
              className={`flex items-center px-6 py-3 font-medium ${activeTab === 'transfers' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => setActiveTab('transfers')}
            >
              <Car className="mr-2 h-5 w-5" />
              Transfers
            </button>
          </div>

          {/* Flight Search Form */}
          {activeTab === 'flights' && (
            <div>
              <div className="flex mb-4">
                <label className="inline-flex items-center mr-6">
                  <input type="radio" name="trip-type" className="form-radio h-5 w-5 text-blue-600" defaultChecked />
                  <span className="ml-2 text-gray-700">Round Trip</span>
                </label>
                <label className="inline-flex items-center mr-6">
                  <input type="radio" name="trip-type" className="form-radio h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">One Way</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="trip-type" className="form-radio h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">Multi-City</span>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="City or Airport" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="City or Airport" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Select Date" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Select Date" className="w-full focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Travelers & Class</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">1 Adult, Economy</span>
                    <ChevronDown className="h-5 w-5 text-gray-400 ml-2" />
                  </div>
                </div>
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Flights
                </button>
              </div>
            </div>
          )}

          {/* Hotel Search Form */}
          {activeTab === 'hotels' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="City or Hotel" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Select Date" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Select Date" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests & Rooms</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">2 Guests, 1 Room</span>
                    <ChevronDown className="h-5 w-5 text-gray-400 ml-2" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Hotels
                </button>
              </div>
            </div>
          )}

          {/* Transfer Search Form */}
          {activeTab === 'transfers' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Airport or Address" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dropoff Location</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Hotel or Address" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input type="text" placeholder="Select Date" className="w-full focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">2 Passengers</span>
                    <ChevronDown className="h-5 w-5 text-gray-400 ml-2" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Transfers
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Offers Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Offer Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Hotel" 
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-blue-600">Limited Time</span>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded">30% OFF</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Beach Resorts</h3>
              <p className="text-gray-600 mb-4">Experience luxury stays at top beach destinations with exclusive discounts.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold">From $199</span>
                <button className="text-blue-600 font-medium hover:text-blue-800">View Details</button>
              </div>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Flight Deal" 
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-blue-600">Flash Sale</span>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded">50% OFF</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">International Flights</h3>
              <p className="text-gray-600 mb-4">Grab unbelievable deals on international flights to popular destinations.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold">From $299</span>
                <button className="text-blue-600 font-medium hover:text-blue-800">View Details</button>
              </div>
            </div>
          </div>

          {/* Offer Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Holiday Package" 
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-blue-600">Holiday Special</span>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded">25% OFF</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Vacation Packages</h3>
              <p className="text-gray-600 mb-4">All-inclusive vacation packages with flights, hotels, and activities.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold">From $499</span>
                <button className="text-blue-600 font-medium hover:text-blue-800">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Destination 1 */}
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Bali" 
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Bali</h3>
                <p className="text-sm">Indonesia</p>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Paris" 
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Paris</h3>
                <p className="text-sm">France</p>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1543832923-44667a44c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Maldives" 
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">Maldives</h3>
                <p className="text-sm">South Asia</p>
              </div>
            </div>

            {/* Destination 4 */}
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="New York" 
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">New York</h3>
                <p className="text-sm">United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose TravelEase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
            <p className="text-gray-600">Find a lower price? We'll match it and give you an additional discount.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600">Our dedicated support team is available round the clock to assist you.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Plane className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Booking Options</h3>
            <p className="text-gray-600">Change your travel plans with ease with our flexible booking policies.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Stay updated with the latest travel deals, offers, and inspiration delivered straight to your inbox.</p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto md:max-w-2xl">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 rounded-lg md:rounded-r-none mb-2 md:mb-0 w-full focus:outline-none"
            />
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-lg md:rounded-l-none transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="text-blue-400 h-6 w-6" />
                <span className="text-xl font-bold">TravelEase</span>
              </div>
              <p className="text-gray-400 mb-4">Making travel simple, affordable, and enjoyable for everyone.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">COVID-19 Updates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cancellation Options</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Safety Resource Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Accessibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Reward Program Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-center">© 2025 TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;