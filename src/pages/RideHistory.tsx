import React, { useState } from 'react';
import { Calendar, Filter, Download, MapPin, Clock, Star, Eye } from 'lucide-react';

function RideHistory() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  const rides = [
    {
      id: 'VR-2025-001234',
      date: '2025-01-15',
      time: '2:30 PM',
      pickup: 'Hitech City, Madhapur',
      dropoff: 'Rajiv Gandhi International Airport',
      fare: '₹452',
      status: 'Completed',
      driver: 'Chandriah',
      rating: 5,
      duration: '32 min',
      distance: '18.5 miles'
    },
    {
      id: 'VR-2025-001233',
      date: '2025-01-14',
      time: '9:15 AM',
      pickup: 'Forum Mall, Kukatpally',
      dropoff: 'Miyapur, Home',
      fare: '₹228',
      status: 'Completed',
      driver: 'Ramesh Kumar',
      rating: 4,
      duration: '15 min',
      distance: '8.2 miles'
    },
    {
      id: 'VR-2025-001232',
      date: '2025-01-13',
      time: '6:45 PM',
      pickup: 'Cyber Towers, Hitech City',
      dropoff: 'Jubilee Hills, Restaurant',
      fare: '₹185',
      status: 'Completed',
      driver: 'Suresh Reddy',
      rating: 5,
      duration: '12 min',
      distance: '5.7 miles'
    },
    {
      id: 'VR-2025-001231',
      date: '2025-01-12',
      time: '11:20 AM',
      pickup: 'Secunderabad Station',
      dropoff: 'University of Hyderabad',
      fare: '₹153',
      status: 'Cancelled',
      driver: 'Lakshmi Devi',
      rating: null,
      duration: null,
      distance: null
    },
    {
      id: 'VR-2025-001230',
      date: '2025-01-11',
      time: '7:30 AM',
      pickup: 'Home',
      dropoff: 'Airport',
      fare: '₹389',
      status: 'Completed',
      driver: 'Venkat Rao',
      rating: 4,
      duration: '28 min',
      distance: '15.3 miles'
    }
  ];

  const filteredRides = rides.filter(ride => {
    const statusMatch = filterStatus === 'all' || ride.status.toLowerCase() === filterStatus;
    const dateMatch = !filterDate || ride.date === filterDate;
    return statusMatch && dateMatch;
  });

  const handleViewInvoice = (rideId: string) => {
    alert(`Opening invoice for ride ${rideId}`);
  };

  const handleRateRide = (rideId: string) => {
    alert(`Rating ride ${rideId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ride History</h1>
          <p className="text-gray-600">View and manage your past rides</p>
        </div>
        <button className="mt-4 sm:mt-0 flex items-center space-x-2 bg-[#1B73C2] text-white px-4 py-2 rounded-xl hover:bg-[#155a9a] transition-colors">
          <Download className="w-4 h-4" />
          <span>Export History</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Status
            </label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => {
                setFilterStatus('all');
                setFilterDate('');
              }}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Rides</p>
              <p className="text-2xl font-bold text-gray-900">{rides.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#1B73C2]" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {rides.filter(r => r.status === 'Completed').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-[#1B73C2]">
                ₹{rides.filter(r => r.status === 'Completed').reduce((sum, r) => sum + parseFloat(r.fare.replace('₹', '')), 0).toFixed(0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-[#1B73C2] font-bold">₹</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-yellow-600">4.8</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Rides List */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Rides ({filteredRides.length})
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredRides.map((ride) => (
            <div key={ride.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Left Section - Ride Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-gray-500">#{ride.id}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ride.status)}`}>
                      {ride.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">{ride.pickup}</p>
                        <p className="text-sm text-gray-500">{ride.date} at {ride.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">{ride.dropoff}</p>
                        {ride.duration && (
                          <p className="text-sm text-gray-500">
                            {ride.duration} • {ride.distance}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center Section - Driver & Rating */}
                <div className="flex-shrink-0 lg:mx-8">
                  <div className="text-center">
                    <p className="font-medium text-gray-900">{ride.driver}</p>
                    {ride.rating && (
                      <div className="flex items-center justify-center space-x-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= ride.rating!
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Right Section - Fare & Actions */}
                <div className="flex-shrink-0 text-right">
                  <p className="text-xl font-bold text-gray-900 mb-2">{ride.fare}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleViewInvoice(ride.id)}
                      className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Invoice</span>
                    </button>
                    
                    {ride.status === 'Completed' && ride.rating && (
                      <button
                        onClick={() => handleRateRide(ride.id)}
                        className="flex items-center justify-center space-x-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm"
                      >
                        <Star className="w-3 h-3" />
                        <span>Rate</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredRides.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No rides found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RideHistory;