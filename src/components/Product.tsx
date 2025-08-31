export const Product = () => {
  return (
    <section id="product" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product Image 1"
              className="aspect-square w-full rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40"
            />
            <img
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product Image 2"
              className="aspect-square w-full rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40"
            />
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product Image 3"
              className="aspect-square w-full rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40"
            />
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Product Image 4"
              className="aspect-square w-full rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40"
            />
          </div>
          <div className="space-y-4 lg:order-first">
            <div className="inline-block rounded-lg bg-pink-500 px-3 py-1 text-sm text-white transition-transform duration-300 ease-in-out hover:scale-105">
              Crafted for Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Designed for Productivity
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is a comprehensive solution designed to tackle the most complex challenges. With a user-centric design, it offers a seamless experience, powerful integrations with the tools you already use, and robust, enterprise-grade security to ensure your data is always safe and your team can work with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};