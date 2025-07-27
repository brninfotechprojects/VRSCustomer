import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  MapPin,
  Car,
  Clock,
  DollarSign,
  Gift,
  Users,
  Star,
  Search,
  Navigation,
  Plus,
  ArrowRight,
} from "lucide-react";

function Dashboard() {
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    vehicleType: "Sedan",
  });
  const [promoCode, setPromoCode] = useState("");

  const vehicleTypes = [
    { name: "Mini", price: 120, time: "5-10 min" },
    { name: "Sedan", price: 180, time: "3-8 min" },
    { name: "Shuttle", price: 80, time: "10-15 min" },
  ];

  const recentRides = [
    {
      id: 1,
      date: "2025-01-15",
      route: "Hitech City → Airport",
      fare: "₹350",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-01-14",
      route: "Forum Mall → Home",
      fare: "₹220",
      status: "Completed",
    },
    {
      id: 3,
      date: "2025-01-13",
      route: "Office → Restaurant",
      fare: "₹180",
      status: "Completed",
    },
  ];

  const handleBookRide = () => {
    // In a real app, this would handle the booking logic
    alert("Searching for available rides...");
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      {/* <div className="bg-[#1B73C2] rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-blue-100 mt-2">Ready for your next journey?</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 rounded-xl p-4">
              <Car className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Book a Ride Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Search className="w-5 h-5 mr-2 text-purple-600" />
              Book Your Ride
            </h2>

            <div className="space-y-4">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                  <input
                    type="text"
                    value={bookingData.pickup}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        pickup: e.target.value,
                      }))
                    }
                    placeholder="Enter pickup location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Dropoff Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Location
                </label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                  <input
                    type="text"
                    value={bookingData.dropoff}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        dropoff: e.target.value,
                      }))
                    }
                    placeholder="Enter destination"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Vehicle Type Selection */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Vehicle Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {vehicleTypes.map((vehicle) => (
                    <div
                      key={vehicle.name}
                      className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        bookingData.vehicleType === vehicle.name
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() =>
                        setBookingData((prev) => ({
                          ...prev,
                          vehicleType: vehicle.name,
                        }))
                      }
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Car className="w-6 h-6 text-gray-600" />
                        <span className="text-lg font-bold text-purple-600">
                          ₹{vehicle.price}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <p className="text-sm text-gray-500">{vehicle.time}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Search Button */}
              <button
                onClick={handleBookRide}
                className="w-full bg-[#1B73C2] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#155a9a] transition-all flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search Available Rides</span>
              </button>
            </div>
          </div>

          {/* Live Tracking Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-purple-600" />
              Live Tracking
            </h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">
                  Map will appear here when you book a ride
                </p>
              </div>
            </div>
          </div>

          {/* Recent Rides */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-600" />
                Recent Rides
              </h2>
              <a
                href="/history"
                className="text-purple-600 hover:text-purple-700 font-medium flex items-center"
              >
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="space-y-3">
              {recentRides.map((ride) => (
                <div
                  key={ride.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{ride.route}</p>
                    <p className="text-sm text-gray-500">{ride.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{ride.fare}</p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {ride.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Wallet Balance */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              Wallet Balance
            </h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹1,245
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Money</span>
              </button>
            </div>
          </div>

          {/* Estimated Fare */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Estimated Fare
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Fare</span>
                <span className="font-semibold">₹150</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distance</span>
                <span className="font-semibold">₹85</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time</span>
                <span className="font-semibold">₹32</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-purple-600">₹267</span>
              </div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Gift className="w-5 h-5 mr-2 text-orange-600" />
              Promo Code
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-xl hover:bg-orange-700 transition-colors">
                Apply Code
              </button>
            </div>
          </div>

          {/* Referral */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Invite Friends
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Share your referral code and earn $10 for each friend who joins!
            </p>
            <div className="bg-gray-100 p-3 rounded-xl text-center mb-3">
              <code className="font-mono font-bold text-purple-600">
                VR2025FRIEND
              </code>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
              Share Referral Link
            </button>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Your Rating
            </h3>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-gray-500">Based on 24 rides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
