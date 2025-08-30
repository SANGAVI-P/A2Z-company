export const Researches = () => {
  return (
    <section id="researches" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Research
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Backed by Data
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We invest heavily in research and development to stay ahead of the
              curve. Our dedicated team of researchers explores emerging trends
              and technologies to continuously innovate and improve our
              platform, ensuring you always have the best tools at your
              disposal.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Research"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-xl object-cover object-center mt-8"
          />
        </div>
      </div>
    </section>
  );
};