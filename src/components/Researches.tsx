export const Researches = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-16 lg:py-20 bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-600 px-3 py-1 text-sm text-white">
              Innovation-Driven
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Pioneering the Future of Work
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our relentless pursuit of innovation is what sets us apart. We're constantly exploring and implementing cutting-edge technologies to build a smarter, more intuitive platform for tomorrow's challenges.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Research"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-xl object-cover object-center mt-8 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};