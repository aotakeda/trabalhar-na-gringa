"use client";

import { useState, useEffect } from "react";
import { Globe } from "@/components/magicui/globe";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-6 md:min-h-screen md:grid md:grid-cols-2 md:gap-8 md:py-0 lg:gap-16">
        <motion.div
          className="w-full max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="rounded-2xl p-4 backdrop-blur-sm sm:p-6 md:p-8">
            <motion.h1
              className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Trabalhe pra{" "}
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-green-600 pb-1 bg-clip-text text-transparent sm:pb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Gringa
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-3 text-sm text-gray-600 sm:text-base md:mt-4 md:text-lg lg:mt-6 lg:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Guia <span className="font-bold">100% gratuito</span> pra você
              conseguir seu primeiro emprego de dev pra gringa.
            </motion.p>

            <motion.div
              className="mt-4 flex justify-center sm:mt-6 md:justify-start md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Link href="/guia">
                <Button className="group rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-4 py-4 text-xs text-white transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 sm:px-5 sm:py-5 sm:text-sm md:px-6 md:py-6 md:text-base">
                  Leia agora
                  <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto mt-8 flex h-[250px] w-full max-w-[300px] items-center justify-center sm:h-[300px] sm:max-w-[400px] md:h-[400px] md:mt-0 md:max-w-none lg:h-[600px]"
        >
          <Globe className="absolute inset-0" />
        </motion.div>
      </div>
    </section>
  );
}
