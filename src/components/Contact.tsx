import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-600 px-3 py-1 text-sm text-white transition-transform duration-300 ease-in-out hover:scale-105">
              Get in Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              We'd Love to Hear From You
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-purple-400" />
              <p>hello@a2zcompany.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-purple-400" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-purple-400" />
              <p>123 Innovation Drive, Tech City, 12345</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out hover:scale-110"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out hover:scale-110"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out hover:scale-110"><Facebook /></a>
            </div>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
            <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
            <Textarea placeholder="Your Message" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white transition-transform duration-300 ease-in-out hover:scale-105">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};