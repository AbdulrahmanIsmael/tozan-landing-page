"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";

export default function Ad() {
  return (
    <section className="flex flex-col gap-y-6 py-5 border-t border-t-gray-200">
      <h2 className="text-xl">Continue the journey</h2>
      <div className="bg-[url('/assets/images/bg.webp')] bg-center bg-cover px-5 py-4 rounded-4xl flex flex-col gap-y-30">
        <div className="w-fit text-[21px] bg-gray-200/80 p-2 rounded-4xl">
          <p>See beyond</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-end gap-x-5 gap-y-2">
          <motion.a
            whileHover={{ translateY: -5 }}
            href="."
            className="bg-gray-200/80 p-2 rounded-2xl px-6 py-3 text-2xl max-md:w-full text-center"
          >
            Membership
          </motion.a>
          <a
            href="."
            className="hover:underline cursor-pointer px-19 py-3 rounded-4xl bg-[#D4FF00] text-2xl flex items-center justify-center max-md:w-full"
          >
            Join for free <IoIosArrowRoundForward size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
