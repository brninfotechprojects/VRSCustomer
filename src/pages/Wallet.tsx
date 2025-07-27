import React, { useState } from 'react';
import { 
  CreditCard, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Gift,
  Smartphone,
  Building,
  DollarSign,
  Clock,
  CheckCircle,
  X
} from 'lucide-react';

function Wallet() {
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [addAmount, setAddAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi');
  const [promoCode, setPromoCode] = useState('');

  const walletBalance = 1245;
  
  const transactions = [
    {
      id: '1',
      type: 'debit',
      amount: 452,
      description: 'Ride to Airport',
      date: '2025-01-15',
      time: '2:30 PM',
      status: 'completed'
    },
    {
      id: '2',
      type: 'credit',
      amount: 500,
      description: 'Wallet top-up',
      date: '2025-01-15',
      time: '1:15 PM',
      status: 'completed'
    },
    {
      id: '3',
      type: 'debit',
      amount: 228,
      description: 'Ride to Home',
      date: '2025-01-14',
      time: '9:15 AM',
      status: 'completed'
    },
    {
      id: '4',
      type: 'credit',
      amount: 100,
      description: 'Referral bonus',
      date: '2025-01-13',
      time: '5:20 PM',
      status: 'completed'
    },
    {
      id: '5',
      type: 'debit',
      amount: 185,
      description: 'Ride to Restaurant',
      date: '2025-01-13',
      time: '6:45 PM',
      status: 'completed'
    }
  ];

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'PhonePe, GPay, Paytm' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'netbanking', name: 'Net Banking', icon: Building, description: 'All major banks' }
  ];

  const handleAddMoney = () => {
    if (addAmount) {
      alert(`Adding ₹${addAmount} to wallet via ${selectedPaymentMethod.toUpperCase()}`);
      setShowAddMoney(false);
      setAddAmount('');
    }
  };

  const handleApplyPromo = () => {
    if (promoCode) {
      alert(`Applying promo code: ${promoCode}`);
      setPromoCode('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
          <p className="text-gray-600">Manage your payments and transactions</p>
        </div>
      </div>

      {/* Wallet Balance Card */}
      <div className="bg-[#1B73C2] rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 mb-2">Available Balance</p>
            <p className="text-4xl font-bold">₹{walletBalance.toFixed(0)}</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setShowAddMoney(true)}
            className="flex items-center justify-center space-x-2 bg-white text-purple-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Money</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/30 transition-colors">
            <ArrowUpRight className="w-5 h-5" />
            <span>Send Money</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction History */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-purple-600" />
              Transaction History
            </h2>
          </div>
          
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'credit' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className="w-5 h-5" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.date} at {transaction.time}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toFixed(0)}
                  </p>
                  <div className="flex items-center justify-end mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-gray-500 capitalize">{transaction.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="space-y-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleApplyPromo}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-xl hover:bg-orange-700 transition-colors font-semibold"
              >
                Apply Code
              </button>
            </div>
            
            <div className="mt-4 p-3 bg-orange-50 rounded-xl">
              <p className="text-sm text-orange-800">
                <strong>WELCOME20:</strong> Get 20% off on your first ride!
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-xl font-bold text-purple-600">₹1,563</p>
                <p className="text-xs text-gray-500">Spent</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Saved</p>
                <p className="text-xl font-bold text-green-600">₹235</p>
                <p className="text-xs text-gray-500">With promos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Money Modal */}
      {showAddMoney && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add Money to Wallet</h3>
              <button
                onClick={() => setShowAddMoney(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={addAmount}
                  onChange={(e) => setAddAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[250, 500, 1000, 2000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setAddAmount(amount.toString())}
                    className="py-2 px-3 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="space-y-2">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <label
                      key={method.id}
                      className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedPaymentMethod === method.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPaymentMethod === method.id}
                        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <Icon className="w-6 h-6 text-gray-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{method.name}</p>
                        <p className="text-sm text-gray-500">{method.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowAddMoney(false)}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMoney}
                disabled={!addAmount}
                className="flex-1 py-3 px-4 bg-[#1B73C2] text-white rounded-xl hover:bg-[#155a9a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Money
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;