"use client";
import ArticleCard from "@/app/ui/components/ArticleCard";
import { motion } from "motion/react";

export default function Articles() {
  return (
    <motion.section
      initial={{
        x: -1000,
      }}
      whileInView={{
        x: 0,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-y-10 py-5 border-t border-t-gray-200"
    >
      <h2 className="text-xl">What's new</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <button
        type="button"
        className="cursor-pointer px-15 py-6 rounded-[50px] bg-[#D4FF00] text-2xl self-center mt-5"
      >
        Still 26 articles to load
      </button>
    </motion.section>
  );
}
