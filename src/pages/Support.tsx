import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Send,
  MessageCircle,
  FileText,
  Clock
} from 'lucide-react';

function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'general',
    message: ''
  });

  const faqs = [
    {
      id: 1,
      question: 'How do I book a ride?',
      answer: 'To book a ride, simply enter your pickup and drop-off locations on the dashboard, select your preferred vehicle type, and click "Search Available Rides". You\'ll be shown available drivers and can confirm your booking.'
    },
    {
      id: 2,
      question: 'How can I track my ride?',
      answer: 'Once your ride is confirmed, you can track your driver\'s location in real-time on the Live Tracking page. You\'ll receive notifications about your driver\'s arrival and trip progress.'
    },
    {
      id: 3,
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI payments (PhonePe, GPay, Paytm), credit/debit cards (Visa, Mastercard, Amex), net banking, and wallet payments. You can also pay cash directly to the driver.'
    },
    {
      id: 4,
      question: 'How do I cancel a ride?',
      answer: 'You can cancel your ride from the Live Tracking page or dashboard if the driver hasn\'t arrived yet. Cancellation charges may apply based on the timing of cancellation.'
    },
    {
      id: 5,
      question: 'How is the fare calculated?',
      answer: 'Fare is calculated based on distance, time, vehicle type, and current demand. You\'ll see the estimated fare before confirming your booking. Additional charges may apply for tolls, waiting time, or peak hours.'
    },
    {
      id: 6,
      question: 'What if I forgot something in the vehicle?',
      answer: 'Contact our support team immediately with your ride details. We\'ll help you connect with the driver to retrieve your lost item. You can also call the driver directly if the trip was recent.'
    },
    {
      id: 7,
      question: 'How do I add money to my wallet?',
      answer: 'Go to the Wallet section, click "Add Money", choose your preferred payment method (UPI, Card, or Net Banking), enter the amount, and complete the payment process.'
    },
    {
      id: 8,
      question: 'Can I schedule a ride in advance?',
      answer: 'Yes, you can schedule rides up to 7 days in advance. When booking, select "Schedule for later" and choose your preferred date and time.'
    }
  ];

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Booking Issue' },
    { value: 'payment', label: 'Payment Problem' },
    { value: 'driver', label: 'Driver Concern' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'refund', label: 'Refund Request' }
  ];

  const recentTickets = [
    {
      id: 'TICKET-001',
      subject: 'Payment not processed',
      status: 'In Progress',
      date: '2025-01-15',
      category: 'Payment'
    },
    {
      id: 'TICKET-002',
      subject: 'Driver was late',
      status: 'Resolved', 
      date: '2025-01-13',
      category: 'Driver'
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketForm.subject && ticketForm.message) {
      alert('Support ticket submitted successfully! We\'ll get back to you soon.');
      setTicketForm({ subject: '', category: 'general', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicketForm(prev => ({ ...prev, [name]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">How can we help you?</h1>
        <p className="text-gray-600">Find answers to common questions or get in touch with our support team</p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-600 text-sm mb-4">Speak directly with our support team</p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
          <p className="text-gray-600 text-sm mb-4">Send us a detailed message</p>
          <a
            href="mailto:support@vrshuttle.com"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>support@vrshuttle.com</span>
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 text-sm mb-4">Chat with our support agents</p>
          <button className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>Start Chat</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="w-5 h-5 mr-2 text-purple-600" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-xl">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Ticket Form */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
              Raise a Support Ticket
            </h2>
            
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={ticketForm.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={ticketForm.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={ticketForm.message}
                  onChange={handleChange}
                  placeholder="Please provide detailed information about your issue..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1B73C2] text-white py-3 px-4 rounded-xl hover:bg-[#155a9a] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Ticket</span>
              </button>
            </form>
          </div>

          {/* Recent Tickets */}
          {recentTickets.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                Your Recent Tickets
              </h3>
              
              <div className="space-y-3">
                {recentTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-mono text-gray-500">#{ticket.id}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                      <p className="font-medium text-gray-900">{ticket.subject}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-500">{ticket.category}</span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {ticket.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-[#1B73C2] rounded-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Need Immediate Help?</h2>
          <p className="text-blue-100 mb-6">
            For urgent issues or emergencies during your ride, please contact us immediately
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911800123456"
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#1B73C2] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: +91 1800 123 456</span>
            </a>
            
            <button className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;