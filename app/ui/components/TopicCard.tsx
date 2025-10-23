"use client";
import { motion } from "motion/react";
import Image from "next/image";
export default function TopicCard() {
  return (
    <motion.div
      whileHover={{ translateY: -3 }}
      className="cursor-pointer bg-white py-5 px-5 flex justify-between items-start w-full rounded-4xl"
    >
      <div>
        <h3 className="mb-3 hover:underline cursor-pointer text-2xl font-medium">
          Love in the digital age
        </h3>
        <p className="font-normal text-lg text-gray-600">
          <span className="hover:underline cursor-pointer">Nichole Becker</span>{" "}
          & <span className="hover:underline cursor-pointer">Daryl Wehner</span>
        </p>
        <p className="font-normal text-lg text-gray-600">
          Aug 14, 2025 in #
          <span className="hover:underline cursor-pointer">Technology</span>
        </p>
      </div>
      <Image
        width={80}
        height={80}
        className="rounded-xl"
        src="/assets/images/cs.jpg"
        alt="image"
      />
    </motion.div>
  );
}
