export const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-20 bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
              About Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Mission
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At A2Z Company, our mission is to empower teams to achieve their
              best work. We believe in creating tools that are not only powerful
              and efficient but also intuitive and enjoyable to use. Our team is
              dedicated to innovation and excellence, constantly pushing the
              boundaries of what's possible.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};