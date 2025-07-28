import React, { useState, useEffect } from "react";
import { Phone, X, MapPin, Navigation, Clock, User } from "lucide-react";

function LiveTracking() {
  const [rideStatus, setRideStatus] = useState("On the way");
  const [eta, setEta] = useState("8 minutes");
  const [driverLocation, setDriverLocation] = useState({
    lat: 40.7128,
    lng: -74.006,
  });

  // Mock driver data
  const driver = {
    name: "Chandriah",
    phone: "+91 98765 12345",
    rating: 4.9,
    vehicle: "Maruti Dzire - TS 09 AB 1234",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
  };

  const currentRide = {
    pickup: "Hitech City, Madhapur",
    dropoff: "Rajiv Gandhi International Airport",
    fare: "₹452",
    bookingId: "VR-2025-001234",
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Mock location updates
      setDriverLocation((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
      }));

      // Mock ETA updates
      const etaMinutes = Math.max(1, parseInt(eta) - 1);
      setEta(`${etaMinutes} minutes`);
    }, 5000);

    return () => clearInterval(interval);
  }, [eta]);

  const handleCancelRide = () => {
    if (confirm("Are you sure you want to cancel this ride?")) {
      alert("Ride cancelled successfully");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Live Tracking</h1>
            <p className="text-gray-600">Booking ID: {currentRide.bookingId}</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-2"></div>
              {rideStatus}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative">
          {/* Mock Map Interface */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-800">
                Live Map View
              </p>
              <p className="text-gray-600">
                Driver location updates in real-time
              </p>
            </div>
          </div>

          {/* Mock Driver Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Pickup Pin */}
          <div className="absolute top-1/4 left-1/3">
            <MapPin className="w-6 h-6 text-green-600" />
          </div>

          {/* Dropoff Pin */}
          <div className="absolute bottom-1/4 right-1/3">
            <Navigation className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Driver Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-purple-600" />
            Your Driver
          </h2>

          <div className="flex items-center space-x-4 mb-4">
            <img
              src={driver.photo}
              alt={driver.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{driver.name}</h3>
              <p className="text-sm text-gray-600">{driver.vehicle}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(driver.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {driver.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call Driver</span>
            </button>
            <button
              onClick={handleCancelRide}
              className="flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel Ride</span>
            </button>
          </div>
        </div>

        {/* Ride Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Navigation className="w-5 h-5 mr-2 text-purple-600" />
            Ride Details
          </h2>

          <div className="space-y-4">
            {/* ETA */}
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Estimated Arrival
                  </p>
                  <p className="text-sm text-gray-600">Driver will arrive in</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{eta}</p>
              </div>
            </div>

            {/* Route */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Pickup</p>
                  <p className="text-sm text-gray-600">{currentRide.pickup}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Drop-off</p>
                  <p className="text-sm text-gray-600">{currentRide.dropoff}</p>
                </div>
              </div>
            </div>

            {/* Fare */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Total Fare</span>
                <span className="text-xl font-bold text-purple-600">
                  {currentRide.fare}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Trip Progress</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-6">
            {/* Booking Confirmed */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Booking Confirmed</p>
                <p className="text-sm text-gray-600">2:30 PM</p>
              </div>
            </div>

            {/* Driver Assigned */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Driver Assigned</p>
                <p className="text-sm text-gray-600">2:32 PM</p>
              </div>
            </div>

            {/* On the Way */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10 animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">
                  Driver is on the way
                </p>
                <p className="text-sm text-gray-600">Current status</p>
              </div>
            </div>

            {/* Arriving */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-500">Driver Arriving</p>
                <p className="text-sm text-gray-400">Pending</p>
              </div>
            </div>

            {/* Trip Started */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-500">Trip Started</p>
                <p className="text-sm text-gray-400">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveTracking;
