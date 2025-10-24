"use client";
import Tag from "@/app/ui/components/Tag";
import { tags } from "@/app/lib/placeholder-data";
import { motion, stagger } from "motion/react";

export default function Showcase() {
  const text = "Your journey is here.";
  const textInArray = text.split("");
  return (
    <section className="py-10 flex flex-col gap-y-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            transition: {
              delayChildren: stagger(0.05),
            },
          },
          visible: {
            transition: {
              delayChildren: stagger(0.05),
            },
          },
        }}
        role="heading"
        className="max-md:text-center whitespace-nowrap"
      >
        {textInArray.map((l, i) =>
          l === " " ? (
            <span
              className="font-medium text-4xl md:text-7xl break-words whitespace-normal"
              key={i}
            >
              &nbsp;
            </span>
          ) : (
            <motion.span
              className="font-medium text-4xl md:text-7xl break-words whitespace-normal"
              key={i}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{ display: "inline-block" }}
            >
              {l}
            </motion.span>
          )
        )}
      </motion.div>
      <div
        role="grid"
        className="overflow-auto flex flex-nowrap lg:grid place-items-center lg:grid-cols-6 gap-2 py-2"
      >
        {tags.map((tag, index) => (
          <div key={index} className="shrink-0">
            <Tag {...tag} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
