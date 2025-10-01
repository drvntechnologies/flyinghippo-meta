import React from 'react';
import { Play, Star, ArrowRight, CheckCircle, TrendingUp, MapPin, Users, Calendar } from 'lucide-react';
import MultiStepForm from './components/MultiStepForm';

function App() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Auto Repair",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Within 2 months, we went from page 3 to #1 on Google Maps. Our phone calls increased by 400% and revenue is up 60%. Best investment we've ever made!"
    },
    {
      name: "Michael Chen",
      business: "Elite Dental Practice",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The results speak for themselves. We're now the top dental practice in our area on Google Maps. New patient inquiries have tripled since working with them."
    },
    {
      name: "Lisa Rodriguez",
      business: "Rodriguez Law Firm",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional, results-driven, and they deliver exactly what they promise. We hit #2 in just 6 weeks. I recommend them to every business owner I know."
    }
  ];

  const caseStudies = [
    {
      business: "Florida Roofing Company",
      industry: "Roofing Services",
      timeframe: "8 weeks",
      initialRank: "#20+",
      finalRank: "#1",
      callIncrease: "240%",
      revenueIncrease: "$63.5K/month",
      image: "/floridaroofingcalls.png"
    },
    {
      business: "Altoona Park Storage",
      industry: "Real Estate",
      timeframe: "12 weeks", 
      initialRank: "#20+",
      finalRank: "#1",
      callIncrease: "1500%",
      revenueIncrease: "$17.5K/month",
      image: "/altoonaparkstorage.webp"
    },
    {
      business: "Midwest HVAC Company",
      industry: "HVAC Services",
      timeframe: "10 weeks",
      initialRank: "#31",
      finalRank: "#1",
      callIncrease: "70%",
      revenueIncrease: "$67K/month",
      image: "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Get Ranked in the Top 3 on Google Maps within{' '}
            <span className="text-blue-600">3 Months</span>{' '}
            - Or We Work For Free Until You Do
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              No Long-Term Contracts
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Increased Rankings in 90 Days or Less
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              100% White Hat Methods
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See How We've Helped Businesses Like Yours
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Watch this 3-minute video to discover our proven process that gets results fast.
          </p>
          
          {/* Video Player */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 aspect-video">
            <iframe
              src="https://www.loom.com/embed/b930b83cbb1049c38edeb1e15cbe5831?sid=33e49c2c-fddd-447d-aeb7-a88da9b75587"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="Business Growth Video"
            ></iframe>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </button>
          <p className="text-sm text-gray-500 mt-4">Free consultation • No obligation • Results guaranteed</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real businesses across different industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.business}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              See the exact results we've delivered for businesses in different industries
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={study.image} 
                      alt={study.business}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="ml-3 text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.timeframe}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.business}</h3>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="flex items-center mb-2">
                          <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                          <span className="font-semibold text-gray-900">Ranking</span>
                        </div>
                        <p className="text-gray-600">From {study.initialRank} → <span className="font-bold text-green-600">{study.finalRank}</span></p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-blue-500 mr-2" />
                          <span className="font-semibold text-gray-900">Calls</span>
                        </div>
                        <p className="text-gray-600">Increased by <span className="font-bold text-blue-600">{study.callIncrease}</span></p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-800">Revenue Increase:</span>
                        <span className="ml-2 text-xl font-bold text-green-600">{study.revenueIncrease}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join the hundreds of businesses that have transformed their online presence and revenue. 
            Get your free consultation today and discover how we can get you ranked in the top 3.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Start Your Free Consultation
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            <p className="text-blue-100 text-sm">
              No credit card required • 100% free analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-blue-200">Businesses Ranked</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$50M+</div>
              <div className="text-blue-200">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Form Popup */}
      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;