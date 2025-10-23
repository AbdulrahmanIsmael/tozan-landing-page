"use client";
import { motion } from "motion/react";
import ArticleCard from "@/app/ui/components/ArticleCard";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Features() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex flex-col gap-y-10 py-5 border-t border-t-gray-200"
    >
      <h2 className="text-xl">Now Featured</h2>
      <div className="bg-[#e6e4e3] px-8 py-10 rounded-4xl flex flex-col items-center gap-y-5">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-medium text-[40px]">What We Love</h2>
          <a
            className="font-normal text-[21px] flex items-center gap-x-1"
            href="."
          >
            See all featured
            <IoIosArrowRoundForward size={25} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ArticleCard featured={true} />
          <ArticleCard featured={true} />
          <ArticleCard featured={true} />
          <ArticleCard featured={true} />
        </div>
      </div>
    </motion.section>
  );
}
