import React from 'react'

const features = [
    { 
      title: "Seamless Shopping Experience", 
      icon: "🛒", 
      description: "Browse products effortlessly with an intuitive interface and smooth navigation." 
    },
    { 
      title: "Secure Payment Options", 
      icon: "💳", 
      description: "Multiple payment methods, including Credit/Debit Cards, UPI, PayPal, and BNPL." 
    },
    { 
      title: "Fast & Reliable Delivery", 
      icon: "🚀", 
      description: "Guaranteed on-time delivery with real-time tracking." 
    },
    { 
      title: "24/7 Customer Support", 
      icon: "📞", 
      description: "Instant chat, email, and phone support to assist customers anytime." 
    }
  ];
  
  const Features = () => {
    return (
      <div className="feature">
      <section className=" py-12 text-center bg-gradient-to-r from-green-500 to-green-900 min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="mt-28 text-3xl font-bold text-center mb-8 text-white">Why Shop With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center w-full hover:scale-105 transition-transform cursor-pointer">
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    );
  };
  

export default Features
