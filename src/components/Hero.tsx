import React from "react";
import { ArrowRight, Coins } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <>
      <Carousel
        className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          duration: 0.5,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
            playOnInit: true,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {/* Slide 1 */}
          <CarouselItem className="relative text-white overflow-hidden">
            <motion.div
              className="absolute inset-0 w-full h-full z-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.45 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <motion.div
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Descubra a História
                  <span className="block text-yellow-400">do Dinheiro</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Uma viagem fascinante através da evolução monetária, desde as
                  primeiras moedas até aos sistemas de pagamento modernos
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Planear Visita</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                    Exposições Atuais
                  </button>
                </div>
              </div>
            </motion.div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem className="relative text-white overflow-hidden flex items-center justify-center min-h-[400px]">
            <motion.div
              className="absolute inset-0 w-full h-full z-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.45 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <motion.div
              className="relative z-10 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Curiosidades Monetárias
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                Sabia que as primeiras moedas eram feitas de eletro, uma liga
                natural de ouro e prata?
              </p>
            </motion.div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem className="relative text-white overflow-hidden flex items-center justify-center min-h-[400px]">
            <motion.div
              className="absolute inset-0 w-full h-full z-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.45 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <motion.div
              className="relative z-10 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Visite o Museu
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                Explore exposições interativas e descubra como o dinheiro moldou
                a nossa sociedade.
              </p>
            </motion.div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-10 z-10" />
        <CarouselNext className="right-10 z-10" />
      </Carousel>
    </>
  );
};

export default Hero;
