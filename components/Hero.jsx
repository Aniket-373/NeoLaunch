import React from "react";

const Hero = () => {
  const products = [
    {
      title: "Smartphone X",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2024/09/iphone-2048px-6979.jpg?auto=webp&quality=75&width=1024",
      description:
        "Latest smartphone with high-speed performance and stunning design.",
    },
    {
      title: "Wireless Headphones",
      image:
        "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg",
      description:
        "Experience high-quality sound with noise cancellation technology.",
    },
    {
      title: "Smartwatch Pro",
      image:
        "https://acwo.com/cdn/shop/files/fwit-go-on-ultra-1_533x.webp?v=1737538757",
      description:
        "Stay connected and track your health with this sleek smartwatch.",
    },
    {
      title: "Mechanical Keyboard",
      image: "https://images-cdn.ubuy.co.in/6358494bda4dff5187577809-kitcom-rgb-gaming-mechanical-keyboard.jpg",
      description: "High-quality mechanical keyboard with customizable RGB lighting and tactile switches."
    },
    {
      title: "Noise-Canceling Earbuds",
      image: "https://images-cdn.ubuy.co.in/679a8b287cb1f76bdc6aee3a-sony-wf-1000xm4-industry-leading-noise.jpg",
      description: "Compact and powerful earbuds with active noise cancellation and long battery life."
    },
    {
      title: "4K Smart TV",
      image: "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/de0d3686-4766-11ee-8cfb-8ee861fd9236.jpg",
      description: "Ultra HD Smart TV with stunning visuals, Dolby Atmos sound, and streaming apps."
    },
    {
      title: "Gaming Chair",
      image: "https://m.media-amazon.com/images/I/816VxP7ZyTL._AC_UF894,1000_QL80_.jpg",
      description: "Ergonomic gaming chair with lumbar support, adjustable height, and premium build."
    },
    {
      title: "Drone Camera",
      image: "https://5.imimg.com/data5/VM/QO/MY-13169908/phantom-drone-camera.jpg",
      description: "High-resolution drone with 4K camera, stable flight control, and long battery life."
    },
    {
      title: "Fitness Tracker",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/YP/LY/FV/78305368/m4-fitness-band-500x500.png",
      description: "Track your steps, heart rate, and workouts with this advanced fitness tracker."
    }
  ];

  const TargetCards = ()=> {
    document.getElementById("cards").scrollIntoView({behavior : "smooth"});
  }

  return (
    <div className="main">
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-green-500 to-green-900 text-white">
        <h1 className="text-5xl font-bold">Welcome to NeoLaunch</h1>
        <p className="mt-4 text-lg">Browse Through Products Below.</p>
        <button onClick={TargetCards} className="mt-6 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-700 hover:text-white cursor-grab">
          Swipe Up
        </button>
      </section>

      {/* cards */}
      <section id="cards" className="py-12 bg-gradient-to-r from-green-500 to-green-900 min-h-screen text-center">
        <div className="container mx-auto px-6">
          <h2 className="mt-28 text-3xl font-bold text-white mb-8">
            ✨ Featured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md w-auto hover:scale-90 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
